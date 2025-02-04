import React from "react";

const Process = () => {
  const features = [
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.3004 47.3872C44.7121 47.7849 45.2635 48.0049 45.8359 47.9999C46.4083 47.9949 46.9558 47.7654 47.3606 47.3606C47.7654 46.9558 47.9949 46.4083 47.9999 45.8359C48.0049 45.2635 47.7849 44.7121 47.3872 44.3004L44.3004 47.3872ZM34.9286 19.6473C34.9286 23.7002 33.3186 27.587 30.4528 30.4528C27.587 33.3186 23.7002 34.9286 19.6473 34.9286V39.2947C24.8581 39.2947 29.8555 37.2247 33.5401 33.5401C37.2247 29.8555 39.2947 24.8581 39.2947 19.6473H34.9286ZM19.6473 34.9286C15.5945 34.9286 11.7076 33.3186 8.84185 30.4528C5.97606 27.587 4.36608 23.7002 4.36608 19.6473H0C0 24.8581 2.06998 29.8555 5.75457 33.5401C9.43916 37.2247 14.4365 39.2947 19.6473 39.2947V34.9286ZM4.36608 19.6473C4.36608 15.5945 5.97606 11.7076 8.84185 8.84185C11.7076 5.97606 15.5945 4.36608 19.6473 4.36608V0C14.4365 0 9.43916 2.06998 5.75457 5.75457C2.06998 9.43916 0 14.4365 0 19.6473H4.36608ZM19.6473 4.36608C23.7002 4.36608 27.587 5.97606 30.4528 8.84185C33.3186 11.7076 34.9286 15.5945 34.9286 19.6473H39.2947C39.2947 14.4365 37.2247 9.43916 33.5401 5.75457C29.8555 2.06998 24.8581 0 19.6473 0V4.36608ZM30.1106 33.1975L44.3004 47.3872L47.3872 44.3004L33.1975 30.1106L30.1106 33.1975Z"
            fill="white"
          />
        </svg>
      ),
      text: "1. Täytä profiilisi",
      lowerText:
        "Kerro meille itsestäsi ja toiveistasi mahdollisimman rehellisesti. Profiilisi avulla asiantuntijamme ja tekoälymme ymmärtävät, millainen kumppani sopii juuri sinulle.",
    },
    {
      icon: (
        <svg
          width="51"
          height="45"
          viewBox="0 0 51 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.8867 8.21353C16.2653 -4.28247 1.5 0.738858 1.5 13.4882C1.5 26.2349 26.1133 43.6669 26.1133 43.6669C26.1133 43.6669 49.5 25.5335 49.5 13.4882C49.5 1.44019 35.9613 -4.28247 27.3453 8.21353L26.116 9.21086L24.884 8.21353H24.8867Z"
            fill="#F42C52"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "2. Asiantuntijahaku",
      lowerText:
        "Koulutetut asiantuntijamme yhdistävät sinut sopivaan kumppaniin tieteen, psykologian ja intuitiivisen ymmärryksen avulla.",
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 8H8C5.8 8 4.02 9.8 4.02 12L4 44L12 36H40C42.2 36 44 34.2 44 32V12C44 9.8 42.2 8 40 8ZM36 28H12V24H36V28ZM36 22H12V18H36V22ZM36 16H12V12H36V16Z"
            fill="white"
          />
        </svg>
      ),
      text: "3. Keskustelkaa",
      lowerText:
        "Kun täydellinen mätsi löytyy, pääsette tutustumaan toisiinne sovelluksen sisäisen chatin kautta.",
    },

  ];

  return (
    <section className="container mx-auto p-8 pt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl text-main-blue font-bold mb-4">
          Swoony - Koe uudenlainen deittailu
        </h2>
        <p className="text-lg text-main-blue max-w-xl mx-auto">
          Asiantuntijoidemme ja tekoälyn yhdistelmällä löydät sen oikean.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="w-32 h-32 mx-auto mb-5 bg-main-red rounded-full flex items-center justify-center">
              <i className={`fas text-white font-semibold text-3xl`}>
                {feature.icon}
              </i>
            </div>
            <p className="text-main-blue font-bold">{feature.text}</p>
            <p className="text-main-blue">{feature.lowerText}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
