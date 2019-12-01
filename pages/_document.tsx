// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext
} from "next/document";
import { ServerStyleSheet } from "styled-components";

const siteTitle = "소녀, 나비, 빛";
const siteDescription = "일본군 성노예제 진실의 역사 : 소녀, 나비, 빛";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="ko">
        <Head>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          ></link>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
          />
          <meta name="description" content={siteDescription} />
          <meta property="og:title" content={siteTitle} />
          <meta property="og:description" content={siteDescription} />
          <meta property="og:image" content="/og.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
