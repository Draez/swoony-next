import Image from 'next/image';

export default function Experts() {
    return (
        <section className="container mx-auto px-4 py-12 md:py-24">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-main-blue">
                        Asiantuntijamme ymmärtävät rakkautta
                    </h2>
                    <p className="text-lg text-main-blue">
                        Swoonyn asiantuntijat ovat korkeakoulutettuja psykologian ja ihmissuhteiden ammattilaisia,
                        joilla on vankka kokemus matchmakingista ja parisuhdeneuvonnasta.
                    </p>
                    <p className="text-lg font-semibold text-main-blue">
                        Yhdistämme tieteen ja tunteen:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-main-blue">
                        <li>Syvällinen ihmistuntemus</li>
                        <li>Psykologinen osaaminen</li>
                        <li>Aito välittäminen</li>
                        <li>Tekoäly auttamassa</li>
                    </ul>
                    <p className="text-lg text-main-blue">
                        Jokainen mätsi tehdään huolella, koska uskomme että täydellisen kumppanin löytäminen
                        vaatii sekä ammattitaitoa että intuitiota.
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        src="/love.jpg"
                        alt="Matchmaker"
                        width={400}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
