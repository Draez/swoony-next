import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import Footer from "@/components/Footer/Footer";
import Process from "@/components/Process/Process";
import Experts from "@/components/Experts/Experts";
import Pricing from "@/components/Pricing/Pricing";
import { FAQ } from '@/components/FAQ/FAQ';
import Blog from "@/components/Blog/Blog";
import FeaturedIn from "@/components/FeaturedIn/FeaturedIn";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useRouter } from "next/router";
import UserReviews from "@/components/UserReviews";

/**
 * Swoony Homepage with i18n support
 * 
 * This page includes all main components of the Swoony website
 * with translations for Finnish (fi) and Swedish (sv).
 * 
 * Language switching is handled in the Header component.
 * Translations are stored in /public/locales/{locale}/common.json
 * 
 * @returns Homepage Component
 */
export default function Home() {
  return (
    <>

      <main className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <Process />
        <FeaturedIn />
        <Intro />
        <Pricing />
        <Experts />
        <UserReviews />

        {useRouter().locale !== 'sv' && <Blog />}
        <FAQ />

        <Footer />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'fi', ['common'])),
    },
  };
};
