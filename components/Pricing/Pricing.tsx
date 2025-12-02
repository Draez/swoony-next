import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function Pricing() {
    const { t } = useTranslation('common');
    const router = useRouter();
    const { locale } = router;

    return (
        <section className="container mx-auto px-4 py-12 md:py-24" id="pricing">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-bold text-black mb-4">{t('pricing.title')}</h2>
                <p className="text-gray text-lg">
                    {locale === 'sv'
                        ? 'Välj ett paket som innehåller de funktioner som passar dig bäst för att hitta en partner.'
                        : 'Valitse sinulle sopivin paketti'}
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-8">
                            <div className="text-center">
                                <h3 className="text-xl font-regular text-gray">1 mätsi</h3>

                            </div>
                            <div className="text-center mb-8">
                                <h3 className="text-4xl font-bold text-black mb-2">49,99€</h3>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-main-blue">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {locale === 'sv'
                                        ? 'Potentiell match vald av expert'
                                        : 'Asiantuntijan valitsema mätsi'}
                                </li>
                                <li className="flex items-center text-main-blue">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {locale === 'sv'
                                        ? 'Möjlighet att matchas med alla användare'
                                        : 'Kuluu vasta kun molemmat hyväksyvät mätsin'}
                                </li>
                                <li className="flex items-center text-main-blue">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {locale === 'sv'
                                        ? 'Möjlighet att matchas endast med Pro-användare'
                                        : 'Kattavat perustelut mätsistä'}
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
                {/* Right side pricing card */}
                <div className="w-full max-w-md">
                    <div className="shadow-lg rounded-2xl border border-main-green overflow-hidden relative">
                        <div className="absolute right-0 p-4">
                            <span className="bg-main-green text-black uppercase px-4 py-1 rounded-full text-xs font-semibold">
                                {locale === 'sv' ? 'Populärast' : 'Suosituin'}
                            </span>
                        </div>
                        <div className="p-8">
                            <div className="text-center">
                                <h3 className="text-xl font-regular text-gray">3 mätsiä</h3>
                            </div>
                            <div className="text-center mb-8">
                                <h3 className="text-4xl font-bold text-black mb-2">129,99€</h3>
                                <p className="text-sm text-gray font-semibold">Säästä 20€</p>
                            </div>


                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-main-blue">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {locale === 'sv'
                                        ? 'Potentiell match vald av expert'
                                        : 'Asiantuntijan valitsema mätsi'}
                                </li>
                                <li className="flex items-center text-main-blue">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {locale === 'sv'
                                        ? 'Möjlighet att matchas endast med Pro-användare'
                                        : 'Kuluu vasta kun molemmat hyväksyvät mätsin'}
                                </li>
                                <li className="flex items-center text-main-blue">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {locale === 'sv'
                                        ? 'Möjlighet att matchas endast med Pro-användare'
                                        : 'Kattavat perustelut mätsistä'}
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-md">
                    <div className="shadow-lg rounded-2xl overflow-hidden">
                        <div className="p-8">
                            <div className="text-center">
                                <h3 className="text-xl font-regular text-gray">5 mätsiä</h3>
                            </div>
                            <div className="text-center mb-8">
                                <h3 className="text-4xl font-bold text-black mb-2">169,99€</h3>
                                <p className="text-sm text-gray font-semibold">Säästä 80€</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-main-blue">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {locale === 'sv'
                                        ? 'Potentiell match vald av expert'
                                        : 'Asiantuntijan valitsema mätsi'}
                                </li>
                                <li className="flex items-center text-main-blue">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {locale === 'sv'
                                        ? 'Möjlighet att matchas endast med Pro-användare'
                                        : 'Kuluu vasta kun molemmat hyväksyvät mätsin'}
                                </li>
                                <li className="flex items-center text-main-blue">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {locale === 'sv'
                                        ? 'Möjlighet att matchas endast med Pro-användare'
                                        : 'Kattavat perustelut mätsistä'}
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 