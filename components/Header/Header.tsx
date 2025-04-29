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

                  <div className="relative">
                    <Image
                      src="/swoony.svg"
                      alt="Swoony: Dating app"
                      width={32}
                      height={24}
                      priority
                    />
                  </div>
                  <div className="relative">
                    <div
                      className={`${quickSand.className} text-xl font-semibold text-zinc-50 uppercase tracking-wide`}
                    >
                      Swoony
                    </div>
                  </div>

                </div>
              </Link>
              <div className="flex justify-center items-center">
                <Link href="#pricing" className="hidden md:block text-md text-white font-bold mr-8">
                  Hinnasto
                </Link>
                <Link href="#ajankohtaista" className="hidden md:block text-md text-white font-bold mr-8">
                  Ajankohtaista
                </Link>
                <Link href="#faq" className="hidden md:block text-md text-white font-bold mr-8">
                  FAQ
                </Link>
                <Link href="#footer-section" className="hidden md:block text-md text-white font-bold mr-8">
                  Tilaa uutiskirje
                </Link>
                <Link href="https://www.instagram.com/swoonyofficial/" target="_blank">
                  <Image
                    src="/instagram.svg"
                    alt="Swoony instagram link"
                    className="mr-4"
                    width={32}
                    height={24}
                    priority
                  />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=100095309208001" target="_blank">
                  <Image
                    src="/facebook.svg"
                    alt="Swoony facebook link"
                    width={36}
                    height={24}
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="pb-16 flex flex-wrap items-center p-8 md:py-16">
            <div className="lg:w-full xl:w-5/6 2xl:w-4/6 container mx-auto flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
                <div className="relative mb-4">
                  <span className="inline-block bg-main-red text-white text-sm font-bold px-3 py-1 rounded-md">
                    1600+ rekisteröitynyttä käyttäjää
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-white" style={{ lineHeight: '1.25' }}>
                  Suomen paras Matchmaking -sovellus
                </h1>

                <p className="text-lg text-white mt-3">
                  Kyllästynyt perinteisiin pinnallisiin deitti-sovelluksiin? Swoony yhdistää asiantuntijat ja tekoälyn löytääkseen sinulle sopivan kumppanin.
                </p>

                <div className="flex flex-row gap-2">
                  <Link
                    href="https://apps.apple.com/app/swoony/id6499217523"
                    target="_blank"
                  >
                    <Image src="/applestore.svg" alt="Apple" width={180} height={180} />
                  </Link>

                  <Link
                    href="https://play.google.com/store/apps/details?id=fi.swoonymatchmaking.app"
                    target="_blank"
                  >
                    <Image src="/google-play.svg" alt="Google" width={180} height={180} />
                  </Link>
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
