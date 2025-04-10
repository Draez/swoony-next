import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// Define the image paths
const opasImages = Array.from({ length: 13 }, (_, i) => ({
    id: i + 1,
    path: `/opas/${i + 1}.png`
}));

export default function Opas() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openModal = (id: number) => {
        setSelectedImage(id);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <Head>
                <title>Käyttöopas - Swoony</title>
                <meta name="description" content="Swoony-sovelluksen oppaat ja ohjeistukset" />
            </Head>

            <main className="flex min-h-screen flex-col items-center">
                <Header />

                <section className="w-full py-16 bg-gradient-to-b from-main-blue to-white">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
                            Sovelluksen käyttöopas
                        </h1>
                        <p className="text-lg text-white text-center mb-12 max-w-3xl mx-auto">
                            Selaa ohjeita Swoony-sovelluksen käyttöön ja tutustu parhaisiin käytäntöihin.
                        </p>

                        <div className="flex flex-col mx-auto">
                            {opasImages.map((image) => (
                                <div
                                    key={image.id}
                                    className="w-full cursor-pointer"
                                    onClick={() => openModal(image.id)}
                                >
                                    <div className="relative w-full" style={{ height: '100vh' }}>
                                        <Image
                                            src={image.path}
                                            alt={`Opas ${image.id}`}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Modal for enlarged image view */}
                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
                        <div className="relative max-w-4xl w-full h-auto" onClick={(e) => e.stopPropagation()}>
                            <button
                                className="absolute -top-12 right-0 text-white text-3xl p-2"
                                onClick={closeModal}
                            >
                                &times;
                            </button>
                            <div className="relative w-full h-[80vh]">
                                <Image
                                    src={`/opas/${selectedImage}.png`}
                                    alt={`Opas ${selectedImage}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                )}

                <Footer />
            </main>
        </>
    );
} 