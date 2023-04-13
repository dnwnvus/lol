import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="en" style={{ background: '#5383e8' }}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;