import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:image" content="/hero-large.png" />
      </Head>
      <body>
        <div className="cursor"></div>
        <div className="cursor2"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
