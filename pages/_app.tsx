import { trackFbPageView } from "@/lib/fb";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const jakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      trackFbPageView();
    });
  }, [router.events]);

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Swoony: Järjestämme sinulle elämäsi parhaat sokkotreffit</title>
        <meta
          name="description"
          content="Oletko kyllästynyt henkisesti kuluttaviin ja pinnallisiin deittisovelluksiin? Niin mekin!"
          key="desc"
        />
        <meta
          property="og:title"
          content="Swoony: Etsi rakkaus asiantuntevien mätsääjien avulla"
        />
        <meta
          property="og:description"
          content="Oletko kyllästynyt henkisesti kuluttaviin ja pinnallisiin deittisovelluksiin? Niin mekin!"
        />
        <meta name="facebook-domain-verification" content="jtzhxaou62g5muxg5h4d8uj1lfrx54" />
      </Head>

      <main className={jakartaSans.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

// <div className="flex min-h-screen flex-col items-center justify-center bg-main-blue text-white">
//   <input
//     onChange={handleChange}
//     required
//     type="text"
//     name="login"
//     placeholder="Login"
//     className="max-w-sm w-full placeholder-white bg-transparent p-3 border border-white rounded-xl focus:outline-none focus:border-blue-300 mb-4"
//   />
//   <button
//     onClick={loginHandler}
//     className="bg-main-red text-white font-semibold text-lg font-semibold py-4 max-w-sm rounded-full w-full hover:bg-main-red-hover"
//   >
//     Kirjaudu
//   </button>
// </div>
