import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useRouter } from "next/router";
import { useState } from 'react';
import {
    ChevronDown,
    ArrowLeft,
    FileText,
    Shield,
    CreditCard,
    AlertCircle,
    MessageCircle,
    Phone,
    Mail,
    Sparkles,
    Clock,
    Users,
    CheckCircle2,
    XCircle,
    Bot,
    Crown
} from 'lucide-react';

export default function Terms() {
    const { t } = useTranslation('terms');
    const router = useRouter();
    const { locale } = router;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [newTermsOpen, setNewTermsOpen] = useState(true);
    const [oldTermsOpen, setOldTermsOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    // Helper function to safely handle array translations
    const getTranslationArray = (key: string): string[] => {
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
                <div className="gradient-orb gradient-orb-red w-[600px] h-[600px] -top-40 -right-40 animate-breathe" />
                <div className="gradient-orb gradient-orb-cyan w-[400px] h-[400px] top-20 -left-40 animate-breathe" style={{ animationDelay: '2s' }} />

                <div className="max-w-4xl mx-auto relative z-10">
                    {/* Badge */}
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                            <FileText className="w-4 h-4 text-[#00E6D5]" />
                            <span className="font-quicksand text-sm font-medium text-white/70">
                                {locale === 'sv' ? 'Juridiskt dokument' : 'Lakiasiakirja'}
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight">
                        <span className="text-white">{locale === 'sv' ? 'Användar' : 'Käyttö'}</span>
                        <span className="text-[#F42C52]">{locale === 'sv' ? 'villkor' : 'ehdot'}</span>
                    </h1>

                    <p className="text-lg text-white/50 text-center max-w-2xl mx-auto mb-4">
                        {t('intro')}
                    </p>

                    <p className="text-sm text-white/30 text-center">
                        {t('lastUpdated')}
                    </p>
                </div>
            </section>

            {/* Terms Content */}
            <section className="py-16 px-6 relative">
                <div className="max-w-4xl mx-auto relative z-10">

                    {/* NEW TERMS - Collapsible Section */}
                    <div className="mb-6">
                        <button
                            onClick={() => setNewTermsOpen(!newTermsOpen)}
                            className="w-full glass-card rounded-2xl p-6 flex items-center justify-between group hover:bg-white/5 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00E6D5]/20 to-[#00E6D5]/5 flex items-center justify-center">
                                    <Bot className="w-6 h-6 text-[#00E6D5]" />
                                </div>
                                <div className="text-left">
                                    <h2 className="font-playfair text-xl font-bold text-white">
                                        {t('newTermsLabel')}
                                    </h2>
                                    <p className="text-sm text-white/50">AI-matchmaking</p>
                                </div>
                            </div>
                            <ChevronDown className={`w-6 h-6 text-white/50 transition-transform duration-300 ${newTermsOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* New Terms Content */}
                        <div className={`overflow-hidden transition-all duration-500 ${newTermsOpen ? 'max-h-[10000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                            <div className="space-y-8">

                                {/* Commitment */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F42C52]/20 to-[#F42C52]/5 flex items-center justify-center flex-shrink-0">
                                            <Shield className="w-6 h-6 text-[#F42C52]" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                                                {t('newTerms.commitment.title')}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-white/60 leading-relaxed mb-6">
                                        {t('newTerms.commitment.intro')}
                                    </p>
                                    <ul className="space-y-3">
                                        {getTranslationArray('newTerms.commitment.points').map((point, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="w-6 h-6 rounded-full bg-[#F42C52]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <span className="text-xs font-bold text-[#F42C52]">{index + 1}</span>
                                                </span>
                                                <span className="text-white/70">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Consents */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00E6D5]/20 to-[#00E6D5]/5 flex items-center justify-center flex-shrink-0">
                                            <FileText className="w-6 h-6 text-[#00E6D5]" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                                                {t('newTerms.consents.title')}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-white/60 leading-relaxed mb-6">
                                        {t('newTerms.consents.intro')}
                                    </p>
                                    <ul className="space-y-3">
                                        {getTranslationArray('newTerms.consents.points').map((point, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="w-6 h-6 rounded-full bg-[#00E6D5]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <span className="text-xs font-bold text-[#00E6D5]">{index + 1}</span>
                                                </span>
                                                <span className="text-white/70">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Restrictions */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center flex-shrink-0">
                                            <AlertCircle className="w-6 h-6 text-[#D4AF37]" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                                                {t('newTerms.restrictions.title')}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-white/60 leading-relaxed mb-6">
                                        {t('newTerms.restrictions.intro')}
                                    </p>
                                    <ul className="space-y-3">
                                        {getTranslationArray('newTerms.restrictions.points').map((point, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <span className="text-xs font-bold text-[#D4AF37]">{index + 1}</span>
                                                </span>
                                                <span className="text-white/70">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Service Description */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00E6D5]/20 to-[#00E6D5]/5 flex items-center justify-center flex-shrink-0">
                                            <Sparkles className="w-6 h-6 text-[#00E6D5]" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                                                {t('newTerms.serviceDescription.title')}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Swoony Service */}
                                    <div className="mb-8">
                                        <h4 className="font-quicksand font-bold text-white mb-3">{t('newTerms.serviceDescription.swoonyService.title')}</h4>
                                        <p className="text-white/60 leading-relaxed">{t('newTerms.serviceDescription.swoonyService.content')}</p>
                                    </div>

                                    {/* AI Matchmaker */}
                                    <div className="mb-8">
                                        <h4 className="font-quicksand font-bold text-white mb-3">{t('newTerms.serviceDescription.aiMatchmaker.title')}</h4>
                                        <ul className="space-y-2">
                                            {getTranslationArray('newTerms.serviceDescription.aiMatchmaker.points').map((point, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-[#00E6D5] flex-shrink-0 mt-0.5" />
                                                    <span className="text-white/70">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Responding */}
                                    <div className="mb-8">
                                        <h4 className="font-quicksand font-bold text-white mb-3">{t('newTerms.serviceDescription.responding.title')}</h4>
                                        <p className="text-white/60 leading-relaxed mb-4">{t('newTerms.serviceDescription.responding.content')}</p>
                                        <ul className="space-y-2">
                                            {getTranslationArray('newTerms.serviceDescription.responding.consequences').map((point, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <AlertCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                                                    <span className="text-white/70">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Upcoming VIP */}
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                                        <h4 className="font-quicksand font-bold text-white/70 mb-3 flex items-center gap-2">
                                            <Clock className="w-5 h-5" />
                                            {t('newTerms.serviceDescription.upcoming.title')}
                                        </h4>
                                        <p className="text-white/50 leading-relaxed">{t('newTerms.serviceDescription.upcoming.content')}</p>
                                    </div>
                                </div>

                                {/* Payment */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F42C52]/20 to-[#F42C52]/5 flex items-center justify-center flex-shrink-0">
                                            <CreditCard className="w-6 h-6 text-[#F42C52]" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                                                {t('newTerms.payment.title')}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* App Stores */}
                                    <div className="mb-8">
                                        <h4 className="font-quicksand font-bold text-white mb-3">{t('newTerms.payment.appStores.title')}</h4>
                                        <p className="text-white/60 leading-relaxed mb-2">{t('newTerms.payment.appStores.content')}</p>
                                        <p className="text-white/50 text-sm italic">{t('newTerms.payment.appStores.note')}</p>
                                    </div>

                                    {/* Subscriptions */}
                                    <div className="mb-8">
                                        <h4 className="font-quicksand font-bold text-white mb-3">{t('newTerms.payment.subscriptions.title')}</h4>
                                        <ul className="space-y-2">
                                            {getTranslationArray('newTerms.payment.subscriptions.points').map((point, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-[#00E6D5] flex-shrink-0 mt-0.5" />
                                                    <span className="text-white/70">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Cancellation */}
                                    <div className="mb-8">
                                        <h4 className="font-quicksand font-bold text-white mb-3">{t('newTerms.payment.cancellation.title')}</h4>
                                        <ul className="space-y-2">
                                            {getTranslationArray('newTerms.payment.cancellation.points').map((point, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <span className="text-xs font-bold text-white/50">{index + 1}</span>
                                                    </span>
                                                    <span className="text-white/70">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Withdrawal Right */}
                                    <div className="p-6 rounded-2xl bg-[#F42C52]/5 border border-[#F42C52]/20">
                                        <h4 className="font-quicksand font-bold text-white mb-3">{t('newTerms.payment.withdrawalRight.title')}</h4>
                                        <p className="text-white/60 leading-relaxed mb-2">{t('newTerms.payment.withdrawalRight.content')}</p>
                                        <p className="text-white/50 text-sm italic">{t('newTerms.payment.withdrawalRight.note')}</p>
                                    </div>
                                </div>

                                {/* Guarantees */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center flex-shrink-0">
                                            <Shield className="w-6 h-6 text-[#D4AF37]" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                                                {t('newTerms.guarantees.title')}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Legacy */}
                                    <div className="mb-8 p-6 rounded-2xl bg-white/5 border border-white/10">
                                        <h4 className="font-quicksand font-bold text-white mb-3">{t('newTerms.guarantees.legacy.title')}</h4>
                                        <p className="text-white/60 leading-relaxed mb-4">{t('newTerms.guarantees.legacy.content')}</p>
                                        <ul className="space-y-2 mb-4">
                                            {getTranslationArray('newTerms.guarantees.legacy.points').map((point, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-[#00E6D5] flex-shrink-0 mt-0.5" />
                                                    <span className="text-white/70">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-white/50 text-sm italic">{t('newTerms.guarantees.legacy.note')}</p>
                                    </div>

                                    {/* AI Matchmaking Guarantee */}
                                    <div className="mb-8">
                                        <h4 className="font-quicksand font-bold text-[#00E6D5] mb-4 text-lg">{t('newTerms.guarantees.aiMatchmaking.title')}</h4>

                                        <div className="mb-6">
                                            <h5 className="font-quicksand font-semibold text-white mb-2">{t('newTerms.guarantees.aiMatchmaking.nature.title')}</h5>
                                            <p className="text-white/60 leading-relaxed">{t('newTerms.guarantees.aiMatchmaking.nature.content')}</p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                                            <div className="p-4 rounded-xl bg-[#00E6D5]/5 border border-[#00E6D5]/20">
                                                <h5 className="font-quicksand font-semibold text-[#00E6D5] mb-3 flex items-center gap-2">
                                                    <CheckCircle2 className="w-5 h-5" />
                                                    {t('newTerms.guarantees.aiMatchmaking.weGuarantee.title')}
                                                </h5>
                                                <ul className="space-y-2">
                                                    {getTranslationArray('newTerms.guarantees.aiMatchmaking.weGuarantee.points').map((point, index) => (
                                                        <li key={index} className="text-white/70 text-sm flex items-start gap-2">
                                                            <span className="text-[#00E6D5]">•</span>
                                                            {point}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="p-4 rounded-xl bg-[#F42C52]/5 border border-[#F42C52]/20">
                                                <h5 className="font-quicksand font-semibold text-[#F42C52] mb-3 flex items-center gap-2">
                                                    <XCircle className="w-5 h-5" />
                                                    {t('newTerms.guarantees.aiMatchmaking.weDontGuarantee.title')}
                                                </h5>
                                                <ul className="space-y-2">
                                                    {getTranslationArray('newTerms.guarantees.aiMatchmaking.weDontGuarantee.points').map((point, index) => (
                                                        <li key={index} className="text-white/70 text-sm flex items-start gap-2">
                                                            <span className="text-[#F42C52]">•</span>
                                                            {point}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                            <h5 className="font-quicksand font-semibold text-white mb-2">{t('newTerms.guarantees.aiMatchmaking.noMatches.title')}</h5>
                                            <p className="text-white/60 leading-relaxed mb-3">{t('newTerms.guarantees.aiMatchmaking.noMatches.content')}</p>
                                            <ul className="space-y-1">
                                                {getTranslationArray('newTerms.guarantees.aiMatchmaking.noMatches.reasons').map((reason, index) => (
                                                    <li key={index} className="text-white/50 text-sm flex items-start gap-2">
                                                        <span className="text-white/30">•</span>
                                                        {reason}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                {/* Changes */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00E6D5]/20 to-[#00E6D5]/5 flex items-center justify-center flex-shrink-0">
                                            <FileText className="w-6 h-6 text-[#00E6D5]" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                                                {t('newTerms.changes.title')}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-white/60 leading-relaxed">{t('newTerms.changes.content')}</p>
                                </div>

                                {/* Liability */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F42C52]/20 to-[#F42C52]/5 flex items-center justify-center flex-shrink-0">
                                            <AlertCircle className="w-6 h-6 text-[#F42C52]" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                                                {t('newTerms.liability.title')}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-white/60 leading-relaxed mb-6">{t('newTerms.liability.intro')}</p>

                                    <div className="p-4 rounded-xl bg-[#F42C52]/5 border border-[#F42C52]/20 mb-4">
                                        <h4 className="font-quicksand font-semibold text-white mb-3">{t('newTerms.liability.aiLimitations.title')}</h4>
                                        <ul className="space-y-2">
                                            {getTranslationArray('newTerms.liability.aiLimitations.points').map((point, index) => (
                                                <li key={index} className="text-white/60 text-sm flex items-start gap-2">
                                                    <AlertCircle className="w-4 h-4 text-[#F42C52] flex-shrink-0 mt-0.5" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <p className="text-white/60 leading-relaxed">{t('newTerms.liability.report')}</p>
                                </div>

                                {/* Communication */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00E6D5]/20 to-[#00E6D5]/5 flex items-center justify-center flex-shrink-0">
                                            <MessageCircle className="w-6 h-6 text-[#00E6D5]" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                                                {t('newTerms.communication.title')}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-white/60 leading-relaxed mb-4">{t('newTerms.communication.intro')}</p>
                                    <ul className="space-y-2 mb-4">
                                        {getTranslationArray('newTerms.communication.examples').map((example, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="text-[#00E6D5]">•</span>
                                                <span className="text-white/70">{example}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-white/50 text-sm italic">{t('newTerms.communication.note')}</p>
                                </div>

                                {/* Safety */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center flex-shrink-0">
                                            <Shield className="w-6 h-6 text-[#D4AF37]" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                                                {t('newTerms.safety.title')}
                                            </h3>
                                        </div>
                                    </div>
                                    <ul className="space-y-3">
                                        {getTranslationArray('newTerms.safety.points').map((point, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <Shield className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                                                <span className="text-white/70">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Contact */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F42C52]/20 to-[#F42C52]/5 flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-[#F42C52]" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                                                {t('newTerms.contact.title')}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-white/70">{t('newTerms.contact.company')}</p>
                                        <div className="flex items-center gap-3 text-white/60">
                                            <Mail className="w-5 h-5 text-[#F42C52]" />
                                            <span>{t('newTerms.contact.email')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* OLD TERMS - Collapsible Section */}
                    <div className="mb-8">
                        <button
                            onClick={() => setOldTermsOpen(!oldTermsOpen)}
                            className="w-full glass-card rounded-2xl p-6 flex items-center justify-between group hover:bg-white/5 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                                    <Users className="w-6 h-6 text-white/50" />
                                </div>
                                <div className="text-left">
                                    <h2 className="font-playfair text-xl font-bold text-white/70">
                                        {t('oldTermsLabel')}
                                    </h2>
                                    <p className="text-sm text-white/40">{locale === 'sv' ? 'Mänsklig matchmaking' : 'Ihmis-matchmaking'}</p>
                                </div>
                            </div>
                            <ChevronDown className={`w-6 h-6 text-white/50 transition-transform duration-300 ${oldTermsOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Old Terms Content */}
                        <div className={`overflow-hidden transition-all duration-500 ${oldTermsOpen ? 'max-h-[10000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                            <div className="space-y-8 opacity-80">

                                {/* Commitment */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                                            <Shield className="w-6 h-6 text-white/50" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white/80 mb-2">
                                                {t('oldTerms.commitment.title')}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-white/50 leading-relaxed mb-6">
                                        {t('oldTerms.commitment.intro')}
                                    </p>
                                    <ul className="space-y-3">
                                        {getTranslationArray('oldTerms.commitment.points').map((point, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <span className="text-xs font-bold text-white/40">{index + 1}</span>
                                                </span>
                                                <span className="text-white/60">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Consents */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                                            <FileText className="w-6 h-6 text-white/50" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white/80 mb-2">
                                                {t('oldTerms.consents.title')}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-white/50 leading-relaxed mb-6">
                                        {t('oldTerms.consents.intro')}
                                    </p>
                                    <ul className="space-y-3">
                                        {getTranslationArray('oldTerms.consents.points').map((point, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <span className="text-xs font-bold text-white/40">{index + 1}</span>
                                                </span>
                                                <span className="text-white/60">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Restrictions */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                                            <AlertCircle className="w-6 h-6 text-white/50" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white/80 mb-2">
                                                {t('oldTerms.restrictions.title')}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-white/50 leading-relaxed mb-6">
                                        {t('oldTerms.restrictions.intro')}
                                    </p>
                                    <ul className="space-y-3">
                                        {getTranslationArray('oldTerms.restrictions.points').map((point, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <span className="text-xs font-bold text-white/40">{index + 1}</span>
                                                </span>
                                                <span className="text-white/60">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Payment */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                                            <CreditCard className="w-6 h-6 text-white/50" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white/80 mb-2">
                                                {t('oldTerms.payment.title')}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        {getTranslationArray('oldTerms.payment.paragraphs').map((paragraph, index) => (
                                            <p key={index} className="text-white/50 leading-relaxed">{paragraph}</p>
                                        ))}
                                    </div>
                                </div>

                                {/* Satisfaction Guarantee */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10 border border-[#D4AF37]/20">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                                            <Shield className="w-6 h-6 text-[#D4AF37]/70" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white/80 mb-2">
                                                {t('oldTerms.satisfaction_guarantee.title')}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        {getTranslationArray('oldTerms.satisfaction_guarantee.paragraphs').map((paragraph, index) => (
                                            <p key={index} className="text-white/50 leading-relaxed">{paragraph}</p>
                                        ))}
                                    </div>
                                </div>

                                {/* Rematch */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                                            <Users className="w-6 h-6 text-white/50" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white/80 mb-2">
                                                {t('oldTerms.rematch.title')}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        {getTranslationArray('oldTerms.rematch.paragraphs').map((paragraph, index) => (
                                            <p key={index} className="text-white/50 leading-relaxed">{paragraph}</p>
                                        ))}
                                    </div>
                                </div>

                                {/* Changes */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                                            <FileText className="w-6 h-6 text-white/50" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white/80 mb-2">
                                                {t('oldTerms.changes.title')}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-white/50 leading-relaxed">{t('oldTerms.changes.content')}</p>
                                </div>

                                {/* Liability */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                                            <AlertCircle className="w-6 h-6 text-white/50" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white/80 mb-2">
                                                {t('oldTerms.liability.title')}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-white/50 leading-relaxed">{t('oldTerms.liability.content')}</p>
                                </div>

                                {/* Safety */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                                            <Shield className="w-6 h-6 text-white/50" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white/80 mb-2">
                                                {t('oldTerms.safety.title')}
                                            </h3>
                                        </div>
                                    </div>
                                    <ul className="space-y-3">
                                        {getTranslationArray('oldTerms.safety.points').map((point, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <Shield className="w-5 h-5 text-white/30 flex-shrink-0 mt-0.5" />
                                                <span className="text-white/60">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Contact */}
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-white/50" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-2xl font-bold text-white/80 mb-2">
                                                {t('oldTerms.contact.title')}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-white/50">
                                            <Mail className="w-5 h-5" />
                                            <span>{t('oldTerms.contact.email')}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-white/50">
                                            <Phone className="w-5 h-5" />
                                            <span>{t('oldTerms.contact.phone')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
            ...(await serverSideTranslations(locale || 'fi', ['common', 'terms'])),
        },
    };
};
