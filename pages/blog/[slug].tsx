import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts, getPost, type BlogPost as BlogPostData } from "@/lib/blogPosts";
import BlogHeader from "@/components/Blog/BlogHeader";

const BASE_URL = 'https://swoony.io';
const WEB_APP_URL = "https://web-swoony.netlify.app/";

interface Props {
    post: BlogPostData;
    slug: string;
}

function formatDate(isoDate: string): string {
    return new Intl.DateTimeFormat('fi-FI', { day: 'numeric', month: 'long', year: 'numeric' })
        .format(new Date(isoDate));
}

export default function BlogPost({ post, slug }: Props) {
    const canonicalUrl = `${BASE_URL}/blog/${slug}`;

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        inLanguage: "fi",
        url: canonicalUrl,
        publisher: {
            "@type": "Organization",
            name: "Swoony",
            url: BASE_URL,
        },
    };

    return (
        <main className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden">
            <Head>
                <title>{`${post.title} | Swoony`}</title>
                <meta name="description" content={post.description} key="desc" />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:title" content={post.title} key="og:title" />
                <meta property="og:description" content={post.description} key="og:desc" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={canonicalUrl} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
                />
            </Head>

            <BlogHeader />

            {/* Article hero */}
            <section className="relative pt-40 pb-8 px-6 overflow-hidden">
                <div className="gradient-orb gradient-orb-red w-[500px] h-[500px] -top-40 -right-40 opacity-50" />
                <div className="gradient-orb gradient-orb-cyan w-[400px] h-[400px] top-40 -left-60 opacity-50" />

                <div className="max-w-3xl mx-auto relative z-10">
                    <Link
                        href="/blog"
                        className="font-quicksand inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors mb-10"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Kaikki artikkelit
                    </Link>
                    <p className="font-quicksand text-xs font-semibold text-main-green uppercase tracking-[0.3em] mb-4">
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </p>
                    <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        {post.title}
                    </h1>
                </div>
            </section>

            {/* Article content */}
            <section className="px-6 pb-16">
                <article className="max-w-3xl mx-auto">
                    <div
                        className="article-content text-white/60"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </section>

            {/* CTA */}
            <section className="px-6 pb-32">
                <div className="max-w-3xl mx-auto glass-card rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
                    <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                        <span className="text-white">Valmis lopettamaan </span>
                        <span className="text-main-red">swaippauksen?</span>
                    </h2>
                    <p className="text-white/50 mb-8 max-w-xl mx-auto">
                        Anna tekoäly Matchmakerimme löytää sinulle aidosti yhteensopiva kumppani.
                    </p>
                    <Link
                        href={WEB_APP_URL}
                        target="_blank"
                        className="font-quicksand group inline-flex items-center justify-center gap-3 bg-main-red text-white font-semibold rounded-full px-8 py-4 transition-all duration-300 hover:bg-[#d91e42] hover:shadow-xl hover:shadow-main-red/20"
                    >
                        <span>Aloita selaimessa</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    const paths = Object.keys(blogPosts).flatMap((slug) =>
        (locales || ['fi']).map((locale) => ({ params: { slug }, locale }))
    );
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params, locale }) => {
    const slug = typeof params?.slug === 'string' ? params.slug : '';
    const post = getPost(slug);

    if (!post) {
        return { notFound: true };
    }

    return {
        props: {
            post,
            slug,
            ...(await serverSideTranslations(locale || 'fi', ['common'])),
        },
    };
};
