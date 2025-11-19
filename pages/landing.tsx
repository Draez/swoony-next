import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Landing() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Add body class for landing page styles
    document.body.classList.add('landing-page-retro');
    return () => {
      document.body.classList.remove('landing-page-retro');
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Head>
        <title>Swoony | Bring Back Romance</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="film-grain">
        {/* Navigation */}
        <nav className="fixed w-full z-40 bg-[#121212]/95 border-b border-gray-800 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-24">
              {/* Logo */}
              <div
                className="flex items-center cursor-pointer gap-3"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="text-3xl headline font-black tracking-tighter offset-print" data-text="Swoony">
                  Swoony
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-10">
                <a href="#philosophy" className="typewriter text-sm hover:text-swoony-cyan transition-colors uppercase tracking-widest">
                  Filosofia
                </a>
                <a href="#how-it-works" className="typewriter text-sm hover:text-swoony-cyan transition-colors uppercase tracking-widest">
                  Toiminta
                </a>
                <a href="#pricing" className="typewriter text-sm hover:text-swoony-red transition-colors uppercase tracking-widest">
                  Hinnasto
                </a>
                <button className="btn-classic text-xs py-3 px-6">Lataa App</button>
              </div>

              {/* Mobile Button */}
              <div className="md:hidden">
                <button onClick={toggleMobileMenu} className="text-white text-2xl">
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden bg-[#1a1a1a] border-b border-gray-800 p-6 space-y-6 transition-all ${isMobileMenuOpen ? 'block' : 'hidden'
              }`}
          >
            <a href="#philosophy" className="block typewriter text-lg text-swoony-paper" onClick={toggleMobileMenu}>
              Filosofia
            </a>
            <a href="#how-it-works" className="block typewriter text-lg text-swoony-paper" onClick={toggleMobileMenu}>
              Toiminta
            </a>
            <a href="#pricing" className="block typewriter text-lg text-swoony-red" onClick={toggleMobileMenu}>
              Hinnasto
            </a>
            <button className="w-full btn-classic border-swoony-red text-swoony-red">Lataa App</button>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          {/* Background Texture */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-[#121212] to-[#121212]"></div>

          {/* Decorative lines */}
          <div className="absolute top-0 left-10 h-full w-px bg-gray-800/50 hidden md:block"></div>
          <div className="absolute top-0 right-10 h-full w-px bg-gray-800/50 hidden md:block"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <div className="mb-8 flex justify-center">
              <span className="typewriter text-xs md:text-sm tracking-[0.3em] uppercase text-swoony-cyan border border-swoony-cyan/30 px-4 py-2 rounded-full">
                Perustetttu 2023 • Suomi
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl headline leading-[0.9] mb-10">
              Koe uudenlainen <br />
              <span className="text-swoony-red italic font-serif pr-4">Deittailu</span>
            </h1>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-8 max-w-3xl mx-auto mb-12 text-left md:text-center">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                <span className="typewriter text-swoony-red font-bold block mb-2 text-sm uppercase tracking-wider">
                  The Problem:
                </span>
                Swiping is fast, superficial, and exhausting. It&apos;s a marketplace, not a meeting place.
              </p>
              <div className="hidden md:block h-12 w-px bg-gray-700"></div>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                <span className="typewriter text-swoony-cyan font-bold block mb-2 text-sm uppercase tracking-wider">
                  The Solution:
                </span>
                <span className="font-medium text-white">Swoony.</span> Real matchmakers. Hand-picked introductions. Dating like it used to be.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="btn-classic btn-primary group py-3 px-6 text-sm">
                Aloita Nyt
                <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </button>
              <div className="flex items-center gap-3 text-sm text-gray-500 typewriter">
                <i className="fa-solid fa-user-group"></i> 3000+ Jäsentä
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
            <span className="typewriter text-[10px] uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>
              Scroll
            </span>
            <div className="h-12 w-px bg-white"></div>
          </div>
        </header>

        {/* Manifesto Section (Value Prop) */}
        <section id="philosophy" className="py-24 bg-[#161616] border-y border-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                {/* Decorative Image/Box placeholder */}
                <div className="w-full aspect-[4/5] border border-gray-700 p-2 relative">
                  <div className="absolute -top-4 -left-4 w-full h-full border border-swoony-cyan/30 z-0"></div>
                  <div className="w-full h-full bg-[#1a1a1a] flex flex-col items-center justify-center relative z-10 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    {/* Using a font icon as visual placeholder for an old photo */}
                    <div className="relative w-full h-full">
                      <Image src="/retro_couple.jpg" alt="Philosophy" fill className="object-cover" />
                    </div>
                    <span className="typewriter text-xs text-gray-500 absolute bottom-4">Fig 1. The Lost Art of Conversation</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="headline text-4xl md:text-5xl mb-8">
                  Deittailukulttuurin <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-swoony-red to-orange-600">
                    Vallankumous.
                  </span>
                </h2>
                <div className="space-y-6 text-lg font-light text-gray-300">
                  <p>
                    <strong className="text-white font-serif italic text-xl">Muistatko ajan,</strong> jolloin ihmiset kohtasivat ilman algoritmeja? Kun treffit eivät olleet suoritus, vaan mahdollisuus?
                  </p>
                  <p>
                    Swoony yhdistää teknologian tarkkuuden ja ihmisen ymmärryksen. Emme luota pelkkään dataan. Me luotamme intuitioon, kemiaan ja arvoihin.
                  </p>
                  <ul className="space-y-4 mt-8 typewriter text-sm">
                    <li className="flex items-center gap-4">
                      <span className="w-6 h-6 border border-swoony-red flex items-center justify-center text-swoony-red text-xs">
                        01
                      </span>
                      Asiantuntija etsii sinulle kumppanin.
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="w-6 h-6 border border-swoony-cyan flex items-center justify-center text-swoony-cyan text-xs">
                        02
                      </span>
                      Maksat vain hyväksytyistä mätseistä.
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="w-6 h-6 border border-white flex items-center justify-center text-white text-xs">
                        03
                      </span>
                      Ei renkaanpotkijoita. Vain tositarkoituksella.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section (Newspaper Style) */}
        <section id="how-it-works" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="typewriter text-swoony-red text-sm uppercase tracking-widest mb-2 block">
                Käyttöopas
              </span>
              <h2 className="headline text-4xl md:text-6xl mb-6">Miten Swoony Toimii?</h2>
              <p className="font-serif italic text-gray-400 text-xl">Kuusi askelta kohti aitoa kohtaamista.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-800 border border-gray-800">
              {/* Step 1 */}
              <div className="bg-[#121212] border-r border-b border-gray-800 p-10 hover:bg-[#161616] transition-colors group">
                <div className="typewriter text-4xl text-gray-700 mb-6 group-hover:text-swoony-cyan transition-colors">
                  01.
                </div>
                <h3 className="headline text-2xl mb-4">Täytä Profiili</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  Kerro meille itsestäsi ja toiveistasi rehellisesti. Profiilisi on kirjeemme asiantuntijoille.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-[#121212] border-r border-b border-gray-800 p-10 hover:bg-[#161616] transition-colors group">
                <div className="typewriter text-4xl text-gray-700 mb-6 group-hover:text-swoony-red transition-colors">
                  02.
                </div>
                <h3 className="headline text-2xl mb-4">Valitse Paketti</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  Valitse 1, 3 tai 5 mätsin paketti. Profiilisi aktivoituu asiantuntijoillemme heti.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-[#121212] p-10 hover:bg-[#161616] transition-colors group">
                <div className="typewriter text-4xl text-gray-700 mb-6 group-hover:text-swoony-cyan transition-colors">
                  03.
                </div>
                <h3 className="headline text-2xl mb-4">Asiantuntijahaku</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  Ihmiset, eivät koneet, etsivät sinulle kumppanin psykologian ja intuition avulla.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-[#121212] p-10 hover:bg-[#161616] transition-colors group">
                <div className="typewriter text-4xl text-gray-700 mb-6 group-hover:text-swoony-red transition-colors">
                  04.
                </div>
                <h3 className="headline text-2xl mb-4">Tutustuminen</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  Mätsi syntyy vain molempien hyväksynnällä. Aloittakaa keskustelu rauhassa.
                </p>
              </div>

              {/* Step 5 */}
              <div className="bg-[#121212] p-10 hover:bg-[#161616] transition-colors group">
                <div className="typewriter text-4xl text-gray-700 mb-6 group-hover:text-swoony-cyan transition-colors">
                  05.
                </div>
                <h3 className="headline text-2xl mb-4">Palaute</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  Viikko mätsin jälkeen palautelaatikko aukeaa. Kokemuksesi opettaa meitä.
                </p>
              </div>

              {/* Step 6 */}
              <div className="bg-[#121212] p-10 hover:bg-[#161616] transition-colors group">
                <div className="typewriter text-4xl text-gray-700 mb-6 group-hover:text-swoony-red transition-colors">
                  06.
                </div>
                <h3 className="headline text-2xl mb-4">Uusi Mahdollisuus</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  Jos ei tärpännyt, aloitamme alusta. Emme luovuta ennen kuin löydät etsimäsi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing (Ticket Stub Style) */}
        <section id="pricing" className="py-24 bg-[#f4f1ea] text-[#121212]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="headline text-4xl md:text-5xl mb-4">Valitse Mätsipaketti</h2>
              <p className="font-typewriter text-gray-600">Investoi laatuun, älä määrään.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Plan 1 */}
              <div className="border-2 border-dashed border-gray-400 p-8 relative group hover:border-black transition-colors">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f4f1ea] px-4">
                  <i className="fa-solid fa-ticket text-2xl text-gray-400 group-hover:text-black"></i>
                </div>
                <h3 className="headline text-2xl mb-2 text-center">1 Mätsi</h3>
                <div className="text-center text-4xl font-black mb-6 font-sans">19,99€</div>
                <ul className="space-y-3 font-typewriter text-sm text-gray-700 mb-8">
                  <li>✓ Asiantuntijan valinta</li>
                  <li>✓ Maksa vasta hyväksyessä</li>
                  <li>✓ Kattavat perustelut</li>
                </ul>
                <button className="w-full py-3 border-2 border-black uppercase font-bold hover:bg-black hover:text-white transition-colors">
                  Valitse
                </button>
              </div>

              {/* Plan 2 (Highlight) */}
              <div className="border-4 border-black p-8 relative transform scale-105 bg-white shadow-[10px_10px_0px_rgba(217,48,37,1)]">
                <div className="absolute top-0 right-0 bg-swoony-red text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  Suosituin
                </div>
                <h3 className="headline text-3xl mb-2 text-center mt-2">3 Mätsiä</h3>
                <div className="text-center text-5xl font-black mb-2 font-sans text-swoony-red">49,99€</div>
                <div className="text-center text-sm text-gray-500 mb-6">Säästä 10€</div>
                <ul className="space-y-4 font-typewriter text-sm text-gray-800 mb-8">
                  <li className="flex items-center">
                    <span className="text-swoony-red mr-2">●</span> Asiantuntijan valinta
                  </li>
                  <li className="flex items-center">
                    <span className="text-swoony-red mr-2">●</span> Maksa vasta hyväksyessä
                  </li>
                  <li className="flex items-center">
                    <span className="text-swoony-red mr-2">●</span> Kattavat perustelut
                  </li>
                </ul>
                <button className="w-full py-4 bg-black text-white uppercase font-bold hover:bg-gray-800 transition-colors">
                  Valitse
                </button>
              </div>

              {/* Plan 3 */}
              <div className="border-2 border-dashed border-gray-400 p-8 relative group hover:border-black transition-colors">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f4f1ea] px-4">
                  <i className="fa-solid fa-ticket text-2xl text-gray-400 group-hover:text-black"></i>
                </div>
                <h3 className="headline text-2xl mb-2 text-center">5 Mätsiä</h3>
                <div className="text-center text-4xl font-black mb-2 font-sans">79,99€</div>
                <div className="text-center text-sm text-gray-500 mb-6">Säästä 20€</div>
                <ul className="space-y-3 font-typewriter text-sm text-gray-700 mb-8">
                  <li>✓ Asiantuntijan valinta</li>
                  <li>✓ Maksa vasta hyväksyessä</li>
                  <li>✓ Kattavat perustelut</li>
                </ul>
                <button className="w-full py-3 border-2 border-black uppercase font-bold hover:bg-black hover:text-white transition-colors">
                  Valitse
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Expert & Testimonials (Polaroid Style) */}
        <section className="py-24 bg-[#121212] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="headline text-center text-4xl text-white mb-16">Tarinoita Arkistosta</h2>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {/* Testimonial 1 */}
              <div className="polaroid w-80 bg-white text-black">
                <div className="w-full h-48 bg-gray-200 mb-4 overflow-hidden grayscale hover:grayscale-0 transition-all">
                  {/* Placeholder image effect */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-300">
                    <i className="fa-solid fa-user text-4xl text-gray-400"></i>
                  </div>
                </div>
                <p className="font-serif italic text-lg leading-snug mb-4">
                  &quot;Ihmiset ei ehkä käsitä, miten arvokas palvelu käsin poimittu kumppaniehdokas on.&quot;
                </p>
                <div className="flex justify-between items-end border-t border-gray-300 pt-2">
                  <span className="typewriter font-bold text-sm">Emma, 36</span>
                  <span className="typewriter text-xs text-gray-500">Helsinki</span>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="polaroid w-80 bg-white text-black z-10 transform rotate-2 scale-110">
                <div className="w-full h-48 bg-gray-200 mb-4 overflow-hidden grayscale hover:grayscale-0 transition-all">
                  <div className="w-full h-full flex items-center justify-center bg-gray-800">
                    <i className="fa-solid fa-user text-4xl text-gray-500"></i>
                  </div>
                </div>
                <p className="font-serif italic text-lg leading-snug mb-4">
                  &quot;Mainio sovellus. Omat arvot ja minä omana itsenäni otetaan vihdoin huomioon.&quot;
                </p>
                <div className="flex justify-between items-end border-t border-gray-300 pt-2">
                  <span className="typewriter font-bold text-sm text-swoony-red">Mikko, 28</span>
                  <span className="typewriter text-xs text-gray-500">Tampere</span>
                </div>
                {/* Tape effect */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/30 border-l border-r border-white/50 rotate-2"></div>
              </div>

              {/* Testimonial 3 */}
              <div className="polaroid w-80 bg-white text-black">
                <div className="w-full h-48 bg-gray-200 mb-4 overflow-hidden grayscale hover:grayscale-0 transition-all">
                  <div className="w-full h-full flex items-center justify-center bg-gray-300">
                    <i className="fa-solid fa-user text-4xl text-gray-400"></i>
                  </div>
                </div>
                <p className="font-serif italic text-lg leading-snug mb-4">
                  &quot;Harkittu ja perusteltu ehdotus lisää kiinnostustani tutustua. Erittäin positiivinen.&quot;
                </p>
                <div className="flex justify-between items-end border-t border-gray-300 pt-2">
                  <span className="typewriter font-bold text-sm">Sofia, 39</span>
                  <span className="typewriter text-xs text-gray-500">Turku</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News & FAQ */}
        <section className="py-24 border-t border-gray-800 bg-[#161616]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Latest News (Typed List) */}
              <div className="flex-1">
                <h3 className="headline text-2xl mb-8 text-swoony-cyan">Ajankohtaista</h3>
                <ul className="space-y-6 border-l border-gray-700 pl-6">
                  <li className="group cursor-pointer">
                    <span className="typewriter text-xs text-gray-500 block mb-1">12.10.2023 • Uudistus</span>
                    <a href="#" className="text-lg font-serif group-hover:text-swoony-red transition-colors">
                      Sovellusta on uudistettu. Lue lisää →
                    </a>
                  </li>
                  <li className="group cursor-pointer">
                    <span className="typewriter text-xs text-gray-500 block mb-1">05.10.2023 • Podcast</span>
                    <a href="#" className="text-lg font-serif group-hover:text-swoony-red transition-colors">
                      Swoony vieraana &quot;Miesten mielestä&quot; -podcastissa.
                    </a>
                  </li>
                  <li className="group cursor-pointer">
                    <span className="typewriter text-xs text-gray-500 block mb-1">01.10.2023 • Uutiset</span>
                    <a href="#" className="text-lg font-serif group-hover:text-swoony-red transition-colors">
                      Ensimmäiset mätsit ovat nyt tehty!
                    </a>
                  </li>
                </ul>
              </div>

              {/* FAQ (Simple text) */}
              <div className="flex-1" id="faq">
                <h3 className="headline text-2xl mb-8 text-swoony-red">Usein Kysyttyä</h3>
                <div className="space-y-4">
                  <details className="group border-b border-gray-800 pb-4">
                    <summary className="font-serif text-lg cursor-pointer flex justify-between items-center">
                      Mikä erottaa Swoonyn muista?
                      <span className="text-gray-500 text-sm group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="text-gray-400 font-light mt-2 pl-4 border-l border-swoony-cyan">
                      Inhimillisyys. Emme käytä pelkkiä algoritmeja, vaan koulutettuja asiantuntijoita, jotka näkevät datan taakse.
                    </p>
                  </details>
                  <details className="group border-b border-gray-800 pb-4">
                    <summary className="font-serif text-lg cursor-pointer flex justify-between items-center">
                      Kuinka kauan mätsäämisessä kestää?
                      <span className="text-gray-500 text-sm group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="text-gray-400 font-light mt-2 pl-4 border-l border-swoony-cyan">
                      Hyvää kannattaa odottaa. Tavoitteemme on löytää laadukas ehdokas viikoittain, ei täyttää postilaatikkoasi turhilla ilmoituksilla.
                    </p>
                  </details>
                  <details className="group border-b border-gray-800 pb-4">
                    <summary className="font-serif text-lg cursor-pointer flex justify-between items-center">
                      Miten tietojani käsitellään?
                      <span className="text-gray-500 text-sm group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="text-gray-400 font-light mt-2 pl-4 border-l border-swoony-cyan">
                      Äärimmäisen luottamuksellisesti. Vain asiantuntijamme näkevät profiilisi kokonaisuudessaan työtään varten.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / Contact */}
        <section className="py-20 bg-swoony-cyan text-[#121212] text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="headline text-3xl md:text-4xl mb-6">Pysy Ajantasalla</h2>
            <p className="font-typewriter mb-8 max-w-xl mx-auto">
              Jätä yhteystietosi meille. Emme spammaa. Lähetämme vain rakkauskirjeitä (ja tuotepäivityksiä).
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Sähköpostiosoitteesi..."
                className="flex-1 bg-[#f4f1ea] border-2 border-black px-4 py-3 font-typewriter focus:outline-none focus:border-white"
              />
              <button className="bg-black text-white font-bold uppercase px-8 py-3 border-2 border-black hover:bg-transparent hover:text-black transition-colors">
                Tilaa
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0a0a0a] pt-16 pb-8 border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <div className="headline text-3xl text-white mb-4 offset-print" data-text="Swoony">
                Swoony
              </div>
              <p className="typewriter text-xs text-gray-500">© Swoony Oy | Y-tunnus: 3358461-2</p>
            </div>

            <div className="grid grid-cols-2 gap-8 typewriter text-sm text-gray-400">
              <div className="flex flex-col gap-2">
                <a href="#" className="hover:text-white">
                  Käyttöopas
                </a>
                <a href="#" className="hover:text-white">
                  Käyttöehdot
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <a href="#" className="hover:text-white">
                  Tietosuojaseloste
                </a>
                <a href="#" className="hover:text-white">
                  Asiakaspalvelu
                </a>
              </div>
            </div>

            <div className="text-right">
              <div className="typewriter text-xs text-swoony-red mb-2 uppercase tracking-widest">
                Ota Yhteyttä
              </div>
              <div className="headline text-xl text-white">info@swoony.io</div>
              <div className="typewriter text-sm text-gray-500 mt-1">+358 50 544 3089</div>
            </div>
          </div>

          <div className="text-center mt-16 pt-8 border-t border-gray-900">
            <p className="font-serif italic text-gray-600 text-sm">&quot;Old school is the new cool.&quot;</p>
          </div>
        </footer>
      </div>
    </>
  );
}
