import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
    title: string;
    description: string;
    date: string;
    slug: string;
}

const blogPosts: BlogPost[] = [
    {
        title: "Swoonyn kautta ensimmäiset mätsit ovat nyt tehty!",
        description: "Menneellä viikolla Swoonyn mätsäysprosessi aloitettiin sekä olemme löytäneet ensimmäiset mätsit...",
        date: "24.3.2025",
        slug: "swoony-matsays-kaynnistynyt"
    },
    {
        title: "Mätsäys käynnistyy maaliskuun aikana!",
        description: "Suuren suosion ja käyttäjämäärän kasvun myötä voimme iloisena ilmoittaa...",
        date: "23.2.2025",
        slug: "matsays-kaynnistyy-maaliskuun-aikana"
    },
];

export default function Blog() {
    return (
        <section id="ajankohtaista" className="container mx-auto px-4 py-12 md:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl text-main-blue font-bold mb-4">
                    Ajankohtaista
                </h2>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xxl mx-auto">
                {blogPosts.map((post, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">

                        <div className="p-6">
                            <span className="text-sm text-light-blue">{post.date}</span>
                            <h3 className="text-xl font-bold text-main-blue mt-2 mb-3">
                                {post.title}
                            </h3>
                            <p className="text-light-blue mb-4">
                                {post.description}
                            </p>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="text-main-red font-semibold hover:text-main-red-hover"
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