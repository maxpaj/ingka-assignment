import "../styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto pt-10">
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
