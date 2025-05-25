import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const FeaturedIn: FC = () => {
    // Array of newspaper features with their logos and links
    const features = [
        {
            name: "Helsingin Sanomat",
            logo: "/hs_white.png",
            link: "https://www.hs.fi/suomi/art-2000011034865.html",
        },
        {
            name: "Satakunnan Kansa",
            logo: "/sk.png",
            link: "https://www.satakunnankansa.fi/satakunta/art-2000010979586.html",
        },
        {
            name: "HBL",
            logo: "/hbl_logo.png",
            link: "https://www.hbl.fi/2025-05-23/trotta-pa-ytliga-dejtningappar-skapade-egen/",
        },
    ];

    return (
        <section className="container mx-auto px-4 py-12 md:py-24">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-main-blue mb-6">
                    Swoony Mediassa
                </h2>
                <p className="text-lg text-main-blue max-w-2xl mx-auto">
                    Swoony on saanut huomiota johtavissa suomalaisissa medioissa
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                {features.map((feature, index) => (
                    <Link
                        href={feature.link}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-[150px] h-[150px] p-4 bg-white rounded-lg shadow-lg"
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <Image
                                src={feature.logo}
                                alt={`${feature.name} logo`}
                                width={200}
                                height={200}
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