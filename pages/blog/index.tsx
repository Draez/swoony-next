import React from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';
import { getAllPostSummaries, type BlogPostSummary } from "@/lib/blogPosts";
import BlogPostCard from "@/components/Blog/BlogPostCard";
import BlogHeader from "@/components/Blog/BlogHeader";

const BASE_URL = 'https://swoony.io';

interface Props {
    posts: BlogPostSummary[];
}

export default function BlogIndex({ posts }: Props) {
    return (
        <main className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden">
            <Head>
                <title>Blogi | Swoony</title>
                <meta
                    name="description"
                    content="Vinkit ja oppaat deittailuun, kumppanin löytämiseen ja parisuhteen aloittamiseen. Swoonyn blogi auttaa sinut swaippauksesta oikeille treffeille."
                    key="desc"
                />
                <link rel="canonical" href={`${BASE_URL}/blog`} />
                <meta property="og:title" content="Blogi | Swoony" key="og:title" />
                <meta
                    property="og:description"
                    content="Vinkit ja oppaat deittailuun, kumppanin löytämiseen ja parisuhteen aloittamiseen."
                    key="og:desc"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${BASE_URL}/blog`} />
            </Head>

            <BlogHeader />

            {/* Hero */}
            <section className="relative pt-40 pb-16 px-6 overflow-hidden">
                <div className="gradient-orb gradient-orb-cyan w-[500px] h-[500px] -top-40 -right-40" />
                <div className="gradient-orb gradient-orb-red w-[400px] h-[400px] top-20 -left-60" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <p className="font-quicksand text-xs font-semibold text-main-green uppercase tracking-[0.3em] mb-4">
                        Swoony Blogi
                    </p>
                    <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Vinkit </span>
                        <span className="text-main-green">deittailuun</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
                        Oppaat kumppanin löytämiseen, deittiväsymyksen selättämiseen ja parisuhteen aloittamiseen.
                    </p>
                </div>
            </section>

            {/* Posts */}
            <section className="px-6 pb-32">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 lg:gap-8">
                    {posts.map((post) => (
                        <BlogPostCard key={post.slug} post={post} />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
    return {
        props: {
            posts: getAllPostSummaries(),
            ...(await serverSideTranslations(locale || 'fi', ['common'])),
        },
    };
};
