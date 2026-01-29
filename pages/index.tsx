import Image from "next/image";
import Link from "next/link";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Footer from "@/components/Footer/Footer";
import { FAQ } from '@/components/FAQ/FAQ';
import {
  ChevronDown,
  Apple,
  Play,
  Check,
  ArrowRight,
  Heart,
  Users,
  Shield,
  Sparkles,
  Clock,
  Target,
  Star,
  Zap,
  Brain,
  Eye,
  MessageCircle
} from 'lucide-react';
import { TestimonialCarousel } from '@/components/TestimonialCarousel/TestimonialCarousel';

export default function Home() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (id: string) => {
    closeMenu();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F42C52] to-[#00E6D5] p-[1px]">
              <div className="w-full h-full rounded-xl bg-[#0a0a0a] flex items-center justify-center">
                <Image src="/swoony.svg" alt="Swoony" width={20} height={15} priority />
              </div>
            </div>
            <span className="font-playfair text-xl font-bold text-white group-hover:text-[#F42C52] transition-colors">
              Swoony
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10 text-sm font-quicksand font-medium">
            <button onClick={() => scrollToSection('what-is-swoony')} className="text-white/60 hover:text-white transition-colors duration-300">
              {locale === 'sv' ? 'Vad är Swoony' : 'Mikä on Swoony'}
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-white/60 hover:text-white transition-colors duration-300">
              {locale === 'sv' ? 'Hur det fungerar' : 'Näin se toimii'}
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-white/60 hover:text-white transition-colors duration-300">
              {locale === 'sv' ? 'Priser' : 'Hinnat'}
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-white/60 hover:text-white transition-colors duration-300">
              FAQ
            </button>
          </div>

          {/* CTA + Language */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="font-quicksand flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors">
              {locale?.toUpperCase() || 'FI'}
              <ChevronDown className="w-4 h-4" />
            </button>
            <Link
              href="https://apps.apple.com/app/swoony/id6499217523"
              target="_blank"
              className="font-quicksand px-5 py-2.5 rounded-full bg-[#F42C52] text-white text-sm font-semibold hover:bg-[#d91e42] transition-all duration-300 hover:shadow-lg hover:shadow-[#F42C52]/20"
            >
              {locale === 'sv' ? 'Ladda ner' : 'Lataa sovellus'}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-t border-white/5 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <div className="px-6 py-8 flex flex-col gap-6 font-quicksand">
            <button onClick={() => scrollToSection('what-is-swoony')} className="text-left text-lg text-white/70 hover:text-white py-2">
              {locale === 'sv' ? 'Vad är Swoony' : 'Mikä on Swoony'}
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-left text-lg text-white/70 hover:text-white py-2">
              {locale === 'sv' ? 'Hur det fungerar' : 'Näin se toimii'}
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-left text-lg text-white/70 hover:text-white py-2">
              {locale === 'sv' ? 'Priser' : 'Hinnat'}
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-left text-lg text-white/70 hover:text-white py-2">
              FAQ
            </button>
            <Link
              href="https://apps.apple.com/app/swoony/id6499217523"
              target="_blank"
              className="mt-4 px-6 py-4 rounded-full bg-[#F42C52] text-white text-center font-semibold"
            >
              {locale === 'sv' ? 'Ladda ner appen' : 'Lataa sovellus'}
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="gradient-orb gradient-orb-red w-[600px] h-[600px] -top-40 -right-40 animate-breathe" />
        <div className="gradient-orb gradient-orb-cyan w-[500px] h-[500px] top-1/2 -left-60 animate-breathe" style={{ animationDelay: '2s' }} />
        <div className="gradient-orb gradient-orb-gold w-[400px] h-[400px] bottom-20 right-1/4 animate-breathe" style={{ animationDelay: '4s' }} />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                <Brain className="w-4 h-4 text-[#00E6D5]" />
                <span className="font-quicksand text-sm font-medium text-white/70">
                  {locale === 'sv' ? 'AI-driven matchmaking' : 'Tekoälypohjainen matchmaking'}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
                <span className="text-white">Koe</span>
                <br />
                <span className="text-[#F42C52]">uudenlainen</span>
                <br />
                <span className="text-white">deittailu</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-white/50 font-light mb-10 max-w-lg mx-auto lg:mx-0">
                {locale === 'sv'
                  ? 'AI som förstår dig. Visuell matchning + personlighetsanalys för kärleken du förtjänar.'
                  : 'Tekoäly joka ymmärtää sinua. Visuaalinen mätsäys + persoonallisuusanalyysi rakkautta varten.'}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 font-quicksand">
                <Link
                  href="https://apps.apple.com/app/swoony/id6499217523"
                  target="_blank"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-[#0a0a0a] font-semibold rounded-full px-8 py-4 transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:shadow-white/10"
                >
                  <Apple className="w-5 h-5" />
                  <span>{locale === 'sv' ? 'Ladda ner för iOS' : 'Lataa iOS:lle'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=fi.swoonymatchmaking.app"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:border-white/20 rounded-full px-8 py-4 transition-all duration-300 hover:bg-white/10 font-medium"
                >
                  <Play className="w-5 h-5 fill-current" />
                  <span>{locale === 'sv' ? 'Ladda ner för Android' : 'Lataa Androidille'}</span>
                </Link>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start font-quicksand">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white">4000+</div>
                  <div className="text-sm font-medium text-white/40">{locale === 'sv' ? 'Nöjda användare' : 'rekisteröitynyttä käyttäjää'}</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white">300+</div>
                  <div className="text-sm font-medium text-white/40">{locale === 'sv' ? 'Lyckade matcher' : 'Onnistunutta mätsiä'}</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#F42C52]">1</div>
                  <div className="text-sm font-medium text-white/40 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-[#F42C52] text-[#F42C52]" />
                    Swoony häät
                  </div>
                </div>
              </div>
            </div>

            {/* Right - App Mockup */}
            <div className="relative flex justify-center">
              {/* Glow effect behind mockup */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-[#F42C52]/30 to-[#00E6D5]/30 rounded-full blur-[100px] opacity-60" />

              {/* App Mockup */}
              <div className="relative z-10">
                <Image
                  src="/mock_app.png"
                  alt="Swoony App - AI-powered matchmaking"
                  width={497}
                  height={1000}
                  className="w-auto h-auto max-h-[680px] drop-shadow-2xl"
                  priority
                />

                {/* Floating Card - AI Match Quality */}
                <div className="absolute -bottom-4 -left-8 glass-card rounded-2xl p-4 font-quicksand shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F42C52] to-[#00E6D5] flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {locale === 'sv' ? 'AI Matchmaker' : 'Tekoäly Matchmaker'}
                      </div>
                      <div className="text-xs font-medium text-white/50">
                        {locale === 'sv' ? 'Visuell AI + Personlighet' : 'Visuaalinen AI + Persoonallisuus'}
                      </div>
                    </div>
                    <div className="ml-auto">
                      <div className="text-2xl font-bold text-[#00E6D5]">98%</div>
                    </div>
                  </div>
                </div>

                {/* Floating notification badge */}
                <div className="absolute top-20 -right-4 glass-card rounded-xl p-3 font-quicksand shadow-xl animate-pulse">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#F42C52] flex items-center justify-center">
                      <Heart className="w-4 h-4 text-white fill-white" />
                    </div>
                    <div className="text-xs font-semibold text-white">
                      {locale === 'sv' ? 'Ny match!' : 'Uusi mätsi!'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Featured In */}
      <section className="py-16 border-y border-white/5 bg-[#0a0a0a] overflow-hidden">
        <p className="font-quicksand text-center text-xs font-semibold text-white/30 uppercase tracking-[0.3em] mb-10 px-6">
          {locale === 'sv' ? 'Som syns i media' : 'Nähty mediassa'}
        </p>

        {/* Infinite Scroll Carousel */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

          {/* Scrolling container */}
          <div className="flex animate-marquee">
            {/* Duplicate logos for seamless infinite scroll */}
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-16 md:gap-24 shrink-0 px-8">
                {/* HS - Helsingin Sanomat */}
                <Link href="https://www.hs.fi/suomi/art-2000011034865.html" target="_blank" className="flex-shrink-0 flex items-center justify-center h-12 px-6 group cursor-pointer">
                  <Image
                    src="/hs_white.png"
                    alt="Helsingin Sanomat"
                    width={100}
                    height={40}
                    className="h-8 w-auto opacity-30 group-hover:opacity-60 transition-all duration-300"
                  />
                </Link>

                {/* IS - Ilta-Sanomat */}
                <Link href="https://www.is.fi/menaiset/ihmiset-ja-suhteet/art-2000011654619.html" target="_blank" className="flex-shrink-0 flex items-center justify-center h-12 px-6 group cursor-pointer">
                  <Image
                    src="/menaiset.png"
                    alt="Me naiset"
                    width={100}
                    height={40}
                    className="h-8 w-auto opacity-30 group-hover:opacity-60 transition-all duration-300 brightness-0 invert"
                  />
                </Link>

                {/* SK - Satakunnan Kansa */}
                <Link href="https://www.satakunnankansa.fi/satakunta/art-2000010979586.html" target="_blank" className="flex-shrink-0 flex items-center justify-center h-12 px-6 group cursor-pointer">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/2/27/Satakunnan_Kansa_wordmark.svg"
                    alt="Satakunnan Kansa"
                    width={120}
                    height={40}
                    className="h-8 w-auto opacity-30 group-hover:opacity-60 transition-all duration-300 brightness-0 invert"
                  />
                </Link>

                {/* MTV */}
                <Link href="https://www.mtvuutiset.fi/artikkeli/nettideittaajaa-vaanii-jatkuva-karkkikauppaefekti-nain-toimivat-tinderin-suomalaiset-haastajat/9186260" target="_blank" className="flex-shrink-0 flex items-center justify-center h-12 px-6 group cursor-pointer">
                  <span className="font-bold text-2xl text-white opacity-30 group-hover:opacity-60 transition-all duration-300 tracking-tight select-none" style={{ fontFamily: 'sans-serif' }}>
                    MTV
                  </span>
                </Link>

                {/* Huvudstadsbladet */}
                <Link href="https://www.hbl.fi/2025-05-23/trotta-pa-ytliga-dejtningappar-skapade-egen/" target="_blank" className="flex-shrink-0 flex items-center justify-center h-12 px-6 group cursor-pointer">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/4/40/HBL_wordmark.svg"
                    alt="Huvudstadsbladet"
                    width={140}
                    height={40}
                    className="h-8 w-auto opacity-30 group-hover:opacity-60 transition-all duration-300 brightness-0 invert"
                  />
                </Link>

                {/* FEEDI */}
                <Link href="https://www.feedi.fi/uusi-suomalainen-deittisovellus-swoony/" target="_blank" className="flex-shrink-0 flex items-center justify-center h-12 px-6 group cursor-pointer">
                  <Image
                    src="/feedi.png"
                    alt="Feedi"
                    width={167}
                    height={37}
                    className="h-8 w-auto opacity-30 group-hover:opacity-60 transition-all duration-300 brightness-0 invert"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Swoony */}
      <section id="what-is-swoony" className="py-32 px-6 relative">
        {/* Background orb */}
        <div className="gradient-orb gradient-orb-cyan w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="font-quicksand text-xs font-semibold text-[#F42C52] uppercase tracking-[0.3em] mb-4">
              {locale === 'sv' ? 'AI-driven matchmaking' : 'AI-matchmaker käytössäsi'}
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">{locale === 'sv' ? 'Din personliga ' : 'Henkilökohtainen '}</span>
              <span className="text-[#F42C52]">AI Matchmaker</span>
            </h2>
            <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
              {locale === 'sv'
                ? 'Swoony kombinerar visuell AI med djup personlighetsanalys. Vår AI analyserar både utseende och personlighet för att hitta din perfekta match.'
                : 'Swoony yhdistää visuaalisen tekoälyn syvälliseen persoonallisuusanalyysiin. Tekoälymme analysoi sekä ulkonäön että persoonallisuuden löytääkseen täydellisen mätsisi.'}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 - Visual AI */}
            <div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
              <div className="step-number">01</div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F42C52]/20 to-[#F42C52]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-7 h-7 text-[#F42C52]" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-4">{locale === 'sv' ? 'Visuell AI' : 'Visuaalinen AI'}</h3>
                <p className="text-white/50 leading-relaxed">
                  {locale === 'sv'
                    ? 'Vår AI analyserar visuella preferenser och hittar personer som matchar din typ.'
                    : 'Tekoälymme analysoi visuaaliset mieltymyksesi ja löytää ihmiset jotka vastaavat tyyppiäsi.'}
                </p>
              </div>
            </div>

            {/* Card 2 - AI Matchmaker */}
            <div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
              <div className="step-number">02</div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00E6D5]/20 to-[#00E6D5]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-7 h-7 text-[#00E6D5]" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-4">{locale === 'sv' ? 'AI Matchmaker' : 'Tekoäly Matchmaker'}</h3>
                <p className="text-white/50 leading-relaxed">
                  {locale === 'sv'
                    ? '50+ frågor analyseras för att förstå dina värderingar, livsstil och kärleksspråk på djupet.'
                    : '50+ kysymystä analysoidaan ymmärtääksemme arvosi, elämäntapasi ja rakkautesi kielen syvällisesti.'}
                </p>
              </div>
            </div>

            {/* Card 3 - Women First */}
            <div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
              <div className="step-number">03</div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-4">{locale === 'sv' ? 'Kvinnor först' : 'Naiset ensin'}</h3>
                <p className="text-white/50 leading-relaxed">
                  {locale === 'sv'
                    ? 'Vår unika säkerhetsmodell låter kvinnor se och godkänna matchningar först. Ingen spam.'
                    : 'Ainutlaatuinen mallimme antaa naisten nähdä ja hyväksyä mätsit ensin.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 px-6 bg-[#0f0f0f] relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="font-quicksand text-xs font-semibold text-[#00E6D5] uppercase tracking-[0.3em] mb-4">
              {locale === 'sv' ? 'AI-processen' : 'Tekoälyprosessi'}
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-white">{locale === 'sv' ? 'Hur AI ' : 'Näin tekoäly '}</span>
              <span className="text-[#00E6D5]">{locale === 'sv' ? 'hittar din match' : 'löytää mätsisi'}</span>
            </h2>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                num: '01',
                icon: Target,
                color: '#F42C52',
                title: locale === 'sv' ? 'Skapa din profil' : 'Luo profiilisi',
                desc: locale === 'sv'
                  ? 'Svara på 50+ frågor. AI lär sig dina värderingar, livsstil och vad du verkligen söker i en partner.'
                  : 'Vastaa 50+ kysymykseen. Tekoäly oppii arvosi, elämäntapasi ja mitä todella etsit kumppanilta.',
              },
              {
                num: '02',
                icon: Eye,
                color: '#00E6D5',
                title: locale === 'sv' ? 'Visuell AI analyserar' : 'Visuaalinen AI analysoi',
                desc: locale === 'sv'
                  ? 'Vår visuella AI lär sig din typ och identifierar personer som matchar dina preferenser.'
                  : 'Visuaalinen tekoälymme oppii tyyppisi ja tunnistaa ihmiset jotka vastaavat mieltymyksiäsi.',
              },
              {
                num: '03',
                icon: Brain,
                color: '#D4AF37',
                title: locale === 'sv' ? 'AI Matchmaker väljer' : 'Tekoäly Matchmaker valitsee',
                desc: locale === 'sv'
                  ? 'AI kombinerar personlighet och visuell kompatibilitet för att hitta dina bästa matchningar.'
                  : 'Tekoäly yhdistää persoonallisuuden ja visuaalisen yhteensopivuuden löytääkseen parhaat mätsisi.',
              },
              {
                num: '04',
                icon: Heart,
                color: '#F42C52',
                title: locale === 'sv' ? 'Matchning skapas' : 'Mätsi syntyy',
                desc: locale === 'sv'
                  ? 'När båda accepterar öppnas chatten. Inga swipar – bara meningsfulla kontakter.'
                  : 'Kun molemmat hyväksyvät, chatti avautuu. Ei swaippausta – vain laadukkaita mätsejä.',
              },
            ].map((step, i) => (
              <div key={i} className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover-lift">
                <div className="step-number">{step.num}</div>
                <div className="relative z-10 flex gap-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `linear-gradient(135deg, ${step.color}20 0%, ${step.color}05 100%)` }}
                  >
                    <step.icon className="w-7 h-7" style={{ color: step.color }} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-white/50 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section id="who-its-for" className="py-32 px-6 relative">
        <div className="gradient-orb gradient-orb-gold w-[500px] h-[500px] top-20 right-0 opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <p className="font-quicksand text-xs font-semibold text-[#D4AF37] uppercase tracking-[0.3em] mb-4">
                {locale === 'sv' ? 'Målgrupp' : 'Kohderyhmä'}
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">{locale === 'sv' ? 'Passar ' : 'Sopii '}</span>
                <span className="text-[#D4AF37]">Swoony</span>
                <span className="text-white">{locale === 'sv' ? ' dig?' : ' sinulle?'}</span>
              </h2>
              <p className="text-lg text-white/50 mb-10 leading-relaxed">
                {locale === 'sv'
                  ? 'Swoony är för dig som är trött på ytliga swipar och vill att AI ska hitta din perfekta match.'
                  : 'Swoony on sinulle, joka olet kyllästynyt pinnalliseen swaippailuun ja haluat tekoälyn löytävän täydellisen mätsisi.'}
              </p>

              {/* Checklist */}
              <div className="space-y-4">
                {[
                  locale === 'sv' ? 'Du söker ett seriöst förhållande' : 'Etsit vakavaa suhdetta',
                  locale === 'sv' ? 'Du värderar din tid högt' : 'Arvostat aikaasi',
                  locale === 'sv' ? 'Du vill att AI ska göra jobbet' : 'Vain ehdotuksia, jotka oikeasti ovat sinulle sopivia',
                  locale === 'sv' ? 'Du är trött på dejtingappar' : 'Olet kyllästynyt deittisovelluksiin',
                  locale === 'sv' ? 'Du prioriterar kvalitet' : 'Priorisoit laadun ennen määrää',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-[#F42C52]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F42C52]/20 transition-colors">
                      <Check className="w-4 h-4 text-[#F42C52]" />
                    </div>
                    <span className="text-white/70 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="glass-card rounded-3xl p-8 lg:p-12">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#F42C52] to-[#00E6D5] flex items-center justify-center">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold mb-4">
                    {locale === 'sv' ? 'Redo för AI-matchning?' : 'Valmis tekoälymätsäykseen?'}
                  </h3>
                  <p className="text-white/50 mb-8">
                    {locale === 'sv'
                      ? 'Låt vår AI hitta din perfekta match.'
                      : 'Anna tekoälymme löytää täydellinen mätsisi.'}
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <TestimonialCarousel /> */}

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6 bg-[#0f0f0f] relative">
        <div className="gradient-orb gradient-orb-red w-[600px] h-[600px] -bottom-40 left-1/4 opacity-20" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="font-quicksand text-xs font-semibold text-[#F42C52] uppercase tracking-[0.3em] mb-4">
              {locale === 'sv' ? 'AI Matchmaker' : 'Tekoäly Matchmaker'}
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">{locale === 'sv' ? 'Välj din ' : 'Valitse '}</span>
              <span className="text-[#F42C52]">AI-plan</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              {locale === 'sv'
                ? 'AI Matchmaker analyserar och hittar dina matchningar automatiskt.'
                : 'Tekoälymme analysoi ja löytää mätsisi automaattisesti.'}
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Free */}
            <div className="glass-card rounded-3xl p-8 hover-lift">
              <div className="mb-8">
                <h3 className="font-playfair text-xl font-semibold mb-2">{locale === 'sv' ? 'Gratis' : 'Ilmainen'}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">€0</span>
                  <span className="text-white/40">/{locale === 'sv' ? 'mån' : 'kk'}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-4">
                {[
                  '1 mätsihaku per kk',
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/60">
                    <Check className="w-5 h-5 text-[#00E6D5]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="italic text-white/50">Voit saada myös mätsejä plus/pro käyttäjien kanssa (max 4 per kk)</p>
            </div>

            {/* Swoony+ - Highlighted */}
            <div className="pricing-highlight rounded-3xl">
              <div className="bg-[#0f0f0f] rounded-3xl p-8 h-full relative">
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F42C52] to-[#00E6D5] text-xs font-bold uppercase tracking-wider">
                  {locale === 'sv' ? 'Populärast' : 'Suosituin'}
                </div>

                <div className="mb-8 pt-2">
                  <h3 className="font-playfair text-xl font-semibold mb-2">Swoony+</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">€19.99</span>
                    <span className="text-white/40">/{locale === 'sv' ? 'mån' : 'kk'}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    'Mätsiehdotukset joka perjantai',
                    'Mahdollisuus saada 4+ mätsiä per kk',
                    'Prioriteetti Swoony AI:n mätsäysjonossa'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80">
                      <Check className="w-5 h-5 text-[#F42C52]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>

            {/* Pro */}
            <div className="glass-card rounded-3xl p-8 hover-lift">
              <div className="mb-8">
                <h3 className="font-playfair text-xl font-semibold mb-2">Swoony Pro</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">€39.99</span>
                  <span className="text-white/40">/{locale === 'sv' ? 'mån' : 'kk'}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Mätsiehdotukset joka perjantai & tiistai',
                  'Mahdollisuus saada 8+ mätsiä per kk',
                  'VIP prioriteetti Swoony AI:n mätsäysjonossa'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/60">
                    <Check className="w-5 h-5 text-[#00E6D5]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>

          {/* VIP Human Matchmaker Section */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden">
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F42C52] to-[#00E6D5] opacity-20" />
              <div className="absolute inset-[1px] bg-[#0f0f0f] rounded-3xl" />

              <div className="relative p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#8B6914] flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-quicksand text-xs text-[#D4AF37] font-bold tracking-widest mb-2">
                        {locale === 'sv' ? 'MÄNSKLIG MATCHMAKER' : 'IHMIS-MATCHMAKER'}
                      </div>
                      <h3 className="font-playfair text-2xl font-bold mb-2">
                        {locale === 'sv' ? 'Swoony VIP' : 'Swoony VIP'}
                      </h3>
                      <p className="text-white/50 max-w-xl">
                        {locale === 'sv'
                          ? 'Vill du ha personlig touch? Vår mänskliga matchmaker intervjuar dig, granskar din profil och handplockar 5 matchningar som AI skulle missa.'
                          : 'Haluatko henkilökohtaista palvelua? Asiantuntijamme haastattelee sinut, arvioi profiilisi ja valitsee käsin sinulle sopivia mätsejä.'}
                      </p>
                      {/* <div className="mt-4 flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1.5 text-xs text-white/60 bg-white/5 px-3 py-1.5 rounded-full">
                          <Check className="w-3 h-3 text-[#D4AF37]" />
                          {locale === 'sv' ? '30 min intervju' : '30 min haastattelu'}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-white/60 bg-white/5 px-3 py-1.5 rounded-full">
                          <Check className="w-3 h-3 text-[#D4AF37]" />
                          {locale === 'sv' ? '5 handplockade matcher' : '5 käsinvalittua mätsiä'}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-white/60 bg-white/5 px-3 py-1.5 rounded-full">
                          <Check className="w-3 h-3 text-[#D4AF37]" />
                          {locale === 'sv' ? 'Garanti: 2 samtal' : 'Takuu: 2 keskustelua'}
                        </span>
                      </div> */}
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-4">
                    <div className="text-4xl font-bold text-[#D4AF37]">Tulossa pian</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section id="faq" className="py-32 bg-[#0a0a0a]">
        <FAQ />
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="gradient-orb gradient-orb-red w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="gradient-orb gradient-orb-cyan w-[600px] h-[600px] top-0 right-0 opacity-15" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">{locale === 'sv' ? 'Låt AI hitta ' : 'Anna tekoälyn löytää '}</span>
            <span className="text-[#F42C52]">{locale === 'sv' ? 'kärleken' : 'rakkaus'}</span>
          </h2>
          <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
            {locale === 'sv'
              ? 'Ladda ner Swoony idag och låt vår AI Matchmaker hitta din perfekta match. Sluta swipa, börja dejta.'
              : 'Lataa Swoony tänään ja anna tekoäly Matchmakerimme löytää täydellinen mätsisi. Lopeta swippaaminen, aloita deittailu.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://apps.apple.com/app/swoony/id6499217523"
              target="_blank"
              className="group inline-flex items-center justify-center gap-3 bg-white text-[#0a0a0a] font-semibold rounded-full px-10 py-5 transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:shadow-white/10"
            >
              <Apple className="w-6 h-6" />
              <span className="text-lg">{locale === 'sv' ? 'Ladda ner för iOS' : 'Lataa iOS:lle'}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=fi.swoonymatchmaking.app"
              target="_blank"
              className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:border-white/20 rounded-full px-10 py-5 transition-all duration-300 hover:bg-white/10"
            >
              <Play className="w-6 h-6 fill-current" />
              <span className="text-lg">{locale === 'sv' ? 'Ladda ner för Android' : 'Lataa Androidille'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'fi', ['common'])),
    },
  };
};
