import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function Experts() {
    const { t } = useTranslation('common');
    const router = useRouter();
    const { locale } = router;

    return (
        <section className="container mx-auto px-4 py-12 md:py-24">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-main-blue">
                        {t('experts.title')}
                    </h2>
                    <p className="text-lg text-main-blue">
                        {locale === 'sv'
                            ? 'Swoonys experter är högt utbildade psykologi- och relationsspecialister med gedigen erfarenhet av matchmaking och relationsrådgivning.'
                            : 'Swoonyn asiantuntijat ovat korkeakoulutettuja psykologian ja ihmissuhteiden ammattilaisia, joilla on vankka kokemus matchmakingista ja parisuhdeneuvonnasta.'}
                    </p>
                    <p className="text-lg font-semibold text-main-blue">
                        {locale === 'sv' ? 'Vi kombinerar vetenskap och känsla:' : 'Yhdistämme tieteen ja tunteen:'}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-main-blue">
                        <li>{locale === 'sv' ? 'Djupgående människokännedom' : 'Syvällinen ihmistuntemus'}</li>
                        <li>{locale === 'sv' ? 'Psykologisk kompetens' : 'Psykologinen osaaminen'}</li>
                        <li>{locale === 'sv' ? 'Genuint omtänksamhet' : 'Aito välittäminen'}</li>
                        <li>{locale === 'sv' ? 'AI som stöd' : 'Tekoäly auttamassa'}</li>
                    </ul>
                    <p className="text-lg text-main-blue">
                        {locale === 'sv'
                            ? 'Varje match görs med omsorg, eftersom vi tror att det krävs både professionell kompetens och intuition för att hitta den perfekta partnern.'
                            : 'Jokainen mätsi tehdään huolella, koska uskomme täydellisen kumppanin löytämisen vaativan sekä ammattitaitoa että intuitiota.'}
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        src="/love.jpg"
                        alt={locale === 'sv' ? 'Matchmaker' : 'Asiantuntija'}
                        width={400}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
