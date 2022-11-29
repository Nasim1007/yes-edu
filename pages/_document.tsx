import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"/>
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      </Head>
      <body>
      <Main/>
      <div id="modal"/>
      <NextScript/>
      </body>
    </Html>
  )
}