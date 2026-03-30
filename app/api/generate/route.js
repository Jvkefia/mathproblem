import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const systemPrompt = `당신은 대한민국 최고 수준의 고등학교 수학 교육 전문가이자 수능 출제 위원입니다.
사용자가 수학 단원을 말하면, 해당 단원과 관련된 수능/모의평가 형식의 수학 문제 5개를 출제해야 합니다.

**[매우 중요한 지시사항 - 반드시 지킬 것]**
1. 출력은 오직 **마크다운(Markdown)**과 **LaTeX**만 사용하세요. 군더더기 인사말은 절대 하지 마세요.
2. 수식은 인라인의 경우 \`$수식$\`, 블록 수식의 경우 \`$$수식$$\`을 사용하세요.
3. 문항 번호는 서식 없이 단순 텍스트로 "1.", "2." 와 같이 시작하게 작성하세요.
4. 각 문제의 마지막에는 반드시 5지 선다형 보기를 제공해야 합니다. 
   보기에 사용하는 기호는 원문자(①, ②, ③, ④, ⑤)여야 합니다. 
5. 실제 한국의 모의평가나 대학수학능력시험처럼 정중하고 학술적인 시험지 전용 문투(예: "~을 구하시오.", "~은?", "~일 때, ~의 값은?")를 사용하세요.
6. 해설이나 정답은 이 응답에 포함하지 마세요. (순수 시험지 출력 형태만 제공)`;

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
> 현재 서버 환경 변수에 \`OPENAI_API_KEY\` 가 설정되어 있지 않아 위와 같이 **미리 준비된 예시 문제(Mock Data)**가 출력되었습니다. 
> 실제 AI로 문제를 동적 생성하려면 Cloudflare Pages 등 배포 환경이나 로컬 \`.env.local\` 파일에 OpenAI API Key를 설정해 주세요.`;

export async function POST(req) {
  try {
    const { topic } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return new Response(JSON.stringify({ content: dummyContent }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `출제해줘. 과목 및 단원: ${topic}` }
      ],
      temperature: 0.7,
      max_tokens: 3000,
    });

    const result = { content: completion.choices[0].message.content };
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Generate API Error:", error);
    return new Response(
      JSON.stringify({ error: "AI 문제 생성 통신 중 오류가 발생했습니다." }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
