import { trackLead } from '@/lib/fb';
import Head from 'next/head';
import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { quickSand } from "@/lib/fonts";

interface WaitlistFormState {
    email: string;
    isSubmitting: boolean;
    hasError: boolean;
    isSuccess: boolean;
}

function isValidEmail(email: string): boolean {
    if (!email) return false;
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return pattern.test(email);
}

export default function WaitlistPage() {
    const [formState, setFormState] = useState<WaitlistFormState>({ email: '', isSubmitting: false, hasError: false, isSuccess: false });


    function handleChange(value: string) {
        setFormState(prev => ({ ...prev, email: value, hasError: false, isSuccess: false }));
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!isValidEmail(formState.email)) {
            setFormState(prev => ({ ...prev, hasError: true }));
            return;
        }

        setFormState(prev => ({ ...prev, isSubmitting: true, hasError: false }));

        try {
            const formData = new FormData(event.currentTarget);

            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData as any).toString(),
            });

            if (response.ok) {
                trackLead({
                    email: formState.email,
                    name: '',
                });
                setFormState(prev => ({ ...prev, email: '', isSubmitting: false, isSuccess: true }));
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            setFormState(prev => ({ ...prev, hasError: true, isSubmitting: false }));
        }
    }

    return (
        <>
            <Head>
                <title>Swoony – Waitlist</title>
                <meta name="description" content="Swoony is a curated matchmaking service. Join the waitlist to be the first to know when we launch." />
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <main className="min-h-screen">
                <section className="bg-black relative isolate overflow-hidden min-h-screen">
                    {/* Background image + overlay (same as homepage hero) */}

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
                                        <p className="inline-flex items-center rounded-full bg-[#00E6D5]/20 px-3 py-1 text-sm font-medium text-[#00E6D5] ring-1 ring-inset ring-[#00E6D5]/30">Launching soon</p>
                                        <p className="mt-2 mb-12 text-base leading-7 text-white">Swoony’s human matchmakers personally introduce you to compatible singles. Join the waitlist and get notified about our launch.</p>
                                        <h1 className={`${quickSand.className} mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4`}>Get notified when we launch</h1>
                                    </div>

                                    <form onSubmit={handleSubmit}
                                        name="contact"
                                        method="POST"
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
                                                'bg-white text-black',
                                                'min-w-0 w-full bg-transparent p-3 rounded-xl border',
                                                formState.hasError ? 'border-red-300 placeholder:text-red-300' : 'placeholder-black',
                                                'text-black focus:outline-none focus:border-blue-300 sm:text-sm sm:leading-6'
                                            ].join(' ')}
                                        />
                                        <button
                                            type="submit"
                                            disabled={formState.isSubmitting || !isValidEmail(formState.email)}
                                            className="w-full sm:w-auto flex-none rounded-md px-4 h-12 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 hover:brightness-110"
                                            style={{ backgroundColor: '#00E6D5' }}
                                        >
                                            {formState.isSubmitting ? 'Submitting…' : 'Notify me!'}
                                        </button>
                                    </form>

                                    {formState.hasError ? (
                                        <p className="mx-auto md:mx-0 mt-3 max-w-md text-sm text-red-300">Please enter a valid email address.</p>
                                    ) : null}
                                    {formState.isSuccess ? (
                                        <p className="mx-auto md:mx-0 mt-3 max-w-md text-sm text-[#00E6D5]">Thank you! You&apos;ve been added to the waitlist.</p>
                                    ) : null}

                                    <p className="mx-auto md:mx-0 mt-6 max-w-md text-xs text-gray">We&apos;ll only email you relevant information — no spam, just love.</p>
                                </div>
                                <div className="w-full md:w-1/2 order-1 md:order-2 pb-6 hidden sm:block">
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


