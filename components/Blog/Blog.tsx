import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
    title: string;
    description: string;
    slug: string;
}

const blogPosts: BlogPost[] = [
    {
        title: "Sovellus uudistuu",
        description: "Olemme kuunnelleet käyttäjiemme palautetta ja kehitämme palvelua entistä toimivammaksi ja merkityksellisemmäksi...",
        slug: "sovellus-uudistuu"
    },
    {
        title: "Swoony vieraana \"Miesten mielestä\" -podcastissa 🎙️",
        description: "Meillä oli ilo ja kunnia olla vieraana \"Miesten mielestä\" -podcastissa, jossa pääsimme kertomaan tarkemmin siitä, miten Swoony toimii...",
        slug: "swoony-miesten-mielesta-podcast"
    },
    {
        title: "Swoonyn kautta ensimmäiset mätsit ovat nyt tehty!",
        description: "Menneellä viikolla Swoonyn mätsäysprosessi aloitettiin sekä olemme löytäneet ensimmäiset mätsit...",
        slug: "swoony-matsays-kaynnistynyt"
    },
    {
        title: "Mätsäys käynnistyy maaliskuun aikana!",
        description: "Suuren suosion ja käyttäjämäärän kasvun myötä voimme iloisena ilmoittaa...",
        slug: "matsays-kaynnistyy-maaliskuun-aikana"
    },
];

export default function Blog() {
    return (
        <section id="ajankohtaista" className="container mx-auto px-4 py-12 md:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl text-black font-bold mb-4">
                    Ajankohtaista
                </h2>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-xxl mx-auto">
                {blogPosts.map((post, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-black mt-2 mb-3">
                                {post.title}
                            </h3>
                            <p className="text-gray mb-8">
                                {post.description}
                            </p>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="bg-main-green text-black px-4 py-2 rounded-full font-semibold hover:text-main-green-hover"
                            >
                                Lue lisää →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 