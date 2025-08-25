import React, { FC } from "react";
import Image from "next/image";

interface Review {
    id: number;
    name: string;
    age: number;
    location: string;
    rating: number;
    comment: string;
    avatar?: string;
    date: string;
}

const UserReviews: FC = () => {
    // Sample user reviews data
    const reviews: Review[] = [
        {
            id: 1,
            name: "Emma",
            age: 36,
            location: "Helsinki",
            rating: 5,
            comment: "Ihmiset ei ehkä oikein käsitä, miten arvokas ja hieno palvelu ammattimaisesti ja käsin poimien kumppaniehdokkaiden valinta ja harkitusti yhteensovittaminen/ehdottaminen on.",
            date: "2024-01-15"
        },
        {
            id: 2,
            name: "Mikko",
            age: 28,
            location: "Tampere",
            rating: 5,
            comment: "Mainio sovellus, jossa juurikin omat arvot ja minä omana itsenäni otetaan huomioon.",
            date: "2024-01-10"
        },
        {
            id: 3,
            name: "Sofia",
            age: 39,
            location: "Turku",
            rating: 4,
            comment: "Tämä on ollut minulle tähän asti erittäin positiivinen kokemus verrattuna loputtomaan profiilien selailuun.Harkittu ja perusteltu ehdotus lisää kiinnostustani tutustua.",
            date: "2024-01-08"
        },
    ];



    return (
        <section className=" py-16 md:py-24">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-main-blue mb-4">
                        Mitä käyttäjämme sanovat
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Kuule suoraan käyttäjiltämme, miten Swoony on muuttanut heidän deittailukokemustaan
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-gray-50 border border-gray-200 rounded-xl p-6 transition-shadow duration-300"
                        >
                            {/* Review Header */}
                            <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-1">
                                    <div className="text-6xl text-main-red mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" /></svg></div>
                                </div>
                            </div>

                            {/* Review Comment */}
                            <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                                {review.comment}
                            </p>

                            {/* Review Footer */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-main-red to-main-red-hover rounded-full flex items-center justify-center text-white font-semibold text-lg">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            {review.name}, {review.age}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {review.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default UserReviews;
