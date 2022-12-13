import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"/>
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
          <meta property="og:title" content="Образовательный цент Yes-Edu."/>
          <meta property="og:description" content="Образовательный цент Yes-Edu , это центр где используется  инновационная методика  которая даёт настоящий результат, что на шаг приближает к мечте."/>
          <meta property="og:image" content="/assets/android-chrome-192x192.png"/>
      </Head>
      <body>
      <Main/>
      <div id="modal"/>
      <NextScript/>
      </body>
    </Html>
  )
}