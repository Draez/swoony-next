import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { quickSand } from "@/lib/fonts";

export default function Gift() {
    return <div className="p-8">

        <Link href="/">
            <div className="pointer-events-none select-none flex place-items-center gap-2 lg:pointer-events-auto py-4 m">
                <Image
                    src="/swoony.svg"
                    alt="Swoony: Dating app"
                    width={32}
                    height={24}
                    priority
                />
                <div
                    className={`${quickSand.className} text-xl font-semibold text-main-blue uppercase tracking-wide`}
                >
                    Swoony
                </div>
            </div>
        </Link>
        <h2 className="py-2 text-2xl font-bold">Lahjakortti</h2>


        <p className="py-2">Arvomme 100€ lahjakortin yhdelle uutiskirjeen tilaajalle, kun deittisovelluksemme julkaistaan. Arvonta tapahtuu meidän Instagram sivuilla: <Link href="https://www.instagram.com/swoonyapp/" className="underline" target="_blank">
            @swoonyapp
        </Link></p>

        <p className="py-2">Lahjakortti on NoHo:n ravintoloihin käytössä, jotka ovat verkkosivuilla mainittu: <Link href="https://www.noho.fi/lahjakortit/" className="underline" target="_blank">https://www.noho.fi/lahjakortit/</Link></p>

        <Link
            href="/#footer-section"
            className="inline-block my-4 py-2 bg-main-blue text-white text-md font-semibold px-8 rounded-full hover:bg-main-red-hover"
        >
            Takaisin
        </Link>
    </div>
}
