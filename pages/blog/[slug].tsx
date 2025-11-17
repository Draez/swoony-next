import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Quicksand } from "next/font/google";
import Image from "next/image";
import Footer from '@/components/Footer/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetServerSideProps } from 'next';

const quickSand = Quicksand({
    weight: ["700"],
    style: ["normal"],
    subsets: ["latin"],
});

interface BlogPost {
    title: string;
    content: string;
}

interface BlogPosts {
    [key: string]: BlogPost;
}

// This would typically come from a CMS or API
const blogPosts: BlogPosts = {
    "sovellus-uudistuu": {
        title: "Sovellus on uudistunut",
        content: `<p>Haluamme kertoa sinulle tärkeästä muutoksesta Swoonyn toimintaan. Olemme kuunnelleet käyttäjiemme palautetta ja kehitämme palvelua entistä toimivammaksi ja merkityksellisemmäksi.</p>

 <p>🔔 Mikä muuttuu ? </p>

    <p>- Ilmaisversio ja kuukausitilaus poistuvat käytöstä. Jatkossa Swoonya käytetään ostamalla mätsipaketteja – voit valita 1, 3 tai 5 mätsin paketin. Profiilisi näkyy alustallamme asiantuntijoillemme, kun sinulla on aktiivinen mätsipaketti.</p>

    <p>- Uusi ominaisuus: mätsin hyväksyntä. Kun sinulle löytyy ehdokas, näet hänestä nimen, iän ja esittelyvideon.Sinä päätät, hyväksytkö hänet.</p>

    <p>- Mätsi syntyy vain molempien hyväksynnällä.Tällöin pääsette aloittamaan keskustelun. Jos jompikumpi hylkää, asiantuntijamme etsivät uuden ehdokkaan.</p>

    <p>- Vain hyväksytty mätsi vähentää saldoasi. Hylkäykset eivät kuluta ostamiasi mätsipaketteja.</p>

<p>💡 Miksi tämä on hyvä juttu sinulle ?</p>

    <p>Parempia mätsäyksiä: Ilmaisversion poistuminen tarkoittaa, että sovelluksessa ovat vain ne, jotka todella haluavat löytää kumppanin.</p>

    <p>Vähemmän turhaa odottelua: Ilmaiskäyttäjien passiivisuus poistuu – viesteihin vastaamatta jättäminen vähenee merkittävästi.</p>

    <p>Sinulla on viimeinen sana: Saat itse päättää hyväksytkö mätsin nähtyäsi ehdokkaan nimen, iän ja esittelyvideon.</p>

    <p>💡 Mitä tämä tarkoittaa käytännössä ?</p>

    <p>Jos sinulla on aktiivinen kuukausitilaus, muista perua se. Et kuitenkaan menetä arvoa: kaikille käyttäjille, joilla on päivityksen jälkeen käyttämätöntä aikaa jäljellä, tarjoamme hyvityksenä kaksi mätsiä veloituksetta (arvo 40 €).</p>

    <p>Haluamme, että tunnet olosi hyväksi ja luottavaiseksi muutoksen keskellä. Mikäli jokin mietityttää, voit olla yhteydessä asiakaspalveluumme sähköpostitse: info @swoony.io</p>

<p>Kiitos, että olet osa Swoony - yhteisöä ❤️</p>

<p>Swoony - tiimi </p>`
    },
    "swoony-miesten-mielesta-podcast": {
        title: "Swoony vieraana \"Miesten mielestä\" -podcastissa 🎙️",
        content: `
            <p>Meillä oli ilo ja kunnia olla vieraana "Miesten mielestä" -podcastissa, jossa pääsimme kertomaan tarkemmin siitä, miten Swoony toimii, miksi se on syntynyt – ja millä tavalla me uudistamme suomalaista deittikulttuuria.</p>

            <p>Jos haluat kurkistaa deittailun kulissien taakse, kannattaa kuunnella tämä jakso!</p>

            <p>🎧 <a href="https://open.spotify.com/episode/3oe1HBQMt6r350FsGJ5Kac?si=GXuhjEDDQsu81SiddZ8kbw" target="_blank" rel="noopener noreferrer" class="text-main-red hover:text-main-red-hover underline">Kuuntele jakso täältä</a></p>`,

    },
    "swoony-matsays-kaynnistynyt": {
        title: "Swoonyn kautta ensimmäiset mätsit ovat nyt tehty!",
        content: `
            <p>Menneellä viikolla Swoonyn mätsäysprosessi aloitettiin sekä olemme löytäneet ensimmäiset mätsit käyttäjillemme!</p>

            <p>Haluamme kiittää kaikkia käyttäjiämme kärsivällisyydestä ja luottamuksesta palveluumme. Tämä on vasta alkua Swoonyn matkalla muuttaa deittailukulttuuria parempaan suuntaan! ❤️</p>

            <p>Jos et ole vielä saanut mätsiä, älä huoli - prosessimme jatkuu ja pyrimme löytämään jokaiselle sopivan kumppanin. Varmistathan, että profiilisi on ajan tasalla ja kaikki tarvittavat tiedot on täytetty.</p>`,

    },
    "matsays-kaynnistyy-maaliskuun-aikana": {
        title: "Mätsäys käynnistyy maaliskuun aikana!",
        content: `
            <p>Suuren suosion ja käyttäjämäärän kasvun myötä voimme iloisena ilmoittaa, että mätsäys käynnistyy maaliskuun aikana!</p>

            <p>Kiitos kaikille tulleista palautteista, kehitysehdotukset ovat myös jatkossa toivottuja, jotta saamme kehitettyä palveluamme entistä paremmaksi.</p>

            <p>Swoonyn matka rakkaudenlähettilääksi on vihdoin alkanut 💌</p>

            <p>‼️ Tässä vaiheessa onkin hyvä tarkistaa, että sovelluksesi on päivitetty uusimpaan versioon ja että profiilisi on täydellisesti päivitetty. Mitä kattavammin profiilisi on täytetty, sitä sopivampi mätsi sinulle on mahdollista löytää.</p>`,

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
                    <h1 className="text-2xl text-black">Artikkelia ei löytynyt</h1>
                    <Link
                        href="/#ajankohtaista"
                        className="inline-block mt-4 text-main-green hover:text-main-green-hover"
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
                            className={`${quickSand.className} text-xl font-semibold text-black uppercase tracking-wide`}
                        >
                            Swoony
                        </div>
                    </div>
                </Link>


                {/* Article content */}
                <article className="max-w-3xl mx-auto">
                    {/* Back button */}
                    <Link
                        href={`/#ajankohtaista`}
                        className="bg-main-green text-black px-4 py-2 rounded-full font-semibold hover:text-main-green-hover"
                    >
                        ← Takaisin
                    </Link>
                    <header className="my-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            {post.title}
                        </h1>
                    </header>

                    <div
                        className="text-gray article-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </div>
            <Footer />
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || 'fi', ['common'])),
        },
    };
};