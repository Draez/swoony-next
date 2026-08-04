import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WEB_APP_URL = "https://web-swoony.netlify.app/";

export default function BlogHeader() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F42C52] to-[#00E6D5] p-[1px]">
                        <div className="w-full h-full rounded-xl bg-[#0a0a0a] flex items-center justify-center">
                            <Image src="/swoony.svg" alt="Swoony" width={20} height={15} priority />
                        </div>
                    </div>
                    <span className="font-quicksand uppercase text-xl font-bold text-white group-hover:text-main-red transition-colors">
                        Swoony
                    </span>
                </Link>

                {/* Links + CTA */}
                <div className="flex items-center gap-6 font-quicksand text-sm font-medium">
                    <Link href="/" className="hidden sm:block text-white/60 hover:text-white transition-colors duration-300">
                        Etusivu
                    </Link>
                    <Link href="/blog" className="hidden sm:block text-white/60 hover:text-white transition-colors duration-300">
                        Blogi
                    </Link>
                    <Link
                        href={WEB_APP_URL}
                        target="_blank"
                        className="px-5 py-2.5 rounded-full bg-main-red text-white font-semibold hover:bg-[#d91e42] transition-all duration-300 hover:shadow-lg hover:shadow-main-red/20"
                    >
                        Kirjaudu
                    </Link>
                </div>
            </div>
        </nav>
    );
}
