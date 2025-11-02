import { Quicksand } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import { FormEvent, useState } from 'react';

interface WaitlistFormState {
    email: string;
    isSubmitting: boolean;
    hasError: boolean;
}

function isValidEmail(email: string): boolean {
    if (!email) return false;
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return pattern.test(email);
}


const quickSand = Quicksand({
    weight: ["700"],
    style: ["normal"],
    subsets: ["latin"],
});

export default function WaitlistPage() {
    const [formState, setFormState] = useState<WaitlistFormState>({ email: '', isSubmitting: false, hasError: false });


    function handleChange(value: string) {
        setFormState(prev => ({ ...prev, email: value, hasError: false }));
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        if (!isValidEmail(formState.email)) {
            event.preventDefault();
            setFormState(prev => ({ ...prev, hasError: true }));
            return;
        }
        setFormState(prev => ({ ...prev, isSubmitting: true }));
        // Let the form submit to Netlify - don't prevent default
    }

    return (
        <>
            <Head>
                <title>Swoony – Waitlist</title>
                <meta name="description" content="Swoony is a curated matchmaking service. Join the waitlist to be the first to know when we launch." />
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <main className="min-h-screen">
                <section className="relative isolate overflow-hidden min-h-screen">
                    {/* Background image + overlay (same as homepage hero) */}
                    <div className="absolute inset-0 w-full h-full -z-10">
                        <Image
                            src="/retro_couple.jpg"
                            alt="Background"
                            fill
                            className="object-cover brightness-50"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>
                    <div className="flex items-center gap-2 mt-8 justify-center">
                        <Image
                            src="/swoony.svg"
                            alt="Swoony: Dating app"
                            width={32}
                            height={24}
                            priority
                        />
                        <div
                            className={`${quickSand.className} text-xl font-semibold text-white uppercase tracking-wide`}
                        >
                            Swoony
                        </div>

                    </div>

                    <div className="relative h-full">
                        <div className="pb-16 flex flex-wrap items-center p-8 md:py-16">
                            <div className="lg:w-full xl:w-5/6 2xl:w-4/6 container mx-auto flex flex-col md:flex-row items-center justify-between">
                                <div className="w-full md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
                                    <div className="text-center md:text-left">
                                        <p className="inline-flex items-center rounded-full bg-[#00E6D5]/20 px-3 py-1 text-sm font-medium text-[#00E6D5] ring-1 ring-inset ring-[#00E6D5]/30">Coming soon</p>
                                        <h1 className={`${quickSand.className} mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4`}>New Way of Dating</h1>
                                        <p className="mt-2 text-base leading-7 text-white">Swoony is the first matchmaking app where human experts handpick your match</p>
                                        <p className="mt-2 text-base leading-7 italic text-white">And the best part? One approved match starts at only $29,99</p>
                                    </div>

                                    <form onSubmit={handleSubmit}
                                        name="contact"
                                        method="POST"
                                        action="/?success=true"
                                        data-netlify="true"
                                        className="mx-auto md:mx-0 mt-10 flex max-w-md flex-col sm:flex-row items-center gap-3">
                                        <input type="hidden" name="form-name" value="contact" />
                                        <label htmlFor="email" className="sr-only">Email address</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            value={formState.email}
                                            onChange={e => handleChange(e.target.value)}
                                            placeholder="you@example.com"
                                            className={[
                                                'min-w-0 w-full bg-transparent p-3 rounded-xl border',
                                                formState.hasError ? 'border-red-300 placeholder:text-red-300' : 'border-white placeholder-white',
                                                'text-white focus:outline-none focus:border-blue-300 sm:text-sm sm:leading-6'
                                            ].join(' ')}
                                        />
                                        <button
                                            type="submit"
                                            disabled={formState.isSubmitting || !isValidEmail(formState.email)}
                                            className="flex-none rounded-md px-4 h-12 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 hover:brightness-110"
                                            style={{ backgroundColor: '#00E6D5' }}
                                        >
                                            {formState.isSubmitting ? 'Submitting…' : 'Join the Waitlist Now'}
                                        </button>
                                    </form>

                                    {formState.hasError ? (
                                        <p className="mx-auto md:mx-0 mt-3 max-w-md text-sm text-red-300">Please enter a valid email address.</p>
                                    ) : null}

                                    <p className="mx-auto md:mx-0 mt-6 max-w-md text-xs text-white">We&apos;ll only email you relevant information — no spam, just love.</p>
                                </div>
                                <div className="w-full md:w-1/2 order-1 md:order-2 pb-6">
                                    <Image
                                        className="h-auto w-full object-contain max-h-[600px] sm:max-h-[500px] md:max-h-[624px] rounded-xl mx-auto md:ml-auto"
                                        width="1080"
                                        height="1080"
                                        src="/match_eng2.svg"
                                        alt="Swoony app mockup"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}


