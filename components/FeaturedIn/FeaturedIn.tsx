import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const FeaturedIn: FC = () => {
    // Array of newspaper features with their logos and links
    const features = [
        {
            name: "Helsingin Sanomat",
            logo: "/hs_svg.svg",
            link: "https://www.hs.fi/suomi/art-2000011034865.html",
        },
        {
            name: "MTV",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/46/Mtv3_new_logo.svg",
            link: "https://www.mtvuutiset.fi/artikkeli/nettideittaajaa-vaanii-jatkuva-karkkikauppaefekti-nain-toimivat-tinderin-suomalaiset-haastajat/9186260",
        },
        {
            name: "Satakunnan Kansa",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/Satakunnan_Kansa_wordmark.svg",
            link: "https://www.satakunnankansa.fi/satakunta/art-2000010979586.html",
        },
        {
            name: "HBL",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HBL_wordmark.svg",
            link: "https://www.hbl.fi/2025-05-23/trotta-pa-ytliga-dejtningappar-skapade-egen/",
        },
        {
            name: "Feedi",
            logo: "/feedi.png",
            link: "https://www.feedi.fi/uusi-suomalainen-deittisovellus-swoony/",
        },
    ];

    return (
        <section className="container mx-auto px-4 py-12 md:py-24">
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-4xl font-bold text-main-blue mb-6">
                    Swoony Mediassa
                </h2>

            </div>

            <div className="flex flex-wrap justify-center gap-16">
                {features.map((feature, index) => (
                    <Link
                        href={feature.link}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-[150px] h-[150px] p-4"
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <Image
                                src={feature.logo}
                                alt={`${feature.name} logo`}
                                width={150}
                                height={150}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default FeaturedIn; 