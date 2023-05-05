import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useState } from "react";

const jakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [loginText, setLoginText] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginText(event.target.value);
  };

  const loginHandler = () => {
    if (loginText === "testi123") {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  };

  return isLogged ? (
    <main className={jakartaSans.className}>
      <Component {...pageProps} />
    </main>
  ) : (
    <div className="flex min-h-screen flex-col items-center justify-center bg-main-blue text-white">
      <input
        onChange={handleChange}
        required
        type="text"
        name="login"
        placeholder="Login"
        className="max-w-sm w-full placeholder-white bg-transparent p-3 border border-white rounded-xl focus:outline-none focus:border-blue-300 mb-4"
      />
      <button
        onClick={loginHandler}
        className="bg-main-red text-white font-semibold text-lg font-semibold py-4 max-w-sm rounded-full w-full hover:bg-main-red-hover"
      >
        Kirjaudu
      </button>
    </div>
  );
}
