import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Quicksand } from "next/font/google";
import Image from "next/image";
import Footer from '@/components/Footer/Footer';

const quickSand = Quicksand({
    weight: ["700"],
    style: ["normal"],
    subsets: ["latin"],
});

interface BlogPost {
    title: string;
    content: string;
    date: string;
}

interface BlogPosts {
    [key: string]: BlogPost;
}

// This would typically come from a CMS or API
const blogPosts: BlogPosts = {
    "matsays-kaynnistyy-maaliskuun-aikana": {
        title: "Mätsäys käynnistyy maaliskuun aikana!",
        content: `
            <p>Suuren suosion ja käyttäjämäärän kasvun myötä voimme iloisena ilmoittaa, että mätsäys käynnistyy maaliskuun aikana!</p>

            <p>Kiitos kaikille tulleista palautteista, kehitysehdotukset ovat myös jatkossa toivottuja, jotta saamme kehitettyä palveluamme entistä paremmaksi.</p>

            <p>Swoonyn matka rakkaudenlähettilääksi on vihdoin alkanut 💌</p>

            <p>‼️ Tässä vaiheessa onkin hyvä tarkistaa, että sovelluksesi on päivitetty uusimpaan versioon ja että profiilisi on täydellisesti päivitetty. Mitä kattavammin profiilisi on täytetty, sitä sopivampi mätsi sinulle on mahdollista löytää.</p>`,
        date: "23.2.2025",
    },
};

export default function BlogPost() {
    const router = useRouter();
    const { slug } = router.query;
    const post = slug && typeof slug === 'string' ? blogPosts[slug] : null;

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-12">
                <div className="text-center">
                    <h1 className="text-2xl text-main-blue">Artikkelia ei löytynyt</h1>
                    <Link
                        href="/#ajankohtaista"
                        className="inline-block mt-4 text-main-red hover:text-main-red-hover"
                    >
                        ← Takaisin
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8">
                {/* Header with logo */}
                <Link href="/">
                    <div className="flex items-center gap-2 mb-8">
                        <Image
                            src="/swoony.svg"
                            alt="Swoony: Dating app"
                            width={32}
                            height={24}
                            priority
                        />
                        <div
                            className={`${quickSand.className} text-xl font-semibold text-main-blue uppercase tracking-wide`}
                        >
                            Swoony
                        </div>
                    </div>
                </Link>


                {/* Article content */}
                <article className="max-w-3xl mx-auto">
                    {/* Back button */}
                    <Link
                        href="/#ajankohtaista"
                        className="inline-block mb-8 text-main-red hover:text-main-red-hover"
                    >
                        ← Takaisin
                    </Link>
                    <header className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-main-blue mb-4">
                            {post.title}
                        </h1>
                        <time className="text-light-blue">
                            {post.date}
                        </time>
                    </header>

                    <div
                        className="text-light-blue article-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </div>
            <Footer />
        </div>
    );
} 