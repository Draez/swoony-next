import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={jakartaSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
