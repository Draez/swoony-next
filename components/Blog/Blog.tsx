import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { BlogPostSummary } from '@/lib/blogPosts';
import BlogPostCard from './BlogPostCard';

interface Props {
    posts: BlogPostSummary[];
}

export default function Blog({ posts }: Props) {
    return (
        <section id="ajankohtaista" className="py-32 px-6 bg-[#0f0f0f] relative">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <p className="font-quicksand text-xs font-semibold text-main-green uppercase tracking-[0.3em] mb-4">
                        Blogi
                    </p>
                    <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold">
                        <span className="text-white">Vinkit </span>
                        <span className="text-main-green">deittailuun</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {posts.map((post) => (
                        <BlogPostCard key={post.slug} post={post} />
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link
                        href="/blog"
                        className="font-quicksand inline-flex items-center gap-2 text-white/60 hover:text-white font-semibold transition-colors"
                    >
                        Kaikki artikkelit
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
