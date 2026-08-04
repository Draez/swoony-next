import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { BlogPostSummary } from '@/lib/blogPosts';

interface Props {
    post: BlogPostSummary;
}

function formatDate(isoDate: string): string {
    return new Intl.DateTimeFormat('fi-FI', { day: 'numeric', month: 'numeric', year: 'numeric' })
        .format(new Date(isoDate));
}

export default function BlogPostCard({ post }: Props) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="glass-card rounded-3xl p-8 lg:p-10 group hover-lift flex flex-col"
        >
            <time dateTime={post.date} className="font-quicksand text-xs text-white/40 mb-4">
                {formatDate(post.date)}
            </time>
            <h3 className="font-playfair text-xl font-semibold text-white mb-4 group-hover:text-main-green transition-colors">
                {post.title}
            </h3>
            <p className="text-white/50 leading-relaxed mb-6 flex-1">
                {post.description}
            </p>
            <span className="font-quicksand inline-flex items-center gap-2 text-sm font-semibold text-main-red">
                Lue artikkeli
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
        </Link>
    );
}
