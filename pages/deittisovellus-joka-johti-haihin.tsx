import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';
import { ArrowRight, Heart } from 'lucide-react';
import BlogHeader from '@/components/Blog/BlogHeader';

const BASE_URL = 'https://swoony.io';
const WEB_APP_URL = 'https://app.swoony.io/';
const CANONICAL_URL = `${BASE_URL}/deittisovellus-joka-johti-haihin`;
const OG_IMAGE = `${BASE_URL}/haat/krista-ja-henrik-vihkiminen-helsingin-tuomiokirkko.jpg`;

const PAGE_TITLE = 'Deittisovellus, joka johti häihin – Krista & Henrik | Swoony';
const PAGE_DESCRIPTION =
    'Krista ja Henrik saivat mätsin Swoonyssa – ja menivät naimisiin. Lue tositarina deittisovelluksesta, joka johti häihin: tekoäly löysi parin, jota loputon swaippaus ei koskaan löytänyt.';

export default function DeittisovellusJokaJohtiHaihin() {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Deittisovellus, joka johti häihin: Kristan ja Henrikin tarina',
        description: PAGE_DESCRIPTION,
        inLanguage: 'fi',
        url: CANONICAL_URL,
        image: OG_IMAGE,
        publisher: {
            '@type': 'Organization',
            name: 'Swoony',
            url: BASE_URL,
        },
    };

    return (
        <main className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden">
            <Head>
                <title>{PAGE_TITLE}</title>
                <meta name="description" content={PAGE_DESCRIPTION} key="desc" />
                <link rel="canonical" href={CANONICAL_URL} />
                <meta property="og:title" content={PAGE_TITLE} key="og:title" />
                <meta property="og:description" content={PAGE_DESCRIPTION} key="og:desc" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={CANONICAL_URL} />
                <meta property="og:image" content={OG_IMAGE} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
                />
            </Head>

            <BlogHeader />

            {/* Hero */}
            <section className="relative pt-40 pb-12 px-6 overflow-hidden">
                <div className="gradient-orb gradient-orb-red w-[500px] h-[500px] -top-40 -right-40 opacity-50" />
                <div className="gradient-orb gradient-orb-cyan w-[400px] h-[400px] top-40 -left-60 opacity-50" />

                <div className="max-w-3xl mx-auto relative z-10 text-center">
                    <p className="font-quicksand text-xs font-semibold text-main-green uppercase tracking-[0.3em] mb-4">
                        Tositarina
                    </p>
                    <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        AI löysi hääparin:
                        <br />
                        <span className="text-main-red">Krista &amp; Henrik</span>
                    </h1>
                    <p className="text-white/60 text-lg mt-6 max-w-2xl mx-auto">
                        Kaksi ihmistä, jotka eivät koskaan törmänneet toisiinsa swaippaamalla. Yksi
                        mätsiehdotus Swoonyn tekoäly Matchmakerilta – ja loppu on historiaa. Tämä on
                        tositarina deittisovelluksesta, joka johti häihin.
                    </p>
                </div>
            </section>

            {/* Hero image */}
            <section className="px-6 pb-16">
                <div className="max-w-4xl mx-auto">
                    <Image
                        src="/haat/krista-ja-henrik-vihkiminen-helsingin-tuomiokirkko.jpg"
                        alt="Krista ja Henrik vihittiin Helsingin tuomiokirkossa – pari sai mätsin Swoony-deittisovelluksessa"
                        width={1600}
                        height={1067}
                        priority
                        className="rounded-3xl w-full h-auto"
                    />
                    <p className="text-white/30 text-sm text-center mt-3 font-quicksand">
                        Vihkihetki Helsingin tuomiokirkossa
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="px-6 pb-16">
                <article className="article-content text-white/60 max-w-3xl mx-auto">
                    <h2>Kaksi ihmistä, jotka algoritmi olisi ohittanut</h2>

                    <p>
                        Krista ja Henrik olivat molemmat kokeneet sen, mistä niin moni suomalainen
                        sinkku tietää kertoa: loputonta selailua, keskusteluja jotka hiipuvat, ja
                        tunteen siitä, että oikea ihminen on jossain – mutta ei täällä. Kumpikin oli
                        väsynyt swaippaamiseen, mutta kumpikaan ei ollut valmis luopumaan
                        ajatuksesta, että se oikea löytyy.
                    </p>

                    <p>
                        Swoonyssa kumpikin täytti profiilinsa huolella: yli 70 kysymystä arvoista,
                        elämäntavoista ja perhetoiveista, kuvat ja esittelyvideo. Sitten tekoäly
                        Matchmaker teki sen, mitä se tekee: kävi läpi ehdokkaat ja tunnisti kaksi
                        ihmistä, joiden arvot, huumorintaju ja elämäntilanne sopivat yhteen –
                        eläinrakkautta myöten.
                    </p>

                    <h2>Molemmat sanoivat kyllä – kahdesti</h2>

                    <p>
                        Swoonyssa keskustelu aukeaa vain, kun molemmat hyväksyvät mätsin. Krista ja
                        Henrik hyväksyivät. Ensimmäinen keskustelu johti ensitreffeille, ensitreffit
                        toisiin – ja jossain vaiheessa kumpikin tiesi, ettei sovellusta enää
                        tarvittu. Toisen kerran he sanoivat kyllä Helsingin tuomiokirkon alttarilla.
                    </p>
                </article>
            </section>

            {/* Photo grid */}
            <section className="px-6 pb-16">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-6">
                        <div>
                            <Image
                                src="/haat/krista-ja-henrik-haakuva.jpg"
                                alt="Hääpari Krista ja Henrik hääjuhlassaan"
                                width={1200}
                                height={800}
                                className="rounded-3xl w-full h-auto"
                            />
                            <p className="text-white/30 text-sm text-center mt-3 font-quicksand">
                                Hääpari juhlan tunnelmissa
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/haat/krista-ja-henrik-haavaunut-senaatintori.jpg"
                                alt="Hääparin hevosvaunuajelu Senaatintorilla Helsingissä talvihäissä"
                                width={1200}
                                height={800}
                                className="rounded-3xl w-full h-auto"
                            />
                            <p className="text-white/30 text-sm text-center mt-3 font-quicksand">
                                Hevosvaunuilla Senaatintorin halki
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/haat/krista-ja-henrik-haakakku.jpg"
                                alt="Hääkakku dalmatialaiskoristeilla – parin yhteinen eläinrakkaus näkyi häissä"
                                width={1200}
                                height={800}
                                className="rounded-3xl w-full h-auto"
                            />
                            <p className="text-white/30 text-sm text-center mt-3 font-quicksand">
                                Yhteinen eläinrakkaus pääsi kakkuun asti
                            </p>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/haat/krista-ja-henrik-ensitanssi.jpg"
                            alt="Kristan ja Henrikin ensitanssi häissä – pari tapasi Swoony-sovelluksessa"
                            width={1200}
                            height={1800}
                            className="rounded-3xl w-full h-auto"
                        />
                        <p className="text-white/30 text-sm text-center mt-3 font-quicksand">
                            Ensitanssi
                        </p>
                    </div>
                </div>
            </section>

            {/* Quote */}
            <section className="px-6 pb-16">
                <div className="max-w-3xl mx-auto glass-card rounded-3xl p-8 lg:p-12 text-center">
                    <Heart className="w-8 h-8 text-main-red fill-main-red mx-auto mb-6" />
                    <blockquote className="font-playfair text-xl md:text-2xl text-white leading-relaxed">
                        &rdquo;Emme olisi koskaan löytäneet toisiamme selaamalla. Swoony näki sen,
                        mitä me emme olisi osanneet etsiä.&rdquo;
                    </blockquote>
                    <p className="font-quicksand text-white/40 text-sm mt-6">
                        – Krista &amp; Henrik
                    </p>
                </div>
            </section>

            {/* Why it worked */}
            <section className="px-6 pb-16">
                <article className="article-content text-white/60 max-w-3xl mx-auto">
                    <h2>Miksi tämä toimi – kun swaippaus ei toiminut?</h2>

                    <p>
                        Kristan ja Henrikin tarina ei ole sattumaa vaan menetelmä. Swaippisovellus
                        näyttää kasvot ja antaa kolme sekuntia aikaa päättää. Swoonyn tekoäly
                        Matchmaker analysoi sen, mikä pitkässä suhteessa oikeasti ratkaisee: arvot,
                        elämäntilanteen, perhetoiveet ja tavan olla toisen kanssa. Siksi mätsejä
                        tulee harvemmin – mutta ne osuvat.
                    </p>

                    <p>
                        Jos deittailu tuntuu tällä hetkellä lähinnä{' '}
                        <Link href="/blog/deittivasymys-mita-se-on-ja-miten-siita-paasee">
                            deittiväsymykseltä
                        </Link>
                        , Kristan ja Henrikin tarina on muistutus siitä, ettei vika ole sinussa vaan
                        menetelmässä. Lue myös{' '}
                        <Link href="/blog/kuinka-loytaa-rakkaus-deittisovelluksesta-2026">
                            vinkkimme rakkauden löytämiseen deittisovelluksesta
                        </Link>{' '}
                        – tai anna tekoälyn tehdä raskas työ puolestasi.
                    </p>
                </article>
            </section>

            {/* CTA */}
            <section className="px-6 pb-32">
                <div className="max-w-3xl mx-auto glass-card rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
                    <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                        <span className="text-white">Sinun tarinasi voi alkaa </span>
                        <span className="text-main-red">tänään</span>
                    </h2>
                    <p className="text-white/50 mb-8 max-w-xl mx-auto">
                        Krista ja Henrik täyttivät profiilinsa kerran – tekoäly Matchmaker teki
                        loput. Sama palvelu odottaa sinua.
                    </p>
                    <Link
                        href={WEB_APP_URL}
                        target="_blank"
                        className="font-quicksand group inline-flex items-center justify-center gap-3 bg-main-red text-white font-semibold rounded-full px-8 py-4 transition-all duration-300 hover:bg-[#d91e42] hover:shadow-xl hover:shadow-main-red/20"
                    >
                        <span>Aloita selaimessa</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <p className="font-quicksand text-sm text-white/40 mt-6 mb-4">tai lataa sovellus</p>
                    <div className="flex flex-row justify-center gap-3">
                        <Link
                            href="https://apps.apple.com/fi/app/swoony-ai-deittisovellus/id6499217523"
                            target="_blank"
                            className="opacity-80 hover:opacity-100 transition-opacity"
                        >
                            <Image src="/applestore.svg" alt="Lataa App Storesta" width={150} height={45} />
                        </Link>
                        <Link
                            href="https://play.google.com/store/apps/details?id=fi.swoonymatchmaking.app"
                            target="_blank"
                            className="opacity-80 hover:opacity-100 transition-opacity"
                        >
                            <Image src="/google-play.svg" alt="Lataa Google Playsta" width={150} height={45} />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || 'fi', ['common'])),
        },
    };
};
