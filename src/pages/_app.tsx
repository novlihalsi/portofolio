import "app/styles/index.scss";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { ToastContainer, Slide } from "react-toastify";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, ReactElement, ReactNode, useState } from "react";
import { DefaultSeo } from "next-seo";
import { siteConfig } from "app/constants/general";
import { NextPage } from "next";
import { LayoutContext } from "app/context/layout";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: any;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const progress = NProgress.configure({
  showSpinner: false,
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleStart = (_: string, { shallow }: { shallow: boolean }) => {
      if (!shallow) {
        progress.start();
      }
    };
    const handleStop = () => {
      setIsMenuOpen(false);

      progress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  useEffect(() => {
    const updateDimensions = () => {
      // window.location.reload();
    };
    window.addEventListener("resize", updateDimensions);

    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <LayoutContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      <DefaultSeo
        canonical={`${siteConfig.site_url}${router.asPath || "/"}`}
        description={siteConfig.site_description}
        openGraph={{
          type: "website",
          locale: "en_EN",
          title: siteConfig.site_tagline,
          description: siteConfig.site_description,
          site_name: siteConfig.site_name,
        }}
        twitter={{
          handle: "@novlihalsi",
          site: "@novlihalsi",
          cardType: "summary_large_image",
        }}
        title={siteConfig.site_tagline}
        titleTemplate={`%s - ${siteConfig.site_name}`}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        {getLayout(<Component {...pageProps} />)}
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={true}
          icon={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          transition={Slide}
        />
      </>
    </LayoutContext.Provider>
  );
}

// export function reportWebVitals({
//   id,
//   name,
//   label,
//   value,
// }: NextWebVitalsMetric) {
//   if (typeof window.gtag !== "undefined") {
//     window.gtag("event", name, {
//       event_category:
//         label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
//       value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
//       event_label: id, // id unique to current page load
//       non_interaction: true, // avoids affecting bounce rate.
//     });
//   }
// }

export default MyApp;
