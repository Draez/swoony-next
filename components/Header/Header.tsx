import React, { FC, useState } from "react";
import { Quicksand } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import NavigationMenu from "./NavigationMenu";

const quickSand = Quicksand({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
});

const Header: FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Navigation Bar */}
      <section className="fixed top-0 left-0 w-full h-20 z-50">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-main-blue/20 backdrop-blur-sm" />
        </div>

        <div className="relative h-full">
          <div className="items-center justify-between p-6 h-full">
            <div className="container mx-auto flex items-center justify-between h-full">
              <Link href="/">
                <div className="pointer-events-none select-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0 m">
                  <div className="relative">
                    <Image
                      src="/swoony.svg"
                      alt="Swoony: Dating app"
                      width={28}
                      height={20}
                      priority
                    />
                  </div>
                  <div className="relative">
                    <div
                      className={`${quickSand.className} text-lg font-semibold text-zinc-50 uppercase tracking-wide`}
                    >
                      Swoony
                    </div>
                  </div>
                </div>
              </Link>

              {/* Social Media Links and Hamburger Menu */}
              <div className="flex items-center space-x-4">
                <Link href="https://www.instagram.com/swoonyofficial/" target="_blank">
                  <Image
                    src="/instagram.svg"
                    alt="Swoony instagram link"
                    width={28}
                    height={20}
                    priority
                  />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=100095309208001" target="_blank">
                  <Image
                    src="/facebook.svg"
                    alt="Swoony facebook link"
                    width={32}
                    height={20}
                    priority
                  />
                </Link>

                {/* Hamburger Menu Button */}
                <button
                  onClick={toggleMenu}
                  className="flex flex-col justify-center items-center w-8 h-8 space-y-1 z-50 relative"
                  aria-label="Toggle menu"
                >
                  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Mega Menu Overlay */}
          <div
            className={`fixed w-full h-full inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            onClick={closeMenu}
          />

          {/* Mega Menu Panel */}
          <div
            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Image
                    src="/swoony.svg"
                    alt="Swoony: Dating app"
                    width={24}
                    height={18}
                    priority
                  />
                  <div className={`${quickSand.className} text-lg font-semibold text-main-blue uppercase tracking-wide`}>
                    Menu
                  </div>
                </div>
                <button
                  onClick={closeMenu}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <NavigationMenu onCloseMenu={closeMenu} />

              {/* Social Links */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <Link
                    href="https://www.instagram.com/swoonyofficial/"
                    target="_blank"
                    className="text-gray-600 hover:text-main-blue transition-colors"
                  >
                    <Image
                      src="/instagram.svg"
                      alt="Swoony instagram link"
                      width={24}
                      height={18}
                      priority
                    />
                  </Link>
                  <Link
                    href="https://www.facebook.com/profile.php?id=100095309208001"
                    target="_blank"
                    className="text-gray-600 hover:text-main-blue transition-colors"
                  >
                    <Image
                      src="/facebook.svg"
                      alt="Swoony facebook link"
                      width={28}
                      height={18}
                      priority
                    />
                  </Link>
                </div>

                {/* Language Switcher */}
                <div className="flex items-center justify-center space-x-2">
                  <button
                    onClick={() => {
                      router.push(router.pathname, router.asPath, { locale: 'fi' });
                      closeMenu();
                    }}
                    className="px-3 py-2 text-sm rounded-md transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    FI
                  </button>
                  <button
                    onClick={() => {
                      router.push(router.pathname, router.asPath, { locale: 'sv' });
                      closeMenu();
                    }}
                    className="px-3 py-2 text-sm rounded-md transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    SV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section with Content */}
      <section className="w-full relative pt-20">
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

        <div className="relative h-full">
          <div className="pb-16 flex flex-wrap items-center p-8 md:py-16">
            <div className="lg:w-full xl:w-5/6 2xl:w-4/6 container mx-auto flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
                <div className="relative mb-4">
                  <span className="inline-block bg-main-red text-white text-sm font-bold px-3 py-1 rounded-md">
                    {t('header.users')}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-white" style={{ lineHeight: '1.25' }}>
                  {t('header.title')}
                </h1>

                <p className="text-lg text-white mt-3">
                  {t('header.description')}
                </p>
                {locale === 'sv' && (
                  <p className="text-lg text-white mt-3">
                    Hämta Swoony på App Store och Google Play – svenska kommer snart!
                  </p>
                )}

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
                  alt={t('header.appAlt')}
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
