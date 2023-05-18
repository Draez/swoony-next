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
              <a href="https://www.instagram.com/swoonyapp/" target="_blank">
                <Image
                  src="/instagram.svg"
                  alt="Instagram Icon"
                  className="mr-4"
                  width={32}
                  height={24}
                  priority
                />
              </a>
              <a href="https://www.facebook.com/Swoonyapp" target="_blank">
                <Image
                  src="/facebook.svg"
                  alt="Instagram Icon"
                  width={36}
                  height={24}
                  priority
                />
              </a>
            </div>
          </div>
        </div>
        <div className="pb-16 flex flex-wrap items-center bg-main-blue p-8 md:py-16">
          <div className="container mx-auto flex items-center justify-between">
            <div className="w-full md:w-1/2 pr-12">
              <p className="text-lg text-white mb-3">
                Väsynyt loputtomaan swaippailuun deitti-sovelluksissa?
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
                Etsi rakkaus asiantuntevien mätsääjien avulla
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
              <img
                className="h-80 w-100 object-cover min-w-[400px] min-h-[560px] rounded-xl ml-auto opacity-80"
                src="/date.jpg"
                alt="Swoony: Etsi rakkaus asiantuntevien mätsääjien avulla"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
