import './globals.css'

export const metadata = {
  title: 'AI Math Mock Exam Generator',
  description: 'AI로 생성하는 수능 형태의 수학 모의고사 생성기',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
