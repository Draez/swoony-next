import React from "react";
import { Quicksand } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useRouter } from "next/router";

const quickSand = Quicksand({
    weight: ["700"],
    style: ["normal"],
    subsets: ["latin"],
});

export default function PrivacyPolicy() {
    const { t } = useTranslation('privacy');
    const router = useRouter();
    const { locale } = router;

    const changeLanguage = (newLocale: string) => {
        router.push(router.pathname, router.asPath, { locale: newLocale });
    };

    // Helper function to safely handle array translations
    const getTranslationArray = (key: string): string[] => {
        const value = t(key, { returnObjects: true });
        return Array.isArray(value) ? value : [];
    };

    return (
        <>
            <div className="p-8 text-black max-w-4xl mx-auto">
                <Link href="/">
                    <div className="pointer-events-none select-none flex place-items-center gap-2 lg:pointer-events-auto py-4">
                        <Image
                            src="/swoony.svg"
                            alt="Swoony: Dating app"
                            width={32}
                            height={24}
                            priority
                        />
                        <div className={`${quickSand.className} text-xl font-semibold text-main-blue uppercase tracking-wide`}>
                            Swoony
                        </div>
                    </div>
                </Link>

                <div className="flex justify-between items-center">
                    <Link
                        href="/"
                        className="inline-block my-4 py-2 bg-main-blue text-white text-md font-semibold px-8 rounded-full hover:bg-main-red-hover"
                    >
                        {t('backButton')}
                    </Link>
                    <div className="flex items-center">
                        <button
                            onClick={() => changeLanguage('fi')}
                            className={`px-2 py-1 mr-2 ${locale === 'fi' ? 'font-bold text-main-blue underline' : 'text-gray-500'}`}
                        >
                            FI
                        </button>
                        <button
                            onClick={() => changeLanguage('sv')}
                            className={`px-2 py-1 ${locale === 'sv' ? 'font-bold text-main-blue underline' : 'text-gray-500'}`}
                        >
                            SV
                        </button>
                    </div>
                </div>

                <div className="space-y-6 mt-8">
                    <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('intro.title')}</h2>
                        <p className="mb-4">
                            {t('intro.paragraph1')}
                        </p>
                        <p className="mb-4">
                            {t('intro.paragraph2')}
                        </p>
                        <p>
                            {t('intro.paragraph3')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('why.title')}</h2>
                        <h3 className="text-xl font-medium mb-2">{t('why.purposeTitle')}</h3>
                        <p className="mb-2">{t('why.purposeIntro')}</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            {getTranslationArray('why.purposes').map((purpose, index) => (
                                <li key={index}>{purpose}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-medium mb-2">{t('why.legalBasisTitle')}</h3>
                        <p className="mb-4">
                            {t('why.legalBasis1')}
                        </p>
                        <p className="mb-4">
                            {t('why.legalBasis2')}
                        </p>
                        <p className="mb-4">
                            {t('why.legalBasis3')}
                        </p>
                        <p>
                            {t('why.legalBasis4')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('whatData.title')}</h2>
                        <p className="mb-4">{t('whatData.intro')}</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            {getTranslationArray('whatData.points').map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('retention.title')}</h2>
                        <p>
                            {t('retention.content')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('sharing.title')}</h2>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            {getTranslationArray('sharing.points').map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('automated.title')}</h2>
                        <p className="mb-4">
                            {t('automated.paragraph1')}
                        </p>
                        <p>
                            {t('automated.paragraph2')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('international.title')}</h2>
                        <p className="mb-4">
                            {t('international.paragraph1')}
                        </p>
                        <p>
                            {t('international.paragraph2')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('security.title')}</h2>
                        <p>
                            {t('security.content')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('minors.title')}</h2>
                        <p>
                            {t('minors.content')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('thirdParty.title')}</h2>
                        <p>
                            {t('thirdParty.content')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('changes.title')}</h2>
                        <p>
                            {t('changes.content')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t('rights.title')}</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-medium mb-2">{t('rights.access.title')}</h3>
                                <p>{t('rights.access.content')}</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium mb-2">{t('rights.correction.title')}</h3>
                                <p>{t('rights.correction.content')}</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium mb-2">{t('rights.deletion.title')}</h3>
                                <p>{t('rights.deletion.content')}</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium mb-2">{t('rights.restriction.title')}</h3>
                                <p>{t('rights.restriction.content')}</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium mb-2">{t('rights.objection.title')}</h3>
                                <p>{t('rights.objection.content')}</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium mb-2">{t('rights.portability.title')}</h3>
                                <p>{t('rights.portability.content')}</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium mb-2">{t('rights.consent.title')}</h3>
                                <p>{t('rights.consent.content')}</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium mb-2">{t('rights.exercising.title')}</h3>
                                <p className="mb-4">{t('rights.exercising.paragraph1')}</p>
                                <p>{t('rights.exercising.paragraph2')}</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4">{t('contact.title')}</h2>
                        <p>
                            {t('contact.content')}{' '}
                            <Link href="mailto:info@swoony.io" className="text-main-blue hover:underline">
                                info@swoony.io
                            </Link>
                        </p>
                    </section>

                    <Link
                        href="/"
                        className="inline-block mt-8 py-2 bg-main-blue text-white text-md font-semibold px-8 rounded-full hover:bg-main-red-hover"
                    >
                        {t('backButton')}
                    </Link>
                </div>
            </div>

            <Footer />
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || 'fi', ['common', 'privacy'])),
        },
    };
};
