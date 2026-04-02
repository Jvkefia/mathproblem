import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const getSystemPrompt = (count, difficulty, includeGraphs) => `당신은 대한민국 최고 수준의 고등학교 수학 교육 전문가이자 수능 출제 위원입니다.
사용자가 수학 단원을 말하면, 해당 단원과 관련된 수능/모의평가 형식의 수학 문제 ${count}개를 출제해야 합니다.

**[설정 정보]**
- 문항 개수: ${count}문항
- 난이도: ${difficulty} (하: 기초 개념, 중: 응용 및 복합 개념, 상: 고난도 킬러 문항 수준)
- 그래프/도형 포함 여부: ${includeGraphs ? '필요 시 적극 포함' : '포함하지 않음'}

**[매우 중요한 지시사항 - 반드시 지킬 것]**
1. 출력은 오직 **마크다운(Markdown)**과 **LaTeX**만 사용하세요. 군더더기 인사말은 절대 하지 마세요.
2. 수식은 인라인의 경우 \`$수식$\`, 블록 수식의 경우 \`$$수식$$\`을 사용하세요.
3. 문항 번호는 서식 없이 단순 텍스트로 "1.", "2." 와 같이 시작하게 작성하세요.
4. 각 문제의 마지막에는 반드시 5지 선다형 보기를 제공하며, 보기에 사용하는 기호는 원문자(①, ②, ③, ④, ⑤)여야 합니다.
5. 실제 한국의 모의평가나 대학수학능력시험처럼 정중하고 학술적인 시험지 전용 문투를 사용하세요.

${includeGraphs ? `**[그래프/도형 생성 가이드]**
6. 시각 자료(그래프, 도형)가 필요한 문제의 경우, 별도의 이미지 파일 대신 **직접 SVG 코드**를 마크다운 내에 포함하세요.
   - SVG는 \`<svg width="300" height="200" viewBox="0 0 300 200">...\` 형식을 사용하세요.
   - 배경은 흰색, 선은 검은색(#000)을 기본으로 하며, 좌표축(x, y축)과 원점(O)을 명확히 표시하세요.
   - 함수 그래프나 도형의 꼭짓점, 각도 등을 LaTeX 텍스트와 함께 조화롭게 배치하세요.
   - SVG 코드는 마크다운 내에서 줄바꿈 없이 한 줄로 작성하거나, 가독성을 위해 적절히 배치하되 문법 오류가 없어야 합니다.` : ''}

7. 해설이나 정답은 이 응답에 포함하지 마세요. (순수 시험지 출력 형태만 제공)`;

const dummyContent = `1. 다항식 $P(x) = x^3 - 2x^2 + ax + b$ 가 $x^2 - 1$ 로 나누어 떨어질 때, 상수 $a, b$ 에 대하여 $a+b$ 의 값을 구하시오.

① $1$ 
② $2$ 
③ $3$ 
④ $4$ 
⑤ $5$

2. $x$ 에 대한 이차방정식 $x^2 - 4x + k = 0$ 이 서로 다른 두 실근을 갖도록 하는 실수 $k$ 의 값의 범위를 구하시오.

① $k < 1$ 
② $k < 2$ 
③ $k < 3$ 
④ $k < 4$ 
⑤ $k < 5$

3. 두 다항식 $A = x^2 + 2xy - y^2$, $B = 2x^2 - xy + 3y^2$ 에 대하여 $A + 3B$ 를 다음 중 바르게 계산한 것은?

① $5x^2 - y^2$
② $7x^2 - xy + 8y^2$
③ $4x^2 - 2xy + y^2$
④ $3x^2 + xy + 2y^2$
⑤ $5x^2 + 5y^2 + xy$

4. 연립방정식 $\\begin{cases} x-y=3 \\\\ x^2-xy+y^2=7 \\end{cases}$ 을 만족시키는 실수 $x, y$ 에 대하여 $x^2 + y^2$ 의 값을 구하시오.

① $9$
② $10$
③ $11$
④ $12$
⑤ $13$

5. 다항식 $2x^3 - 3x^2 + x - 1$ 을 $x - 2$ 로 나누었을 때의 나머지 $R$ 을 구하시오.

① $2$
② $3$
③ $4$
④ $5$
⑤ $6$

> **⚠️ 알림 (API 키 없음)**
> 현재 서버 환경 변수에 \`GEMINI_API_KEY\` 가 설정되어 있지 않아 위와 같이 **미리 준비된 예시 문제(Mock Data)**가 출력되었습니다. 
> 실제 AI로 문제를 동적 생성하려면 Cloudflare Pages 등 배포 환경이나 로컬 \`.env.local\` 파일에 Gemini API Key를 설정해 주세요.`;

export async function POST(req) {
  try {
    const { topic, count, difficulty, includeGraphs } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return new Response(JSON.stringify({ content: dummyContent }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // 실제 사용자 계정에서 확인된 사용 가능한 모델 목록
    const modelsToTry = [
      "gemini-flash-latest",    // 확인된 안정적인 이름
      "gemini-2.0-flash",       // 확인됨 (할당량 주의)
      "gemini-2.5-flash",       // 확인됨
      "gemini-pro-latest",      // 확인됨
      "gemini-1.5-flash"        // 예비용
    ];
    let lastError = null;

    for (const modelName of modelsToTry) {
      try {
        const model = genAI.getGenerativeModel({ 
          model: modelName,
          systemInstruction: getSystemPrompt(count || 5, difficulty || '중', includeGraphs),
        });
        
        const result = await model.generateContent(`출제해줘. 과목 및 단원: ${topic}`);
        const response = await result.response;
        const content = response.text();

        // 성공하면 즉시 반환
        return new Response(JSON.stringify({ content }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      } catch (e) {
        lastError = e;
        console.warn(`Model ${modelName} failed:`, e.message);
        
        // 404(모델 없음)이거나 429(할당량 초과)인 경우 모두 다음 모델 시도
        if (e.status === 404 || e.message?.includes("404") || e.status === 429 || e.message?.includes("quota") || e.message?.includes("429")) {
          continue;
        }
        
        break; // 그 외 치명적인 오류는 중단
      }
    }

    // 모든 모델 시도가 실패한 경우
    console.error("All models failed. Last error:", lastError);
    
    let errorMessage = "AI 문제 생성 통신 중 오류가 발생했습니다.";
    let status = 500;

    if (lastError?.message?.includes("quota") || lastError?.message?.includes("429") || lastError?.status === 429) {
      errorMessage = "AI 서비스 이용량이 많아 잠시 후 다시 시도해 주세요. (할당량 초과)";
      status = 429;
    } else if (lastError?.message?.includes("404") || lastError?.status === 404) {
      errorMessage = "사용 가능한 AI 모델을 찾을 수 없습니다. (404 오류)";
      status = 404;
    }

    return new Response(
      JSON.stringify({ error: errorMessage, details: lastError?.message }),
      { 
        status: status,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error("Generate API Critical Error:", error);
    return new Response(
      JSON.stringify({ error: "서버 내부 오류가 발생했습니다." }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
