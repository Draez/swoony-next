import React from "react";

const Process = () => {
  const features = [
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Täytä kattava profiili asiantuntijoita varten",
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Asiantuntijat etsivät sinulle sopivan deitin",
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Täytä kattava profiili asiantuntijoita varten",
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Täytä kattava profiili asiantuntijoita varten",
    },
  ];

  return (
    <section className="container mx-auto p-8 pt-0 pb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl text-main-blue font-bold mb-4">
          Kuinka sovellus toimii?
        </h2>
        <p className="text-lg text-main-blue max-w-xl mx-auto">
          Haluamme tuoda deittailun takaisin siihen aikaan, kun kaikki ei ollut
          pinnallista. Säästä itseltäsi aikaa ja annan asiantuntijoiden
          määrittää sinulle sopiva deitti.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="w-32 h-32 mx-auto mb-5 bg-main-red rounded-full flex items-center justify-center">
              <i className={`fas text-white font-semibold text-3xl`}>
                {feature.icon}
              </i>
            </div>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
