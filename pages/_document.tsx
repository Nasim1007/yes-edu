import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"/>
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
      <meta name="google-site-verification" content="SwLaCbTiIPUCkuYeQtUhioN4cLDA2lnIOz20dRTgVBI" />
          <meta property="og:title" content="Образовательный центр Yes-Edu."/>
          <meta property="og:description" content="Образовательный центр Yes-Edu , это центр где используется  инновационная методика  которая даёт настоящий результат, что на шаг приближает к мечте."/>
          <meta property="og:image" content="/assets/android-chrome-192x192.png"/>
             {/* Global Site Tag (gtag.js) - Google Analytics */}
             <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-BCJ0LP0ZRC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BCJ0LP0ZRC');
        `}
      </Script>
      </Head>
      <body>
      <Main/>
      <div id="modal"/>
      <NextScript/>
      </body>
    </Html>
  )
}