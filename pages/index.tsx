import Image from "next/image";
import { Plus_Jakarta_Sans, Quicksand } from "next/font/google";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import Footer from "@/components/Footer/Footer";
import Process from "@/components/Process/Process";
import Experts from "@/components/Experts/Experts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Process />

      <Intro />
      <Experts />
      <Footer />
    </main>
  );
}
