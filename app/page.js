"use client";

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default function Home() {
  const [topic, setTopic] = useState('');
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
        body: JSON.stringify({ topic }),
      });
      
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || '생성 중 오류가 발생했습니다.');
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
        <p>원하시는 수학 과목이나 단원을 입력하면 AI가 수능/모의평가 형식의 시험지를 만들어 드립니다.</p>
        
        <div className="input-group">
          <input 
            type="text" 
            className="input-field" 
            placeholder="예: 공통수학1 다항식, 수학1 삼각함수" 
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && generateExam()}
          />
          <button 
            className="btn-primary" 
            onClick={generateExam} 
            disabled={isLoading || !topic}
          >
            {isLoading ? '생성 중...' : '시험지 생성'}
            {isLoading && <span className="loading" />}
          </button>
        </div>
        
        {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
        
        {examContent && (
          <button className="btn-print" onClick={handlePrint} style={{ marginTop: '30px' }}>
            🖨️ 시험지 실제 크기로 인쇄하기
          </button>
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
          
          <div className="exam-content" style={{fontSize: '11pt', lineHeight: 1.8}}>
            <ReactMarkdown 
              remarkPlugins={[remarkMath]} 
              rehypePlugins={[rehypeKatex]}
            >
              {examContent}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}
