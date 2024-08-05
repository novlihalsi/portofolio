import { Html, Head, Main, NextScript } from "next/document";
// import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Unbounded:wght@200..900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="/favicon-72x72.png"
          rel="apple-touch-icon"
          sizes="72x72"
          type="image/png"
        />
        <link
          href="/favicon-192x192.png"
          rel="icon"
          sizes="192x192"
          type="image/png"
        />
        <link
          href="/favicon-512x512.png"
          rel="icon"
          sizes="512x512"
          type="image/png"
        />
        <link
          href="/favicon-96x96.png"
          rel="icon"
          sizes="96x96"
          type="image/png"
        />
        <link
          href="/favicon-48x48.png"
          rel="icon"
          sizes="48x48"
          type="image/png"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />

        <link href="/manifest.json" rel="manifest" />
        <meta name="theme-color" content="#0078F0" />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Global site tag (gtag.js)*/}
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DDGY9LG111"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-DDGY9LG111');
        `}
        </Script> */}
        {/* End Global site tag (gtag.js) */}
      </body>
    </Html>
  );
}
