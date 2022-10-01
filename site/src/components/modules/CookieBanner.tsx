import { AnimatePresence, motion } from "framer-motion";
import NoSSR from "react-no-ssr";
import useLocalStorage from "../../lib/use-local-storage";
import Script from "next/script";

export default function CookieBanner() {
  const [cookieStatus, setCookieStatus] = useLocalStorage<
    "unset" | "disallowed" | "allowed"
  >("cookieStatus", "unset");

  function handleDisallowCookies() {
    setCookieStatus("disallowed");
  }

  function handleAllowCookies() {
    setCookieStatus("allowed");
  }

  return (
    <NoSSR>
      {cookieStatus === "allowed" && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-V6CCVYKWQ2"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-V6CCVYKWQ2');`}
          </Script>
        </>
      )}

      <AnimatePresence>
        {cookieStatus === "unset" && (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
            exit={{
              opacity: 0,
              y: 32,
              transition: { opacity: { duration: 0.2 } },
            }}
            className="fixed bottom-6 right-6 ml-6 flex flex-col items-center gap-4 rounded-md bg-white/90 py-4 px-6 backdrop-blur-lg sm:flex-row sm:gap-8"
          >
            <p>Vi bruker cookies</p>

            <div className="flex gap-3">
              <button
                className="rounded-xs bg-gray-light py-2 px-6"
                onClick={handleDisallowCookies}
              >
                Avslå
              </button>

              <button
                className="rounded-xs bg-gray-medium py-2 px-6 text-white"
                onClick={handleAllowCookies}
              >
                Godta
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </NoSSR>
  );
}
