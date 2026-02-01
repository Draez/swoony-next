import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useRouter } from "next/router";
import {
  ArrowLeft,
  Shield,
  FileText,
  Database,
  Users,
  Brain,
  Globe,
  Lock,
  UserX,
  Scale,
  Mail,
  Check,
  Eye,
  Server,
  RefreshCw,
  Gavel
} from 'lucide-react';

interface DataCategory {
  name: string;
  description: string;
}

export default function PrivacyPolicy() {
  const { t } = useTranslation('privacy');
  const router = useRouter();
  const { locale } = router;

  // Helper function to safely handle array translations
  const getTranslationArray = (key: string): string[] => {
    const value = t(key, { returnObjects: true });
    return Array.isArray(value) ? value : [];
  };

  // Helper function to get category objects
  const getCategoryArray = (key: string): DataCategory[] => {
    const value = t(key, { returnObjects: true });
    return Array.isArray(value) ? value : [];
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

          {/* Back Button */}
          <Link
            href="/"
            className="font-quicksand flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('backButton')}
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="gradient-orb gradient-orb-cyan w-[600px] h-[600px] -top-40 -left-40 animate-breathe" />
        <div className="gradient-orb gradient-orb-red w-[400px] h-[400px] top-20 -right-40 animate-breathe" style={{ animationDelay: '2s' }} />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Shield className="w-4 h-4 text-[#00E6D5]" />
              <span className="font-quicksand text-sm font-medium text-white/70">
                {locale === 'sv' ? 'Integritetspolicy' : 'Tietosuoja'}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight">
            <span className="text-white">{locale === 'sv' ? 'Integritets' : 'Tietosuoja'}</span>
            <span className="text-[#00E6D5]">{locale === 'sv' ? 'policy' : 'seloste'}</span>
          </h1>

          <p className="text-lg text-white/50 text-center max-w-2xl mx-auto mb-4">
            {locale === 'sv'
              ? 'Vi värnar om din integritet och hanterar dina personuppgifter ansvarsfullt.'
              : 'Pidämme huolta yksityisyydestäsi ja käsittelemme henkilötietojasi vastuullisesti.'}
          </p>

          <p className="text-sm text-white/30 text-center">
            {locale === 'sv' ? 'Senast uppdaterad: Januari 2026' : 'Päivitetty viimeksi: Tammikuu 2026'}
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 px-6 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Section 1: Introduction */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00E6D5]/20 to-[#00E6D5]/5 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-[#00E6D5]" />
              </div>
              <div>
                <h2 className="font-playfair text-2xl font-bold text-white mb-2">
                  {t('intro.title')}
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-white/60 leading-relaxed">{t('intro.paragraph1')}</p>
              <p className="text-white/60 leading-relaxed">{t('intro.paragraph2')}</p>
            </div>
          </div>

          {/* Section 2: Why We Process Data */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F42C52]/20 to-[#F42C52]/5 flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-[#F42C52]" />
              </div>
              <div>
                <h2 className="font-playfair text-2xl font-bold text-white mb-2">
                  {t('why.title')}
                </h2>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed mb-4">{t('why.purposeIntro')}</p>
            <ul className="space-y-3">
              {getTranslationArray('why.purposes').map((purpose, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#F42C52]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#F42C52]" />
                  </span>
                  <span className="text-white/70">{purpose}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Legal Basis */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h2 className="font-playfair text-2xl font-bold text-white mb-2">
                  {t('legalBasis.title')}
                </h2>
              </div>
            </div>
            <ul className="space-y-3">
              {getTranslationArray('legalBasis.points').map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#D4AF37]" />
                  </span>
                  <span className="text-white/70">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: What Data We Collect */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00E6D5]/20 to-[#00E6D5]/5 flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-[#00E6D5]" />
              </div>
              <div>
                <h2 className="font-playfair text-2xl font-bold text-white mb-2">
                  {t('whatData.title')}
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              {getCategoryArray('whatData.categories').map((category, index) => (
                <div key={index} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <h3 className="font-quicksand text-lg font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-white/60">{category.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Data Retention */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F42C52]/20 to-[#F42C52]/5 flex items-center justify-center flex-shrink-0">
                <Server className="w-6 h-6 text-[#F42C52]" />
              </div>
              <div>
                <h2 className="font-playfair text-2xl font-bold text-white mb-2">
                  {t('retention.title')}
                </h2>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed">{t('retention.content')}</p>
          </div>

          {/* Section 6: Data Sharing */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h2 className="font-playfair text-2xl font-bold text-white mb-2">
                  {t('sharing.title')}
                </h2>
              </div>
            </div>
            <div className="bg-[#00E6D5]/10 border border-[#00E6D5]/20 rounded-2xl p-4 mb-6">
              <p className="text-[#00E6D5] font-medium text-sm">{t('sharing.intro')}</p>
            </div>
            <div className="space-y-4">
              {getCategoryArray('sharing.categories').map((category, index) => (
                <div key={index} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <h3 className="font-quicksand text-lg font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-white/60">{category.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 7: AI Usage - Highlighted */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 mb-8 relative overflow-hidden">
            {/* Highlight border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00E6D5]/20 via-transparent to-[#00E6D5]/20 rounded-3xl" />
            <div className="absolute inset-[1px] bg-[#0f0f0f]/95 rounded-3xl" />

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00E6D5]/20 to-[#00E6D5]/5 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-[#00E6D5]" />
                </div>
                <div>
                  <h2 className="font-playfair text-2xl font-bold text-white mb-2">
                    {t('aiUsage.title')}
                  </h2>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed mb-8">{t('aiUsage.intro')}</p>

              {/* What AI is used for */}
              <div className="mb-8">
                <h3 className="font-quicksand text-lg font-semibold text-white mb-3">{t('aiUsage.whatAiUsedFor.title')}</h3>
                <ul className="space-y-3">
                  {getTranslationArray('aiUsage.whatAiUsedFor.points').map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#00E6D5]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#00E6D5]" />
                      </span>
                      <span className="text-white/70">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What data AI processes */}
              <div className="mb-8">
                <h3 className="font-quicksand text-lg font-semibold text-white mb-3">{t('aiUsage.whatDataAiProcesses.title')}</h3>
                <p className="text-white/60 leading-relaxed mb-4">{t('aiUsage.whatDataAiProcesses.intro')}</p>
                <ul className="space-y-2 mb-6">
                  {getTranslationArray('aiUsage.whatDataAiProcesses.included').map((point, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#00E6D5]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#00E6D5]" />
                      </span>
                      <span className="text-white/60 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-white/70 font-medium mb-3">{t('aiUsage.whatDataAiProcesses.notIncludedTitle')}</p>
                <ul className="space-y-2">
                  {getTranslationArray('aiUsage.whatDataAiProcesses.notIncluded').map((point, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#F42C52]/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#F42C52] text-xs">✕</span>
                      </span>
                      <span className="text-white/60 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How we use AI */}
              <div className="mb-8">
                <h3 className="font-quicksand text-lg font-semibold text-white mb-3">{t('aiUsage.howWeUse.title')}</h3>
                <ul className="space-y-2">
                  {getTranslationArray('aiUsage.howWeUse.points').map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#00E6D5]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#00E6D5]" />
                      </span>
                      <span className="text-white/60 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What we don't do */}
              <div>
                <h3 className="font-quicksand text-lg font-semibold text-white mb-3">{t('aiUsage.whatWeDontDo.title')}</h3>
                <ul className="space-y-2">
                  {getTranslationArray('aiUsage.whatWeDontDo.points').map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#F42C52]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#F42C52] text-xs">✕</span>
                      </span>
                      <span className="text-white/60 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 8: International Transfers */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F42C52]/20 to-[#F42C52]/5 flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-[#F42C52]" />
              </div>
              <div>
                <h2 className="font-playfair text-2xl font-bold text-white mb-2">
                  {t('international.title')}
                </h2>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed">{t('international.content')}</p>
          </div>

          {/* Section 9: Security */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00E6D5]/20 to-[#00E6D5]/5 flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-[#00E6D5]" />
              </div>
              <div>
                <h2 className="font-playfair text-2xl font-bold text-white mb-2">
                  {t('security.title')}
                </h2>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed">{t('security.content')}</p>
          </div>

          {/* Section 10: Minors */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center flex-shrink-0">
                <UserX className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h2 className="font-playfair text-2xl font-bold text-white mb-2">
                  {t('minors.title')}
                </h2>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed">{t('minors.content')}</p>
          </div>

          {/* Section 11: Your Rights */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F42C52]/20 to-[#F42C52]/5 flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-[#F42C52]" />
              </div>
              <div>
                <h2 className="font-playfair text-2xl font-bold text-white mb-2">
                  {t('rights.title')}
                </h2>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed mb-4">{t('rights.intro')}</p>
            <ul className="space-y-3 mb-6">
              {getTranslationArray('rights.list').map((right, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#F42C52]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#F42C52]" />
                  </span>
                  <span className="text-white/70">{right}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/60 leading-relaxed">{t('rights.exercising')}</p>
          </div>


          {/* Section 13: Changes */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h2 className="font-playfair text-2xl font-bold text-white mb-2">
                  {t('changes.title')}
                </h2>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed">{t('changes.content')}</p>
          </div>

          {/* Section 14: Contact */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F42C52]/20 to-[#F42C52]/5 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#F42C52]" />
              </div>
              <div>
                <h2 className="font-playfair text-2xl font-bold text-white mb-2">
                  {t('contact.title')}
                </h2>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed">
              {t('contact.content')}{' '}
              <Link href={`mailto:${t('contact.email')}`} className="text-[#F42C52] hover:underline">
                {t('contact.email')}
              </Link>
            </p>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Link
              href="/"
              className="font-quicksand inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F42C52] text-white font-semibold hover:bg-[#d91e42] transition-all duration-300 hover:shadow-lg hover:shadow-[#F42C52]/20"
            >
              <ArrowLeft className="w-5 h-5" />
              {t('backButton')}
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
      ...(await serverSideTranslations(locale || 'fi', ['common', 'privacy'])),
    },
  };
};
