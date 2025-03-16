import Image from 'next/image';

export default function Pricing() {
    return (
        <section className="container mx-auto px-4 py-12 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-bold text-main-blue mb-4">Valitse sinulle sopiva paketti</h2>
                <p className="text-light-blue text-lg">
                    Valitse paketti, joka sisältää sinulle sopivimmat ominaisuudet kumppanin löytämiseen.
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12">

                <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-8">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-main-blue mb-2">Swoony Free</h3>
                                <p className="text-light-blue">Henkilökohtainen matchmaking-palvelu</p>
                            </div>

                            <div className="text-center mb-8">
                                <span className="text-4xl font-bold text-main-blue">Ilmainen</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-main-blue">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Asiantuntijoiden valitsema mätsi
                                </li>
                                <li className="flex items-center text-main-blue">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Mahdollisuus tulla mätsätyksi vain Pro-käyttäjien kanssa
                                </li>
                                <li className="flex items-center text-main-blue">
                                    <svg className="w-5 h-5 text-swoony-red mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" stroke="red" />
                                    </svg>
                                    Ei aktiivista mätsin etsintää
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
                                <h3 className="text-2xl font-bold text-white mb-2">Swoony Pro</h3>
                                <p className="text-white">Henkilökohtainen matchmaking-palvelu / Avajaistarjous voimassa 1.4.2025 saakka</p>
                            </div>

                            <div className="text-center mb-8">
                                <span className="text-4xl font-bold text-white">19,99€</span>
                                <span className="text-white ml-2">/kk</span>
                                <span className="text-white ml-2 line-through text-opacity-70">29,99€</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-white">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Asiantuntijoiden valitsema mätsi
                                </li>
                                <li className="flex items-center text-white">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Mahdollisuus tulla mätsätyksi kaikkien käyttäjien kanssa
                                </li>
                                <li className="flex items-center text-white">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Profiilisi saa etusijan mätsäyksessä
                                </li>
                                <li className="flex items-center text-white">
                                    <svg className="w-5 h-5 text-swoony-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Priorisoitu etsintä kerran kuukaudessa
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 