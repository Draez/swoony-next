import React, { FC } from "react";
import { Quicksand } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const quickSand = Quicksand({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
});

const Header: FC = () => {
  return (
    <>
      <section className="w-full relative">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/match.jpg"
            alt="Background"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-main-blue/80" />
        </div>

        <div className="relative">
          <div className="items-center justify-between p-8">
            <div className="container mx-auto flex items-center justify-between">
              <Link href="/">
                <div className="pointer-events-none select-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0 m">

                  <Image
                    src="/swoony.svg"
                    alt="Swoony: Dating app"
                    width={32}
                    height={24}
                    priority
                  />
                  <div
                    className={`${quickSand.className} text-xl font-semibold text-zinc-50 uppercase tracking-wide`}
                  >
                    Swoony
                  </div>

                </div>
              </Link>
              <div className="flex justify-center items-center">
                <a href="#footer-section" className="hidden md:block text-md text-white font-bold mr-8">
                  Tilaa uutiskirje
                </a>
                <a href="https://www.instagram.com/swoonyofficial/" target="_blank">
                  <Image
                    src="/instagram.svg"
                    alt="Swoony instagram link"
                    className="mr-4"
                    width={32}
                    height={24}
                    priority
                  />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100095309208001" target="_blank">
                  <Image
                    src="/facebook.svg"
                    alt="Swoony facebook link"
                    width={36}
                    height={24}
                    priority
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="pb-16 flex flex-wrap items-center p-8 md:py-16">
            <div className="lg:w-full xl:w-5/6 2xl:w-4/6 container mx-auto flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
                <p className="text-lg text-white mb-3">
                  Väsynyt perinteisiin pinnallisiin deitti-sovelluksiin?
                </p>
                <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-white mb-8" style={{ lineHeight: '1.25' }}>
                  Suomen paras Matchmaking -sovellus
                </h1>

                <div className="flex flex-col sm:flex-row">
                  <a
                    href="https://apps.apple.com/app/swoony/id6499217523"
                    target="_blank"
                    className="inline-flex items-center bg-black text-white text-lg font-semibold py-4 px-8 rounded-full hover:bg-black/80"
                  >
                    <Image src="/apple.png" alt="Apple" width={24} height={24} />
                    <span className="ml-3">Lataa sovellus</span>
                  </a>

                  <button disabled className="inline-flex items-center bg-gray-400 sm:ml-4 mt-4 sm:mt-0 text-white text-lg font-semibold py-4 px-8 rounded-full cursor-not-allowed opacity-50">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.523 15.341c-.554 0-1.023.444-1.023 1.023 0 .554.444 1.023 1.023 1.023.554 0 1.023-.444 1.023-1.023 0-.554-.444-1.023-1.023-1.023m-11.046 0c-.554 0-1.023.444-1.023 1.023 0 .554.444 1.023 1.023 1.023.554 0 1.023-.444 1.023-1.023 0-.554-.444-1.023-1.023-1.023m11.338-6.831l2.256-3.89a.523.523 0 00-.184-.716.523.523 0 00-.716.184l-2.28 3.938c-1.36-.615-2.988-.984-4.891-.984-1.903 0-3.531.369-4.891.984L4.829 4.088a.523.523 0 00-.716-.184.523.523 0 00-.184.716l2.256 3.89C2.77 10.452.5 13.756.5 17.523h23c0-3.767-2.27-7.071-5.685-9.013z" fill="white" />
                    </svg>
                    <span className="ml-3">Android -tulossa</span>
                  </button>
                </div>

              </div>
              <div className="w-full md:w-1/2 py-8 order-1 md:order-2">
                <Image
                  className="h-auto w-full object-contain max-h-[1080px] rounded-xl mx-auto md:ml-auto"
                  width="1080"
                  height="1080"
                  src="/swoonytest.svg"
                  alt="Swoony: Etsi rakkaus asiantuntijoiden avulla"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
