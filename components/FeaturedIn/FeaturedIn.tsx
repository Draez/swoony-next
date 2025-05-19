import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const FeaturedIn: FC = () => {
    // Array of newspaper features with their logos and links
    const features = [
        {
            name: "Helsingin Sanomat",
            logo: "/hs_white.png", // You'll need to add these logo files to the public directory
            link: "https://www.hs.fi",
        },
        {
            name: "Satakunnan Kansa",
            logo: "/sk.png", // You'll need to add these logo files to the public directory
            link: "https://www.yle.fi",
        },
    ];

    return (
        <section className="container mx-auto p-8 py-12">
            <div className="text-center mb-8">
                <h2 className="text-3xl text-main-blue font-bold mb-4">
                    Swoony Mediassa
                </h2>

            </div>

            <div className="flex flex-wrap justify-center gap-8">
                {features.map((feature, index) => (
                    <Link
                        href={feature.link}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-[150px] h-[150px] p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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