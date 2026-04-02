"use client";

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [count, setCount] = useState(5);
  const [difficulty, setDifficulty] = useState('중');
  const [includeGraphs, setIncludeGraphs] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [examContent, setExamContent] = useState('');
  const [error, setError] = useState(null);

  const generateExam = async () => {
    if (!topic) return;
    setIsLoading(true);
    setError(null);
    setExamContent('');
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          topic, 
          count, 
          difficulty, 
          includeGraphs 
        }),
      });
      
      let data = {};
      const text = await response.text();
      
      try {
        data = text ? JSON.parse(text) : {};
      } catch (parseError) {
        if (!response.ok) {
          throw new Error(`서버 오류 (${response.status}): ${text || '알 수 없는 오류가 발생했습니다.'}`);
        }
        throw new Error('서버 응답 형식이 올바르지 않습니다.');
      }

      if (!response.ok) {
        throw new Error(data.error || `생성 중 오류가 발생했습니다. (상태 코드: ${response.status})`);
      }
      
      setExamContent(data.content);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container">
      {/* Web UI - Hidden during print */}
      <div className="no-print header-glass">
        <h1>AI 수학 모의고사 생성기</h1>
        <p>원하시는 수학 과목이나 단원을 입력하면 AI가 맞춤형 시험지를 만들어 드립니다.</p>
        
        <div className="settings-container">
          <div className="setting-item">
            <label className="setting-label">단원/주제</label>
            <input 
              type="text" 
              className="input-field" 
              placeholder="예: 공통수학1 다항식, 수학1 삼각함수" 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && generateExam()}
            />
          </div>

          <div className="setting-item">
            <label className="setting-label">문제 개수 ({count}문항)</label>
            <div className="slider-container">
              <input 
                type="range" 
                min="1" 
                max="20" 
                value={count} 
                onChange={(e) => setCount(parseInt(e.target.value))} 
              />
            </div>
          </div>

          <div className="setting-item">
            <label className="setting-label">난이도</label>
            <div className="difficulty-group">
              {['하', '중', '상'].map((d) => (
                <button 
                  key={d}
                  className={`btn-diff ${difficulty === d ? 'active' : ''}`}
                  onClick={() => setDifficulty(d)}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="setting-item">
            <label className="setting-label">그래프 포함</label>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={includeGraphs} 
                onChange={(e) => setIncludeGraphs(e.target.checked)} 
              />
              <span className="slider-toggle"></span>
            </label>
          </div>
        </div>

        <button 
          className="btn-primary" 
          onClick={generateExam} 
          disabled={isLoading || !topic}
        >
          {isLoading ? '시험지 생성 중...' : '시험지 생성하기'}
          {isLoading && <span className="loading" />}
        </button>
        
        {error && <div style={{ color: '#ef4444', marginTop: '15px', fontWeight: '500' }}>{error}</div>}
        
        {examContent && (
          <div style={{ marginTop: '20px' }}>
            <button className="btn-print" onClick={handlePrint}>
              🖨️ 시험지 인쇄하기 (A4 가로 2단)
            </button>
          </div>
        )}
      </div>

      {/* Rendered Exam Paper */}
      {examContent && (
        <div className="exam-root">
          <div className="exam-header">
            <h2>2024학년도 대학수학능력시험 모의평가 문제지</h2>
            <div className="exam-header-meta">
              <span>제 2 교시</span>
              <span>수학 영역 ({topic})</span>
            </div>
          </div>
          
          <div className="exam-content">
            <ReactMarkdown 
              remarkPlugins={[remarkMath]} 
              rehypePlugins={[rehypeKatex, rehypeRaw]}
            >
              {examContent}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}
