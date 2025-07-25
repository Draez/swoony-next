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
                <h2 className="text-4xl font-bold text-main-blue mb-4">{t('pricing.title')}</h2>
                <p className="text-light-blue text-lg">
                    {locale === 'sv'
                        ? 'Välj ett paket som innehåller de funktioner som passar dig bäst för att hitta en partner.'
                        : 'Valitse paketti, joka sisältää sinulle sopivimmat ominaisuudet kumppanin löytämiseen.'}
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12">

                <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-8">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-main-blue mb-2">Swoony {t('pricing.free')}</h3>
                                <p className="text-light-blue">
                                    {locale === 'sv' ? 'Personlig matchmaking-tjänst' : 'Henkilökohtainen matchmaking-palvelu'}
                                </p>
                            </div>


                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-main-blue">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {locale === 'sv'
                                        ? 'Potentiell match vald av expert'
                                        : 'Asiantuntijan valitsema mahdollinen mätsi'}
                                </li>
                                <li className="flex items-center text-main-blue">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {locale === 'sv'
                                        ? 'Möjlighet att matchas endast med Pro-användare'
                                        : 'Mahdollisuus tulla mätsätyksi vain Pro-käyttäjien kanssa'}
                                </li>
                                <li className="flex items-center text-main-blue">
                                    <svg className="w-5 h-5 text-swoony-red mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" stroke="red" />
                                    </svg>
                                    {locale === 'sv'
                                        ? 'Ingen aktiv matchsökning'
                                        : 'Ei aktiivista mätsin etsintää'}
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                {/* Right side pricing card */}
                <div className="w-full max-w-md">
                    <div className="bg-main-blue rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-8">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Swoony {t('pricing.premium')}</h3>
                                <p className="text-white">
                                    {locale === 'sv' ? 'Personlig matchmaking-tjänst' : 'Henkilökohtainen matchmaking-palvelu'}
                                </p>
                            </div>



                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-white">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {locale === 'sv'
                                        ? 'Potentiell match vald av expert'
                                        : 'Asiantuntijan valitsema mahdollinen mätsi'}
                                </li>
                                <li className="flex items-center text-white">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {locale === 'sv'
                                        ? 'Möjlighet att matchas med alla användare'
                                        : 'Mahdollisuus tulla mätsätyksi kaikkien käyttäjien kanssa'}
                                </li>
                                <li className="flex items-center text-white">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {locale === 'sv'
                                        ? 'Din profil får prioritet vid matchning'
                                        : 'Profiilisi saa etusijan mätsäyksessä'}
                                </li>
                                <li className="flex items-center text-white">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {locale === 'sv'
                                        ? 'Prioriterad sökning en gång i månaden'
                                        : 'Priorisoitu etsintä kerran kuukaudessa'}
                                </li>

                                <li className="flex items-center text-white">
                                    <svg className="w-5 h-5 text-main-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-sm">
                                        {locale === 'sv'
                                            ? 'Observera: Vi kan inte garantera att en match hittas varje månad. Vi vill säkerställa att vi endast gör genuint passande matcher'
                                            : 'Huomioithan: Mätsin löytymistä ei voida taata joka kuukausi. Haluamme varmistaa, että teemme vain aidosti sopivia mätsejä'}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 