import { FAQItem } from './FAQItem';
import Link from 'next/link';

const faqData = [
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
        answer: "Antamasi tiedot, kuvat ja videot näkyvät ainoastaan Swoonyn asiantuntijoille. Kun mätsi syntyy, mahdollinen kumppanisi näkee vain kuvasi sekä asiantuntijamme laatiman kuvauksen siitä, miksi olisitte hyvä mätsi."
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

export function FAQ() {
    return (
        <section className="container mx-auto px-4 py-12 md:py-24" id="faq">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-main-blue text-center mb-12">
                    Usein kysytyt kysymykset
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