import "../styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="layout">
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
