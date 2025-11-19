import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useRouter } from "next/router";
import { quickSand } from "@/lib/fonts";

export default function Terms() {
    const { t } = useTranslation('terms');
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
            <div className="p-8 max-w-4xl mx-auto">
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

                <div className="prose prose-lg max-w-none mt-8">
                    <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{t('commitment.title')}</h2>
                        <p className="mb-4">
                            {t('commitment.intro')}
                        </p>
                        <ul className="list-decimal pl-6 mb-6">
                            {getTranslationArray('commitment.points').map((point, index) => (
                                <li key={index} className="mb-2">{point}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{t('consents.title')}</h2>
                        <p>{t('consents.intro')}</p>
                        <ul className="list-decimal pl-6 mb-6">
                            {getTranslationArray('consents.points').map((point, index) => (
                                <li key={index} className="mb-2">{point}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{t('restrictions.title')}</h2>
                        <p className="mb-4">{t('restrictions.intro')}</p>
                        <ul className="list-decimal pl-6 mb-6">
                            {getTranslationArray('restrictions.points').map((point, index) => (
                                <li key={index} className="mb-2">{point}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{t('payment.title')}</h2>
                        <div className="space-y-4">
                            {getTranslationArray('payment.paragraphs').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{t('satisfaction_guarantee.title')}</h2>
                        <div className="space-y-4">
                            {getTranslationArray('satisfaction_guarantee.paragraphs').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{t('changes.title')}</h2>
                        <div className="space-y-4">
                            {getTranslationArray('changes.paragraphs').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{t('cancellation.title')}</h2>
                        <div className="space-y-4">
                            {getTranslationArray('cancellation.paragraphs').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{t('liability.title')}</h2>
                        <div className="space-y-4">
                            {getTranslationArray('liability.paragraphs').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{t('communication.title')}</h2>
                        <div className="space-y-4">
                            {getTranslationArray('communication.paragraphs').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{t('safety.title')}</h2>
                        <div className="space-y-4">
                            {getTranslationArray('safety.paragraphs').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{t('contact.title')}</h2>
                        <p className="mb-2">{t('contact.email')}</p>
                        <p className="mb-2">{t('contact.phone')}</p>
                        <p className="mb-2">{t('contact.hours')}</p>
                    </section>
                </div>

                <Link
                    href="/"
                    className="inline-block mt-8 py-2 bg-main-blue text-white text-md font-semibold px-8 rounded-full hover:bg-main-red-hover"
                >
                    {t('backButton')}
                </Link>
            </div>
            <Footer />
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || 'fi', ['common', 'terms'])),
        },
    };
};
