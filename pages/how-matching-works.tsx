// import React from "react";
// import Image from "next/image";
// import { useTranslation } from 'next-i18next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { GetStaticProps } from 'next';
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
// import SmallHeader from "@/components/Header/SmallHeader";
// import UserReviews from "@/components/UserReviews/UserReviews";

// export default function HowMatchingWorks() {
//     const { t } = useTranslation('common');

//     const howItWorksSections = [
//         {
//             imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
//             title: "1. Profiilin luonti",
//             description: "Kerro itsestäsi ja toiveistasi. Profiiliisi kirjaat elämäntilanteesi, arvosi, tavoitteesi ja sen, mikä sinulle arjessa on tärkeää – sekä sen, mitä toivot parisuhteelta. Mitä monipuolisemmin kuvaat itseäsi, tavoitteita parisuhteelle ja odotuksia kumppaniasi ja itseäsi kohtaan, sitä helpommaksi teet mätsäämisen.",
//         },
//         {
//             imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center",
//             title: "2. Tekoälyn seulonta",
//             description: "Tekoäly käy läpi suuren joukon potentiaalisia vaihtoehtoja ja nostaa esiin ne, joiden kanssa yhteensopivuuden edellytykset näyttävät vahvoilta.",
//         },
//         {
//             imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=center",
//             title: "3. Asiantuntijan syväluotaus",
//             description: "Tämän jälkeen mätsäämisen asiantuntija perehtyy ehdokkaisiin tarkemmin. Hän huomioi arvopohjan, tulevaisuuden tavoitteet, elämäntilanteen, parisuhdehistorian sekä seksuaaliset mieltymykset – kokonaisuuden, joka tekee suhteesta aidosti toimivan ja kestävän. Näin varmistamme, että mätsi ei jää ulkonäön varaan, vaan kattaa sen, mikä oikeasti ratkaisee arjessa ja tulevaisuudessa.",
//         },
//         {
//             imageSrc: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop&crop=center",
//             title: "4. Mätsin ehdottaminen",
//             description: "Kun asiantuntija näkee, että henkilöiden palaset sopivat yhteen ja mätsissä on riittävästi yhtenevyyttä, saat tiedon sinulle sopivasta mätsistä. Lopullinen päätös tutustumisesta on aina sinun.",
//         },
//         {
//             imageSrc: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop&crop=center",
//             title: "5. Ensikohtaaminen",
//             description: "Järjestämme ensitapaamisen turvallisesti ja rennosti, jotta voitte keskittyä olennaiseen: tutustumiseen ja yhteyden rakentamiseen.",
//         },
//     ];



//     return (
//         <main className="flex min-h-screen flex-col items-center justify-between">
//             <SmallHeader />


//             {/* Matching Process Steps (Alternating image/text) */}
//             <section className="w-full py-20 px-4 bg-white">
//                 <div className="max-w-6xl mx-auto">
//                     <h2 className="text-3xl md:text-4xl font-bold text-main-blue text-center mb-16">
//                         {t('matching.processTitle')}
//                     </h2>

//                     <div>
//                         {howItWorksSections.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-12 mb-20`}
//                             >
//                                 <div className="w-full md:w-1/2">
//                                     <Image
//                                         src={item.imageSrc}
//                                         alt={item.title}
//                                         width={960}
//                                         height={720}
//                                         className="w-full h-auto rounded-xl shadow-lg object-cover"
//                                         priority={index === 0}
//                                     />
//                                 </div>
//                                 <div className="w-full md:w-1/2">
//                                     <h3 className="text-2xl md:text-3xl font-bold text-main-blue mb-4">
//                                         {item.title}
//                                     </h3>
//                                     <p className="text-lg text-gray-600 leading-relaxed">
//                                         {item.description}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <UserReviews />

//             <Footer />
//         </main>
//     );
// }

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//     return {
//         props: {
//             ...(await serverSideTranslations(locale || 'fi', ['common'])),
//         },
//     };
// };
