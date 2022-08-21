import type { AppProps } from "next/app";
import { IconContext } from "react-icons";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IconContext.Provider value={{ size: "18px" }}>
      <Component {...pageProps} />
    </IconContext.Provider>
  );
}

export default MyApp;
