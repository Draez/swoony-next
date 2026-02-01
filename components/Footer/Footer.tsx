import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Heart, Instagram, Facebook, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer: FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;

  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F42C52] to-[#00E6D5] p-[1px]">
                <div className="w-full h-full rounded-xl bg-[#0a0a0a] flex items-center justify-center">
                  <Image src="/swoony.svg" alt="Swoony" width={20} height={15} />
                </div>
              </div>
              <span className="font-playfair text-xl font-bold text-white group-hover:text-[#F42C52] transition-colors">
                Swoony
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {locale === 'sv'
                ? 'AI-driven matchmaking som kombinerar visuell analys med personlighetsanalys för att hitta din perfekta match.'
                : 'Tekoälypohjainen matchmaking, joka yhdistää visuaalisen analyysin persoonallisuusanalyysiin löytääkseen täydellisen mätsisi.'}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <Link
                href="https://www.instagram.com/swoonyofficial/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F42C52]/20 transition-colors group"
              >
                <Instagram className="w-4 h-4 text-white/50 group-hover:text-[#F42C52] transition-colors" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100095309208001"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F42C52]/20 transition-colors group"
              >
                <Facebook className="w-4 h-4 text-white/50 group-hover:text-[#F42C52] transition-colors" />
              </Link>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-quicksand text-sm font-bold uppercase tracking-wider text-white mb-6">
              {locale === 'sv' ? 'Länkar' : 'Linkit'}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="#what-is-swoony" className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  {locale === 'sv' ? 'Om Swoony' : 'Tietoa Swoonysta'}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  {locale === 'sv' ? 'Priser' : 'Hinnat'}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  FAQ
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/swoony_guide.pdf" target="_blank" className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  {locale === 'sv' ? 'Användarguide' : 'Käyttöopas'}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-quicksand text-sm font-bold uppercase tracking-wider text-white mb-6">
              {locale === 'sv' ? 'Juridiskt' : 'Lakiasiat'}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/terms" className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  {t('footer.terms')}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/privacy_policy" className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  {t('footer.privacy')}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-quicksand text-sm font-bold uppercase tracking-wider text-white mb-6">
              {locale === 'sv' ? 'Kontakt' : 'Yhteystiedot'}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="mailto:info@swoony.io" className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#F42C52]" />
                  info@swoony.io
                </Link>
              </li>
              <li>
                <Link href="tel:+358505443089" className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#F42C52]" />
                  +358 50 544 3089
                </Link>
              </li>
            </ul>

            {/* App Store Buttons */}
            <div className="flex flex-col gap-3 mt-8">
              <Link
                href="https://apps.apple.com/app/swoony/id6499217523"
                target="_blank"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <Image src="/applestore.svg" alt="Download on App Store" width={140} height={42} />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=fi.swoonymatchmaking.app"
                target="_blank"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <Image src="/google-play.svg" alt="Get it on Google Play" width={140} height={42} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/30 text-sm">
            © {new Date().getFullYear()} Swoony Oy. {locale === 'sv' ? 'Alla rättigheter förbehållna.' : 'Kaikki oikeudet pidätetään.'}
          </div>
          <div className="text-white/30 text-sm flex items-center gap-1">
            {locale === 'sv' ? 'FO-nummer' : 'Y-tunnus'}: 3358461-2
          </div>
          <div className="text-white/30 text-sm flex items-center gap-1">
            {locale === 'sv' ? 'Gjord med' : 'Tehty'} <Heart className="w-3 h-3 text-[#F42C52] fill-[#F42C52]" /> {locale === 'sv' ? 'i Finland' : 'Suomessa'}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
