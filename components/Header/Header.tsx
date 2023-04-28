import React, { FC } from "react";
import { Plus_Jakarta_Sans, Quicksand } from "next/font/google";
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
            <a
              className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0 m"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={32}
                height={24}
                priority
              />
              <div
                className={`${quickSand.className} text-xl font-semibold text-zinc-50 uppercase tracking-wide`}
              >
                Swoony
              </div>
            </a>

            <div className="flex justify-center items-center">
              <Image
                src="/instagram.svg"
                alt="Instagram Icon"
                className="mr-4"
                width={32}
                height={24}
                priority
              />
              <Image
                src="/instagram.svg"
                alt="Instagram Icon"
                className="dark:invert"
                width={32}
                height={24}
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center bg-main-blue p-8">
          <div className="container mx-auto flex items-center justify-between">
            <div className="w-full md:w-1/2 pr-12">
              <p className="text-lg text-white mb-3">
                Väsynyt loputtomaan swaippailuun deitti-sovelluksissa?
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
                Etsi rakkaus ammattilaisten avulla
              </h1>
              <p className="text-lg text-white mb-10">
                Swoony Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi.
              </p>
              <a
                href="#"
                className="inline-block bg-main-red text-white text-lg font-semibold py-4 px-16 rounded-full hover:bg-blue-500"
              >
                Liity mukaan!
              </a>
            </div>
            <div className="hidden md:block md:w-1/2 py-8">
              <img
                class="h-80 w-80 object-cover md:w-[500px] lg:h-[500px] rounded-xl"
                src="/header.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
