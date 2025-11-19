import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function ThankYou() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="max-w-2xl mx-auto text-center mt-12">
                <h1 className="text-4xl font-bold text-main-blue mb-6">
                    Kiitos rekisteröitymisestä! / Tack för registreringen!
                </h1>
                <p className="text-lg text-light-blue mb-8">
                    Sähköpostisi on nyt aktivoitu ja voit kirjautua sovellukseen. /
                    Din e-post är nu aktiverad och du kan logga in i appen.
                </p>
            </div>
        </main>
    );
} 