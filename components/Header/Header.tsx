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
                Liity nyt
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
          <div className="lg:w-full xl:w-5/6 2xl:w-4/6 container mx-auto flex items-center justify-between">
            <div className="w-full md:w-1/2">
              <p className="text-lg text-white mb-3">
                Väsynyt perinteisiin pinnallisiin deitti-sovelluksiin?
              </p>
              <h1 className="text-4xl lg:text-5xl 2xl:text-6xl lg:leading-extra-loose 2xl:leading-extra-loose font-bold text-white mb-8">
                Järjestämme sinulle elämäsi parhaat sokkotreffit
              </h1>
              <p className="text-lg text-white mb-10">
                Älä jää paitsi uuden Swoony-deittisovelluksen julkaisusta! <br />Jätä
                yhteystietosi meille ja kuulet ensimmäisenä, kun sovellus on
                saatavilla.
              </p>
              <a
                href="#footer-section"
                className="inline-block bg-main-red text-white text-lg font-semibold py-4 px-16 rounded-full hover:bg-main-red-hover"
              >
                Liity mukaan!
              </a>
            </div>
            <div className="hidden md:block md:w-1/2 py-8 bg-main-blue">
              <Image
                className="h-auto w-100 object-contain min-w-[400px] max-h-[680px] rounded-xl ml-auto"
                width="400"
                height="400"
                src="/iphone.svg"
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
