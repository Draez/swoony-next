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
            answer: "Swoony erbjuder två olika paket: Swoony Free och Swoony Pro. Swoony Free är gratis och inkluderar en expertutvalld match samt möjligheten att matchas endast med Pro-användare. Swoony Pro kostar 29,99€/månad och inkluderar expertutvalda matcher, möjlighet att matchas med alla användare, prioritet i matchning samt prioriterad sökning en gång i månaden."
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
            question: "1. Mikä erottaa Swoonyn muista deittisovelluksista?",
            answer: "Swoony yhdistää asiantuntijuuden ja tekoälyn, jotta löydät aidosti sopivan kumppanin. Jokainen mätsi analysoidaan huolella arvojen, elämäntyylin ja tavoitteiden perusteella. Keskitymme laatuun, emme määrään."
        },
        {
            question: "2. Matchmaking-prosessi",
            answer: "Profiilisi täytön jälkeen asiantuntijamme analysoivat tekoälyä hyödyntäen profiiliasi ja etsivät sinulle parhaan mahdollisen kumppanin. Kun sopiva mätsi löytyy, pääset tutustumaan häneen sovelluksen sisäisen chatin kautta."
        },
        {
            question: "3. Kuinka kauan prosessi kestää?",
            answer: "Matchmaking-prosessi voi kestää viikosta muutamaan kuukauteen riippuen siitä, kuinka nopeasti löydämme sinulle täydellisen mätsin. Laadukkaan kumppanin löytäminen vaatii aikaa, eikä prosessia hätiköidä. Koitamme aina parhaamme mutta ikävä kyllä emme voi taata mätsin löytymistä."
        },
        {
            question: "4. Kenelle Swoony sopii?",
            answer: "Swoony on suunnattu kaikille, jotka etsivät vakavaa suhdetta ja arvostavat ammattilaisten apua kumppanin löytämisessä. Jos haluat merkityksellisen yhteyden, Swoony on sinua varten."
        },
        {
            question: "5. Kuinka paljon Swoony maksaa?",
            answer: "Swoony tarjoaa kaksi erilaista pakettia: Swoony Free ja Swoony Pro. Swoony Free on ilmainen ja sisältää asiantuntijoiden valitseman mätsin sekä mahdollisuuden tulla mätsätyksi vain Pro-käyttäjien kanssa. Swoony Pro maksaa 29,99€/kk ja sisältää asiantuntijoiden valitsemat mätsit, mahdollisuuden tulla mätsätyksi kaikkien käyttäjien kanssa, etusijan mätsäyksessä sekä priorisoidun etsinnän kerran kuukaudessa."
        },
        {
            question: "6. Swoonyn asiantuntijat",
            answer: "Swoonyn asiantuntijat ovat korkeakoulutettuja psykologian ja ihmissuhteiden ammattilaisia, joilla on vankka kokemus matchmakingista ja parisuhdeneuvonnasta. Jokainen mätsi tehdään huolella, koska uskomme täydellisen kumppanin löytämisen vaativan sekä ammattitaitoa että intuitiota."
        },
        {
            question: "7. Miten tietojani käsitellään ja kenelle ne näkyvät?",
            answer: "Antamasi tiedot ja video ovat vain Swoonyn asiantuntijoiden nähtävissä. Jos olet näkyvillä potentiaalisena mätsinä toiselle käyttäjälle, hän näkee etunimesi, ikäsi ja profiilikuvasi. Jos mätsi syntyy, asiantuntijamme laatii kuvauksen siitä, miksi olisitte hyvä pari – tämän kuvauksen näette silloin toisistanne."
        },
        {
            question: "8. Sovelluksen käyttöopas",
            answer: <Link href="/swoony_guide.pdf" target="_blank">Avaa käyttöopas (PDF)</Link>
        },
        {
            question: "9. Asiakaspalvelu",
            answer: "Olemme täällä sinua varten! Ota yhteyttä sähköpostitse: info@swoony.io"
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