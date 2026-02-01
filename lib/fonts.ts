import { Quicksand, Playfair_Display } from "next/font/google";

export const quickSand = Quicksand({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

