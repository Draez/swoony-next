import React from "react";

const Experts = () => {
    const features = [
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.0003 5.75L1.91699 17.25L9.58366 21.4283V32.9283L23.0003 40.25L36.417 32.9283V21.4283L40.2503 19.3392V32.5833H44.0837V17.25L23.0003 5.75ZM36.072 17.25L23.0003 24.38L9.92866 17.25L23.0003 10.12L36.072 17.25ZM32.5837 30.6667L23.0003 35.88L13.417 30.6667V23.5175L23.0003 28.75L32.5837 23.5175V30.6667Z" fill="white" />
                </svg>


            ),
            text: "Asiantuntijoillamme on korkeakoulutason koulutus ihmisten välisen vuorovaikutuksen, psykologian tai muun soveltuvan alan parista.",
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33 38H22V30H36V22H44V38H39L36 41L33 38Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4 6H36V30H17L13 34L9 30H4V6Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19 18H20M26 18H27M12 18H13" stroke="white" stroke-width="4" stroke-linecap="round" />
                </svg>

            ),
            text: "Kokemusta matchmakingista, parisuhdeneuvonnasta tai muusta vastaavasta asiakaspalvelu- ja ihmissuhdealan työstä, jossa keskeistä on ollut ihmisten välisen vuorovaikutuksen ymmärtäminen ja edistäminen.",
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.8125 18.6875C38.8125 19.0687 38.6611 19.4344 38.3915 19.704C38.1219 19.9735 37.7562 20.125 37.375 20.125C36.9938 20.125 36.6281 19.9735 36.3585 19.704C36.0889 19.4344 35.9375 19.0687 35.9375 18.6875C35.9375 15.2563 34.5744 11.9656 32.1482 9.53931C29.7219 7.11305 26.4312 5.75 23 5.75C19.5688 5.75 16.2781 7.11305 13.8518 9.53931C11.4256 11.9656 10.0625 15.2563 10.0625 18.6875C10.0625 23.4852 11.5952 24.9622 13.2196 26.5291C14.7721 28.0312 16.5312 29.7221 16.5312 33.7812C16.5312 35.4969 17.2128 37.1422 18.4259 38.3553C19.639 39.5685 21.2844 40.25 23 40.25C24.84 40.25 26.3152 39.5025 27.6413 37.8979C27.7601 37.7482 27.9075 37.6237 28.075 37.5317C28.2424 37.4397 28.4265 37.382 28.6165 37.3619C28.8066 37.3419 28.9987 37.3599 29.1816 37.415C29.3646 37.47 29.5347 37.561 29.6821 37.6826C29.8295 37.8042 29.9512 37.9539 30.04 38.1231C30.1288 38.2923 30.1831 38.4774 30.1995 38.6678C30.216 38.8582 30.1943 39.0499 30.1358 39.2318C30.0772 39.4137 29.983 39.5821 29.8587 39.7271C27.9971 41.9822 25.6953 43.125 23 43.125C20.5228 43.1221 18.1478 42.1368 16.3961 40.3851C14.6444 38.6335 13.6591 36.2585 13.6562 33.7812C13.6563 30.944 12.6356 29.9593 11.2233 28.5991C9.42641 26.8633 7.1875 24.707 7.1875 18.6875C7.1875 14.4938 8.85346 10.4718 11.8189 7.50637C14.7843 4.54096 18.8063 2.875 23 2.875C27.1937 2.875 31.2157 4.54096 34.1811 7.50637C37.1465 10.4718 38.8125 14.4938 38.8125 18.6875ZM31.961 28.9441C31.7975 28.8493 31.617 28.7877 31.4296 28.7627C31.2423 28.7378 31.0519 28.7501 30.8693 28.7988C30.6867 28.8475 30.5156 28.9318 30.3656 29.0468C30.2156 29.1617 30.0897 29.3051 29.9952 29.4688C29.8371 29.743 29.5928 29.9573 29.3004 30.0785C29.008 30.1997 28.6838 30.221 28.378 30.1391C28.0722 30.0572 27.8021 29.8766 27.6094 29.6255C27.4167 29.3743 27.3124 29.0665 27.3125 28.75C27.3125 27.0735 28.1786 25.9181 29.1812 24.5813C30.3259 23.0539 31.625 21.3235 31.625 18.6875C31.625 16.4 30.7163 14.2062 29.0988 12.5887C27.4813 10.9712 25.2875 10.0625 23 10.0625C20.7125 10.0625 18.5187 10.9712 16.9012 12.5887C15.2837 14.2062 14.375 16.4 14.375 18.6875C14.375 19.0687 14.5265 19.4344 14.796 19.704C15.0656 19.9735 15.4313 20.125 15.8125 20.125C16.1937 20.125 16.5594 19.9735 16.829 19.704C17.0985 19.4344 17.25 19.0687 17.25 18.6875C17.25 17.1625 17.8558 15.7 18.9341 14.6216C20.0125 13.5433 21.475 12.9375 23 12.9375C24.525 12.9375 25.9875 13.5433 27.0659 14.6216C28.1442 15.7 28.75 17.1625 28.75 18.6875C28.75 20.364 27.8839 21.5194 26.8813 22.8562C25.7366 24.3836 24.4375 26.114 24.4375 28.75C24.4378 29.6991 24.7512 30.6215 25.3291 31.3744C25.9069 32.1272 26.717 32.6684 27.6337 32.9141C28.5505 33.1598 29.5226 33.0961 30.3995 32.7331C31.2764 32.3701 32.0091 31.728 32.4839 30.9062C32.6743 30.5766 32.7262 30.1849 32.6282 29.817C32.5302 29.4492 32.2902 29.1352 31.961 28.9441Z" fill="#fff" />
                </svg>


            ),
            text: "Asiantuntijoillamme on kyky ymmärtää ihmisten toiveita ja tarpeita, sekä herkkyyttä ja intuitiota ihmisten välisten yhteyksien arvioinnissa.",
        },

    ];

    return (
        <section className="container mx-auto p-8 pb-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl text-main-blue font-bold mb-4">
                    Swoonyn asiantuntijat
                </h2>
                <p className="text-lg text-main-blue max-w-xl mx-auto">

                    Swoonylle on tärkeää, että jokainen mätsi luodaan huolellisesti, jotta voimme tarjota kaikille parhaan mahdollisen kokemuksen.                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="text-center">
                        <div className="w-32 h-32 mx-auto mb-5 bg-main-red rounded-full flex items-center justify-center">
                            <i className={`fas text-white font-semibold text-3xl`}>
                                {feature.icon}
                            </i>
                        </div>
                        <p className="text-main-blue">{feature.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experts;
