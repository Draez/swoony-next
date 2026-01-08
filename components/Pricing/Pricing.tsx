import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Pricing() {
    const { t } = useTranslation('common');
    const router = useRouter();
    const { locale } = router;
    const [selectedModel, setSelectedModel] = useState<'packages' | 'membership'>('packages');

    return (
        <section className="container mx-auto px-4 py-12 md:py-24" id="pricing">

            <div className="flex justify-center mb-12">
                <div className="bg-white rounded-full p-1 shadow-md inline-flex border border-gray-100">
                    <button
                        onClick={() => setSelectedModel('packages')}
                        className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${selectedModel === 'packages'
                            ? 'bg-[#D4AF37] text-white shadow-sm'
                            : 'text-gray hover:text-black'
                            }`}
                    >
                        {t('selection.matchPackages')}
                    </button>
                    <button
                        onClick={() => setSelectedModel('membership')}
                        className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${selectedModel === 'membership'
                            ? 'bg-[#A9A9A9] text-white shadow-sm'
                            : 'text-gray hover:text-black'
                            }`}
                    >
                        {t('selection.membership')}
                    </button>
                </div>
            </div>
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-bold text-black mb-4">
                    {selectedModel === 'packages' ? t('selection.findTheOne') : t('selection.getDiscovered')}
                </h2>
                <p className="text-gray text-lg">
                    {selectedModel === 'packages'
                        ? t('selection.matchPackagesDescription')
                        : t('selection.membershipDescription')}
                </p>
            </div>



            {selectedModel === 'packages' ? (
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                    <div className="w-full max-w-md">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="p-8">
                                <div className="text-center">
                                    <h3 className="text-xl font-regular text-gray">1 mätsi</h3>

                                </div>
                                <div className="text-center mb-8">
                                    <h3 className="text-4xl font-bold text-black mb-2">79,99€</h3>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-main-blue">
                                        <svg className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {locale === 'sv'
                                            ? 'Potentiell match vald av expert'
                                            : 'Asiantuntijan valitsema mätsi'}
                                    </li>
                                    <li className="flex items-center text-main-blue">
                                        <svg className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {locale === 'sv'
                                            ? 'Möjlighet att matchas med alla användare'
                                            : 'Kuluu vasta kun molemmat hyväksyvät mätsin'}
                                    </li>
                                    <li className="flex items-center text-main-blue">
                                        <svg className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {locale === 'sv'
                                            ? 'Möjlighet att matchas endast med Pro-användare'
                                            : 'Kattavat perustelut mätsistä'}
                                    </li>
                                    <li className="flex items-center text-main-blue">
                                        <svg className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {locale === 'sv'
                                            ? 'Möjlighet att matchas endast med Pro-användare'
                                            : 'Keskustelutakuu (uusi mätsi, mikäli keskustelua ei aloiteta)'}
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                    {/* Right side pricing card */}
                    <div className="w-full max-w-md">
                        <div className="shadow-lg rounded-2xl border border-[#D4AF37] overflow-hidden relative">
                            <div className="absolute right-0 p-4">
                                <span className="bg-[#D4AF37] text-white uppercase px-4 py-1 rounded-full text-xs font-semibold">
                                    {locale === 'sv' ? 'Populärast' : 'Suosituin'}
                                </span>
                            </div>
                            <div className="p-8">
                                <div className="text-center">
                                    <h3 className="text-xl font-regular text-gray">3 mätsiä</h3>
                                </div>
                                <div className="text-center mb-8">
                                    <h3 className="text-4xl font-bold text-black mb-2">179,99€</h3>
                                    <p className="text-sm text-gray font-semibold">Säästä 60€</p>
                                </div>


                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-main-blue">
                                        <svg className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {locale === 'sv'
                                            ? 'Potentiell match vald av expert'
                                            : 'Asiantuntijan valitsema mätsi'}
                                    </li>
                                    <li className="flex items-center text-main-blue">
                                        <svg className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {locale === 'sv'
                                            ? 'Möjlighet att matchas endast med Pro-användare'
                                            : 'Kuluu vasta kun molemmat hyväksyvät mätsin'}
                                    </li>
                                    <li className="flex items-center text-main-blue">
                                        <svg className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {locale === 'sv'
                                            ? 'Möjlighet att matchas endast med Pro-användare'
                                            : 'Kattavat perustelut mätsistä'}
                                    </li>
                                    <li className="flex items-center text-main-blue">
                                        <svg className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {locale === 'sv'
                                            ? 'Möjlighet att matchas endast med Pro-användare'
                                            : 'Keskustelutakuu (uusi mätsi, mikäli keskustelua ei aloiteta)'}
                                    </li>

                                </ul>
                            </div>

                            <div className="p-8">
                                <div className="text-center">
                                    <h3 className="text-xl font-regular text-gray">5 mätsiä</h3>
                                </div>
                                <div className="text-center mb-8">
                                    <h3 className="text-4xl font-bold text-black mb-2">299,99€</h3>
                                    <p className="text-sm text-gray font-semibold">Säästä 100€</p>
                                </div>


                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-main-blue">
                                        <svg className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {locale === 'sv'
                                            ? 'Potentiell match vald av expert'
                                            : 'Asiantuntijan valitsema mätsi'}
                                    </li>
                                    <li className="flex items-center text-main-blue">
                                        <svg className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {locale === 'sv'
                                            ? 'Möjlighet att matchas endast med Pro-användare'
                                            : 'Kuluu vasta kun molemmat hyväksyvät mätsin'}
                                    </li>
                                    <li className="flex items-center text-main-blue">
                                        <svg className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {locale === 'sv'
                                            ? 'Möjlighet att matchas endast med Pro-användare'
                                            : 'Kattavat perustelut mätsistä'}
                                    </li>
                                    <li className="flex items-center text-main-blue">
                                        <svg className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {locale === 'sv'
                                            ? 'Möjlighet att matchas endast med Pro-användare'
                                            : 'Keskustelutakuu (uusi mätsi, mikäli keskustelua ei aloiteta)'}
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            ) : (
                <div className="flex justify-center">
                    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden border border-[#A9A9A9]">
                        <div className="p-8">
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-regular text-gray">{t('selection.membership')}</h3>
                            </div>
                            <div className="text-center mb-8">
                                <h3 className="text-4xl font-bold text-black mb-2">9,99€ <span className="text-lg font-normal text-gray">/ kk</span></h3>
                                <p className="text-gray mt-4">{t('selection.membershipDescription')}</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-main-blue">
                                    <svg className="w-5 h-5 text-[#A9A9A9] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {t('selection.features.accessToPlatform')}
                                </li>


                                <li className="flex items-center text-main-blue">
                                    <svg className="w-5 h-5 text-[#A9A9A9] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {t('selection.features.satisfactionGuarantee')}
                                </li>
                                <li className="flex items-center text-main-blue">
                                    <svg className="w-5 h-5 text-[#A9A9A9] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {t('selection.features.abilityToBeMatched')}
                                </li>
                            </ul>


                        </div>
                    </div>
                </div>
            )}
        </section>
    );
} 