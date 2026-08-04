import type { GetServerSideProps } from 'next';
import { getAllPosts } from '@/lib/blogPosts';

const BASE_URL = 'https://swoony.io';

const staticPages = [
    { path: '/', priority: '1.00' },
    { path: '/blog', priority: '0.80' },
    { path: '/terms', priority: '0.50' },
    { path: '/privacy_policy', priority: '0.50' },
];

function generateSiteMap(): string {
    const staticUrls = staticPages
        .map(
            (page) => `  <url>
    <loc>${BASE_URL}${page.path === '/' ? '' : page.path}</loc>
    <priority>${page.priority}</priority>
  </url>`
        )
        .join('\n');

    const blogUrls = getAllPosts()
        .map(
            (post) => `  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <priority>0.80</priority>
  </url>`
        )
        .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${blogUrls}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
    res.write(generateSiteMap());
    res.end();

    return { props: {} };
};

// getServerSideProps writes the XML response directly; nothing to render
export default function SiteMap() {
    return null;
}
