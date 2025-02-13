import React from "react";
import { Quicksand } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const quickSand = Quicksand({
    weight: ["700"],
    style: ["normal"],
    subsets: ["latin"],
});

export default function ThankYou() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="max-w-2xl mx-auto text-center mt-12">
                <h1 className="text-4xl font-bold text-main-blue mb-6">Kiitos rekisteröitymisestä!</h1>
                <p className="text-lg text-light-blue mb-8">
                    Sähköpostisi on nyt aktivoitu ja voit kirjautua sovellukseen.
                </p>
            </div>
        </main>
    );
} 