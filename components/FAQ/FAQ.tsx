import { FAQItem } from './FAQItem';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { HelpCircle } from 'lucide-react';

export function FAQ() {
    const { t } = useTranslation('common');
    const router = useRouter();
    const { locale } = router;

    const faqData = locale === 'sv' ? [
        // Swoony & AI
        {
            category: 'Swoony & AI',
            question: "Vad är Swoony?",
            answer: "Swoony är en AI-baserad dejtingapp som automatiskt hittar en lämplig partner åt dig. Till skillnad från traditionella appar behöver du inte bläddra bland profiler – Swoonys AI analyserar din profil och hittar kompatibla kandidater."
        },
        {
            question: "Hur fungerar Swoonys AI-matchning?",
            answer: "AI analyserar din profil och frågeformulärssvar, jämför med alla användare och beräknar kompatibilitetsprocent. När kompatibiliteten överstiger 70% får du ett matchförslag.\n\nPro-medlemmar får företräde i matchsökningen."
        },
        {
            question: "När får jag matchförslag?",
            answer: "AI söker matchningar på fasta matchdagar:\n\n• Free: varannan fredag\n• Pro: varje tisdag och fredag\n\nDu får en notifikation så snart en kompatibel match hittas. Om ingen tillräckligt kompatibel match hittas fortsätter AI söka nästa matchdag."
        },
        {
            question: "Hur beräknas kompatibilitetsprocenten?",
            answer: "AI analyserar båda användarnas:\n• Frågeformulärssvar\n• Värderingar och livsstil\n• Preferenser (ålder, avstånd)\n• Intressen\n\nProcenten visar hur väl era profiler passar ihop. Matchförslag skickas endast om kompatibiliteten är över 70%."
        },
        // Medlemskap
        {
            category: 'Medlemskap',
            question: "Vilka medlemskapsalternativ finns?",
            answer: "Swoony erbjuder två medlemskapsnivåer:\n\n• Free: AI-matchning, matchdag varannan fredag\n• Pro: matchdagar varje tisdag och fredag, tillgång till alla förslag, VIP-prioritet och feedback på profilen\n\nPå båda nivåerna får du en match endast om kompatibiliteten är över 70%."
        },
        {
            question: "Vad behöver jag för att slutföra min profil?",
            answer: "För att slutföra din profil behöver du:\n• Personlig information (namn, födelsedatum, stad, längd)\n• Minst 2 bilder\n• Frågeformulärssvar\n• Inställningar (åldersintervall, avstånd)\n\nValfritt: 30 sekunders presentationsvideo."
        },
        {
            question: "Vad används frågeformuläret till?",
            answer: "Frågeformuläret har utformats av en magister i psykoterapi och är AI:s viktigaste verktyg för att beräkna kompatibilitet. Svaren hjälper AI att förstå dina värderingar, personlighet och vad du söker hos en partner. Ju mer noggrant du svarar, desto bättre matcher får du."
        },
        {
            question: "Hur fungerar matchningsprocessen?",
            answer: "1. AI analyserar din profil på matchdagar och söker kompatibla kandidater\n2. Om över 70% kompatibilitet hittas får du ett matchförslag\n3. Båda parter ser förslaget samtidigt\n4. Var och en kan acceptera eller avslå självständigt\n5. När båda accepterar öppnas chatten\n6. Efter feedback startar processen om"
        },
        {
            question: "Kan jag avslå en match?",
            answer: "Ja, du kan avslå en match. Du blir ombedd att ge feedback, vilket hjälper AI att förbättra framtida förslag. Den andra personen ser inte din avslagsorsak."
        },
        // Support & hjälp
        {
            category: 'Support & hjälp',
            question: "Varför får jag inga matcher?",
            answer: "Att hitta en match kräver över 70% kompatibilitet. Du kan prova:\n• Justera åldersintervall eller avståndsinställningar\n• Komplettera frågeformulärssvar\n• Se till att din profil är komplett\n\nOm ingen kompatibel match hittas fortsätter AI söka nästa matchdag."
        },
        {
            question: "Kan jag dölja min profil?",
            answer: "Ja! Du kan växla din profils synlighet från Profil-sidan. När profilen är dold inkluderar AI dig inte i matchningen. Du kan aktivera profilen när som helst."
        },
        {
            question: "Hur ändrar jag mina inställningar?",
            answer: "Gå till Inställningar från din Profil. Du kan justera:\n• Partnerns könspreferens\n• Åldersintervall (18-100)\n• Maximalt avstånd (20-300 km)\n\nÄndringar träder i kraft direkt."
        },
        {
            question: "Hur avslutar jag min prenumeration?",
            answer: "Alla prenumerationer hanteras via App Store (iOS) eller Google Play (Android).\n\niOS: Inställningar → [Ditt namn] → Prenumerationer → Swoony → Avsluta prenumeration\n\nAndroid: Google Play → Meny → Prenumerationer → Swoony → Avsluta prenumeration\n\nPrenumerationen förblir aktiv till slutet av faktureringsperioden."
        },
        {
            question: "Hur tar jag bort mitt konto?",
            answer: "Gå till Profil > Inställningar > Radera konto. Denna åtgärd är permanent. All din data kommer att tas bort."
        },
        {
            question: "Hur får jag hjälp?",
            answer: "Vi svarar vanligtvis inom 24 timmar. Skriv till oss: info@swoony.io"
        },
    ] : [
        // Swoony & AI
        {
            category: t('faq.categories.gettingStarted'),
            question: t('faq.questions.q1'),
            answer: t('faq.answers.a1')
        },
        {
            question: t('faq.questions.q2'),
            answer: t('faq.answers.a2')
        },
        {
            question: t('faq.questions.q3'),
            answer: t('faq.answers.a3')
        },
        {
            question: t('faq.questions.q5'),
            answer: t('faq.answers.a5')
        },
        // Jäsenyydet
        {
            category: t('faq.categories.accountFeatures'),
            question: t('faq.questions.q4'),
            answer: t('faq.answers.a4')
        },
        {
            question: t('faq.questions.q6'),
            answer: t('faq.answers.a6')
        },
        {
            question: t('faq.questions.q7'),
            answer: t('faq.answers.a7')
        },
        {
            question: t('faq.questions.q8'),
            answer: t('faq.answers.a8')
        },
        {
            question: t('faq.questions.q9'),
            answer: t('faq.answers.a9')
        },
        // Tuki & apu
        {
            category: t('faq.categories.supportHelp'),
            question: t('faq.questions.q10'),
            answer: t('faq.answers.a10')
        },
        {
            question: t('faq.questions.q11'),
            answer: t('faq.answers.a11')
        },
        {
            question: t('faq.questions.q12'),
            answer: t('faq.answers.a12')
        },
        {
            question: t('faq.questions.q13'),
            answer: t('faq.answers.a13')
        },
        {
            question: t('faq.questions.q14'),
            answer: t('faq.answers.a14')
        },
        {
            question: t('faq.questions.q15'),
            answer: t('faq.answers.a15')
        },
    ];

    return (
        <section className="px-6" id="faq">
            <div className="max-w-3xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="font-quicksand text-xs font-semibold text-[#D4AF37] uppercase tracking-[0.3em] mb-4">
                        FAQ
                    </p>
                    <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">{locale === 'sv' ? 'Vanliga ' : 'Usein kysytyt '}</span>
                        <span className="text-[#D4AF37]">{locale === 'sv' ? 'frågor' : 'kysymykset'}</span>
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-0">
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                        />
                    ))}
                </div>

                {/* Additional Help */}
                <div className="mt-12 text-center">
                    <div className="glass-card rounded-2xl p-8 inline-block">
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                                <HelpCircle className="w-6 h-6 text-[#D4AF37]" />
                            </div>
                            <div className="text-left">
                                <p className="text-white font-medium">
                                    {locale === 'sv' ? 'Har du fler frågor?' : 'Onko sinulla lisää kysymyksiä?'}
                                </p>
                                <Link href="mailto:info@swoony.io" className="text-[#D4AF37] hover:text-[#c9976a] transition-colors">
                                    info@swoony.io
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
