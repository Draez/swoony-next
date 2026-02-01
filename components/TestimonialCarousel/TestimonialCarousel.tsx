import { useRouter } from 'next/router';
import { Quote } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  highlightWords: string[];
  name: string;
  avatar: string;
}

export function TestimonialCarousel() {
  const router = useRouter();
  const { locale } = router;

  // Finnish/Nordic looking avatars
  const avatars = {
    emmaL: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face", // Blonde woman
    mikkoK: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", // Nordic man
    sofiaM: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face", // Light-haired woman
    markusT: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", // Fair-skinned man
    annaS: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", // Nordic blonde woman
    erikP: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", // Nordic man
  };

  const testimonials: Testimonial[] = locale === 'sv' ? [
    {
      quote: "Jag trodde att det var intressant och coolt att Swoony inte ställer typiska frågor.",
      highlightWords: ["intressant", "coolt", "typiska"],
      name: "Emma L.",
      avatar: avatars.emmaL
    },
    {
      quote: "Det känns som att jag har mer att prata om på en dejt med min Swoony-match.",
      highlightWords: ["mer att prata om", "Swoony-match"],
      name: "Johan K.",
      avatar: avatars.mikkoK
    },
    {
      quote: "Processen fick mig att verkligen tänka på vad jag vill ha.",
      highlightWords: ["verkligen tänka", "vad jag vill ha"],
      name: "Sofia M.",
      avatar: avatars.sofiaM
    },
    {
      quote: "Sekretess är viktigt för mig. Jag behövde inte oroa mig med Swoony.",
      highlightWords: ["Sekretess", "viktigt", "oroa mig"],
      name: "Marcus T.",
      avatar: avatars.markusT
    },
    {
      quote: "Utvärderingen var allt för mig. Jag älskade att svara på frågorna.",
      highlightWords: ["Utvärderingen", "allt för mig", "älskade"],
      name: "Anna S.",
      avatar: avatars.annaS
    },
    {
      quote: "Det finns något att säga om att inte behöva swipa och bara se bättre matchningar.",
      highlightWords: ["inte behöva swipa", "bättre matchningar"],
      name: "Erik P.",
      avatar: avatars.erikP
    },
  ] : [
    {
      quote: "Ajattelin että oli mielenkiintoista ja siistiä, ettei Swoony kysy tyypillisiä kysymyksiä.",
      highlightWords: ["mielenkiintoista", "siistiä", "tyypillisiä"],
      name: "Emma L.",
      avatar: avatars.emmaL
    },
    {
      quote: "Tuntuu siltä, että minulla on enemmän puhuttavaa treffeillä Swoony-mätsini kanssa.",
      highlightWords: ["enemmän puhuttavaa", "Swoony-mätsini"],
      name: "Mikko K.",
      avatar: avatars.mikkoK
    },
    {
      quote: "Prosessi sai minut todella miettimään mitä haluan.",
      highlightWords: ["todella miettimään", "mitä haluan"],
      name: "Sofia M.",
      avatar: avatars.sofiaM
    },
    {
      quote: "Yksityisyys on minulle tärkeää. Minun ei tarvinnut huolehtia siitä Swoonyn kanssa.",
      highlightWords: ["Yksityisyys", "tärkeää", "huolehtia"],
      name: "Markus T.",
      avatar: avatars.markusT
    },
    {
      quote: "Arviointi oli minulle kaikki kaikessa. Rakastin vastata kysymyksiin.",
      highlightWords: ["Arviointi", "kaikki kaikessa", "Rakastin"],
      name: "Anna S.",
      avatar: avatars.annaS
    },
    {
      quote: "On hienoa ettei tarvitse swipata vaan näkee suoraan parempia mätsejä.",
      highlightWords: ["ei tarvitse swipata", "parempia mätsejä"],
      name: "Erik P.",
      avatar: avatars.erikP
    },
  ];

  // Split into two rows
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 6);

  const highlightText = (text: string, highlights: string[]) => {
    let result = text;
    highlights.forEach(word => {
      result = result.replace(new RegExp(`(${word})`, 'gi'), '|||$1|||');
    });

    return result.split('|||').map((part, i) => {
      const isHighlight = highlights.some(h => h.toLowerCase() === part.toLowerCase());
      return isHighlight ? (
        <span key={i} className="text-[#F42C52] font-medium">{part}</span>
      ) : (
        <span key={i}>{part}</span>
      );
    });
  };

  const TestimonialCard = ({ testimonial, faded = false }: { testimonial: Testimonial; faded?: boolean }) => (
    <div className={`flex-shrink-0 w-[380px] glass-card rounded-3xl p-8 relative ${faded ? 'opacity-30' : ''}`}>
      {/* Quote icon */}
      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#F42C52]/10 flex items-center justify-center">
        <Quote className="w-5 h-5 text-[#F42C52]" />
      </div>

      <p className="text-white/70 text-base leading-relaxed mb-8 pr-12">
        &ldquo;{highlightText(testimonial.quote, testimonial.highlightWords)}&rdquo;
      </p>

      <div className="flex items-center gap-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
        />
        <div>
          <span className="text-white font-medium block">{testimonial.name}</span>
          <span className="text-white/40 text-sm">Swoony {locale === 'sv' ? 'användare' : 'käyttäjä'}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-32 overflow-hidden bg-[#0f0f0f] relative">
      {/* Background gradient */}
      <div className="gradient-orb gradient-orb-cyan w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <p className="text-center text-xs text-[#00E6D5] uppercase tracking-[0.3em] mb-4">
          {locale === 'sv' ? 'Recensioner' : 'Arvostelut'}
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          <span className="text-white">{locale === 'sv' ? 'Vad våra ' : 'Mitä '}</span>
          <span className="text-[#00E6D5]">{locale === 'sv' ? 'användare säger' : 'käyttäjämme sanovat'}</span>
        </h2>
      </div>

      {/* Row 1 - scrolls left */}
      <div className="relative mb-6 fade-mask-both">
        <div className="flex gap-6 animate-scroll-left">
          {/* Duplicate for infinite effect */}
          {[...row1, ...row1, ...row1].map((testimonial, i) => (
            <TestimonialCard
              key={`row1-${i}`}
              testimonial={testimonial}
              faded={i % 3 === 0}
            />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="relative fade-mask-both">
        <div className="flex gap-6 animate-scroll-right">
          {/* Duplicate for infinite effect */}
          {[...row2, ...row2, ...row2].map((testimonial, i) => (
            <TestimonialCard
              key={`row2-${i}`}
              testimonial={testimonial}
              faded={i % 3 === 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
