import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IconContext } from "react-icons";
import NoSSR from "react-no-ssr";
import CookieBanner from "../components/modules/CookieBanner";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Handle smooth hash link navigation and then clean up the url
  useEffect(() => {
    function hashStartHandler() {
      document.documentElement.style.setProperty(
        "scroll-behavior",
        "smooth",
        "important"
      );
    }

    function hashCompleteHandler() {
      router.replace({ hash: null }, undefined, { shallow: true });

      setTimeout(() => {
        document.documentElement.style.setProperty(
          "scroll-behavior",
          "auto",
          "important"
        );
      }, 10);
    }

    router.events.on("hashChangeStart", hashStartHandler);
    router.events.on("hashChangeComplete", hashCompleteHandler);

    return () => {
      router.events.off("hashChangeStart", hashStartHandler);
      router.events.off("hashChangeComplete", hashCompleteHandler);
    };
  }, [router]);

  return (
    <IconContext.Provider value={{ size: "18px" }}>
      <Component {...pageProps} />
      <CookieBanner />
    </IconContext.Provider>
  );
}

export default MyApp;
