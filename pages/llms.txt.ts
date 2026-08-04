import type { GetServerSideProps } from 'next';
import { getAllPosts } from '@/lib/blogPosts';

const BASE_URL = 'https://swoony.io';

function generateLlmsTxt(): string {
    const postLinks = getAllPosts()
        .map((post) => `- [${post.title}](${BASE_URL}/blog/${post.slug}): ${post.description}`)
        .join('\n');

    return `# Swoony

> Swoony on suomalainen tekoälypohjainen matchmaking-sovellus ("Headhunter for Love"). Toisin kuin swaippaukseen perustuvat deittisovellukset, Swoonyn AI Matchmaker analysoi käyttäjien kattavat profiilit (70+ kysymystä, kuvat, esittelyvideo) ja toimittaa harkitut mätsiehdotukset automaattisesti. Keskustelu aukeaa vain, kun molemmat hyväksyvät mätsin. Slogan: "Stop swiping, start dating."

Swoony is a Finnish AI-powered matchmaking app. Instead of swiping, an AI matchmaker
analyzes comprehensive user profiles and delivers curated match suggestions with a
mutual-approval model. Available on iOS and Android; primary market Finland (Helsinki first).

## Keskeiset sivut

- [Etusivu](${BASE_URL}/): Mikä Swoony on, miten tekoälymätsäys toimii, hinnoittelu ja FAQ
- [Blogi](${BASE_URL}/blog): Vinkit ja oppaat deittailuun ja kumppanin löytämiseen
- [Käyttöehdot](${BASE_URL}/terms)
- [Tietosuoja](${BASE_URL}/privacy_policy)

## Blogiartikkelit

${postLinks}

## Yhteystiedot

- Sähköposti: info@swoony.io
- Instagram: @swoonyapp
`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
    res.write(generateLlmsTxt());
    res.end();

    return { props: {} };
};

// getServerSideProps writes the plain-text response directly; nothing to render
export default function LlmsTxt() {
    return null;
}
