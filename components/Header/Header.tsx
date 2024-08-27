import React, { FC } from "react";
import { Quicksand } from "next/font/google";
import Image from "next/image";

const quickSand = Quicksand({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
});

const Header: FC = () => {
  return (
    <>
      <section className="w-full">
        <div className="items-center justify-between bg-main-blue p-8">
          <div className="container mx-auto flex items-center justify-between">
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
        <div className="pb-16 flex flex-wrap items-center bg-main-blue p-8 md:py-16">
          <div className="lg:w-full xl:w-5/6 2xl:w-4/6 container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 order-first">
              <p className="text-lg text-white mb-3">
                Väsynyt perinteisiin pinnallisiin deitti-sovelluksiin?
              </p>
              <h1 className="text-4xl lg:text-5xl 2xl:text-6xl lg:leading-extra-loose 2xl:leading-extra-loose font-bold text-white mb-8">
                Järjestämme sinulle elämäsi parhaat sokkotreffit
              </h1>

              <a
                href="https://apps.apple.com/app/swoony/id6499217523"
                target="_blank"
                className="inline-flex items-center bg-main-red text-white text-lg font-semibold py-4 px-8 rounded-full hover:bg-main-red-hover"
              >
                <Image src="/apple.png" alt="Apple" width={24} height={24} />
                <span className="ml-3">Lataa sovellus</span>
              </a>
            </div>
            <div className="w-full md:w-1/2 py-8 bg-main-blue order-last">
              <Image
                className="h-auto w-full object-contain max-h-[680px] rounded-xl mx-auto md:ml-auto"
                width="400"
                height="680"
                src="/app_mock.svg"
                alt="Swoony: Etsi rakkaus asiantuntijoiden avulla"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
