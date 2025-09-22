import React from "react";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const Process = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;

  const features = [
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            stroke="#00E6D5"
            d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
          />
        </svg>

      ),
      text: t('process.step2'),
      lowerText:
        locale === 'sv'
          ? "Berätta för oss om dig själv och dina önskemål så ärligt som möjligt. Genom din profil förstår våra experter och vår AI vilken typ av partner som passar just dig."
          : "Kerro meille itsestäsi ja toiveistasi mahdollisimman rehellisesti. Profiilisi auttaa asiantuntijoitamme ymmärtämään, millainen kumppani sopii juuri sinulle.",
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            stroke="#00E6D5"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

      ),
      text: "Valitse mätsipaketti",
      lowerText:
        locale === 'sv'
          ? "Berätta för oss om dig själv och dina önskemål så ärligt som möjligt. Genom din profil förstår våra experter och vår AI vilken typ av partner som passar just dig."
          : "Voit valita 1, 3 tai 5 mätsin paketin. Profiilisi tulee näkyviin asiantuntijoillemme, kun sinulla on aktiivinen mätsipaketti. ",
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            stroke="#00E6D5"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>

      ),
      text: t('process.step3'),
      lowerText:
        locale === 'sv'
          ? "Våra utbildade experter parar ihop dig med en lämplig partner med hjälp av vetenskap, psykologi och intuitiv förståelse."
          : "Koulutetut asiantuntijamme etsivät sinulle sopivan kumppanin tieteen, psykologian ja intuitiivisen ymmärryksen avulla.",
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            stroke="#00E6D5"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
          />
        </svg>
      ),
      text: t('process.step4'),
      lowerText:
        locale === 'sv'
          ? "När den perfekta matchen hittas kan ni lära känna varandra via appens interna chatt."
          : "Mätsi syntyy vain molempien hyväksynnällä. Tällöin pääsette aloittamaan keskustelun. Jos jompikumpi hylkää, asiantuntijamme etsivät uuden ehdokkaan.",
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            stroke="#00E6D5"
            d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
          />
        </svg>

      ),
      text: t('process.step5'),
      lowerText:
        locale === 'sv'
          ? "När den perfekta matchen hittas kan ni lära känna varandra via appens interna chatt."
          : "Viikon jälkeen hyväksytystä mätsistä palautelaatikko aukeaa sovelluksen etusivulle. Palautteesi auttaa meitä tarjoamaan sinulle sopivampia mätsejä.",
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            stroke="#00E6D5"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>

      ),
      text: t('process.step6'),
      lowerText:
        locale === 'sv'
          ? "När den perfekta matchen hittas kan ni lära känna varandra via appens interna chatt."
          : "Jos mätsi ei johtanut toivottuun lopputulokseen, aloitamme etsinnän uudelleen – kunnes se oikea löytyy.",
    },

  ];

  return (
    <section className="container mx-auto p-8 pt-24" id="howMatchingWorks">
      <div className="text-center mb-12">
        <h2 className="text-3xl text-black font-bold mb-4">
          {t('process.title')}
        </h2>
        <p className="text-lg text-black max-w-xl mx-auto">
          {locale === 'sv'
            ? "Med kombinationen av våra experter och AI kommer du att hitta den rätta."
            : "Asiantuntijoidemme ja tekoälyn yhdistelmällä löydät sen oikean."}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center">
              <i className={`fas text-white font-semibold text-3xl`}>
                {feature.icon}
              </i>
            </div>
            <p className="text-black font-bold mb-2">{feature.text}</p>
            <p className="text-gray">{feature.lowerText}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
