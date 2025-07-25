import { FAQItem } from './FAQItem';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export function FAQ() {
    const { t } = useTranslation('common');
    const router = useRouter();
    const { locale } = router;

    const faqData = locale === 'sv' ? [
        {
            question: "1. Vad skiljer Swoony från andra dejting-appar?",
            answer: "Swoony kombinerar expertis och AI för att du ska hitta en genuint lämplig partner. Varje match analyseras noggrant baserat på värderingar, livsstil och mål. Vi fokuserar på kvalitet, inte kvantitet."
        },
        {
            question: "2. Matchmaking-processen",
            answer: "Efter att du fyllt i din profil analyserar våra experter din profil med hjälp av AI och söker efter den bästa möjliga partnern för dig. När en lämplig match hittas får du lära känna dem via appens interna chatt."
        },
        {
            question: "3. Hur lång tid tar processen?",
            answer: "Matchmaking-processen kan ta från en vecka till några månader beroende på hur snabbt vi hittar din perfekta match. Att hitta en kvalitetspartner tar tid och processen påskyndas inte. Vi gör alltid vårt bästa men tyvärr kan vi inte garantera att en match hittas."
        },
        {
            question: "4. Vem passar Swoony för?",
            answer: "Swoony är riktad till alla som söker ett seriöst förhållande och värdesätter professionell hjälp med att hitta en partner. Om du vill ha en meningsfull relation är Swoony för dig."
        },
        {
            question: "5. Hur mycket kostar Swoony?",
            answer: "Swoony erbjuder två olika paket: Swoony Free och Swoony Pro. Swoony Free är gratis och inkluderar en expertutvalld match samt möjligheten att matchas endast med Pro-användare. Swoony Pro inkluderar expertutvalda matcher, möjlighet att matchas med alla användare, prioritet i matchning samt prioriterad sökning en gång i månaden."
        },
        {
            question: "6. Swoonys experter",
            answer: "Swoonys experter är högt utbildade psykologi- och relationsprofessioner med gedigen erfarenhet av matchmaking och relationsrådgivning. Varje match görs noggrant eftersom vi tror att det krävs både expertis och intuition för att hitta den perfekta partnern."
        },
        {
            question: "7. Hur behandlas min information och vem kan se den?",
            answer: "Informationen och video du tillhandahåller kan endast ses av Swoonys experter. Om du visas som en potentiell match för en annan användare kommer de att se ditt förnamn, ålder och profilbild. Om det blir en match, kommer våra experter att skapa en beskrivning av varför ni skulle vara ett bra par - denna beskrivning kommer ni att se om varandra."
        },
        {
            question: "8. Appens användarguide",
            answer: <Link href="/swoony_guide.pdf" target="_blank">Öppna användarguide (PDF)</Link>
        },
        {
            question: "9. Kundtjänst",
            answer: "Vi finns här för dig! Kontakta oss via e-post: info@swoony.io"
        },
    ] : [
        {
            question: t('faq.question1'),
            answer: t('faq.answer1')
        },
        {
            question: t('faq.question2'),
            answer: t('faq.answer2')
        },
        {
            question: t('faq.question3'),
            answer: t('faq.answer3')
        },
        {
            question: t('faq.question4'),
            answer: t('faq.answer4')
        },
        {
            question: t('faq.question5'),
            answer: t('faq.answer5')
        },
        {
            question: t('faq.question6'),
            answer: t('faq.answer6')
        },
        {
            question: t('faq.question7'),
            answer: <Link href="/swoony_guide.pdf" target="_blank">{t('faq.answer7')}</Link>
        },
        {
            question: t('faq.question8'),
            answer: t('faq.answer8')
        },
    ];

    return (
        <section className="container mx-auto px-4 py-12 md:py-24" id="faq">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-main-blue text-center mb-12">
                    {t('faq.title')}
                </h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
} 