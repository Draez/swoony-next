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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "Mätsääjät valitsevat sinulle deitin",
    },
    {
      icon: (
        <svg
          width="65"
          height="64"
          viewBox="0 0 65 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.667 26.6667V21.3333C12.667 19.9188 13.2289 18.5623 14.2291 17.5621C15.2293 16.5619 16.5858 16 18.0003 16H20.1683M12.667 26.6667V50.6667C12.667 52.0812 13.2289 53.4377 14.2291 54.4379C15.2293 55.4381 16.5858 56 18.0003 56H47.3337C48.7481 56 50.1047 55.4381 51.1049 54.4379C52.1051 53.4377 52.667 52.0812 52.667 50.6667V26.6667M12.667 26.6667H52.667M52.667 26.6667V21.3333C52.667 19.9188 52.1051 18.5623 51.1049 17.5621C50.1047 16.5619 48.7481 16 47.3337 16H43.9177M43.9177 16H20.1657V8M43.9177 16V8M22.0003 37.3333H43.3337"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "Sovi deittisi kanssa sopiva ajankohta treffeille",
    },
    {
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_351_189)">
            <path
              d="M19.8918 19.8919C19.4233 19.8919 19.0179 19.7208 18.6756 19.3784C18.3332 19.0361 18.1621 18.6307 18.1621 18.1622C18.1621 17.7478 18.0359 17.3784 17.7837 17.0541C17.5314 16.7298 17.2341 16.4595 16.8918 16.2433C16.2612 15.8108 15.6215 15.3784 14.9729 14.946C14.3242 14.5135 13.7116 14.0451 13.135 13.5406C12.5585 13.0361 12.108 12.4505 11.7837 11.7838C11.4594 11.1171 11.2792 10.3604 11.2431 9.51354C11.2431 9.04507 11.4143 8.63967 11.7567 8.29733C12.099 7.95498 12.5044 7.78381 12.9729 7.78381C13.4413 7.78381 13.8467 7.95498 14.1891 8.29733C14.5314 8.63967 14.7026 9.04507 14.7026 9.51354C14.7026 9.92796 14.8287 10.2973 15.081 10.6217C15.3332 10.946 15.6305 11.2162 15.9729 11.4325C16.5855 11.8649 17.2251 12.2973 17.8918 12.7298C18.5585 13.1622 19.1711 13.6307 19.7296 14.1352C20.2882 14.6397 20.7386 15.2253 21.081 15.8919C21.4233 16.5586 21.6035 17.3153 21.6215 18.1622C21.6215 18.6307 21.4503 19.0361 21.108 19.3784C20.7657 19.7208 20.3603 19.8919 19.8918 19.8919ZM31.9999 19.8919C31.5314 19.8919 31.126 19.7208 30.7837 19.3784C30.4413 19.0361 30.2702 18.6307 30.2702 18.1622C30.2702 17.7478 30.144 17.3784 29.8918 17.0541C29.6395 16.7298 29.3422 16.4595 28.9999 16.2433C28.3693 15.8108 27.7296 15.3784 27.081 14.946C26.4323 14.5135 25.8197 14.0451 25.2431 13.5406C24.6666 13.0361 24.2161 12.4505 23.8918 11.7838C23.5675 11.1171 23.3873 10.3604 23.3512 9.51354C23.3512 9.04507 23.5224 8.63967 23.8648 8.29733C24.2071 7.95498 24.6125 7.78381 25.081 7.78381C25.5494 7.78381 25.9548 7.95498 26.2972 8.29733C26.6395 8.63967 26.8107 9.04507 26.8107 9.51354C26.8107 9.92796 26.9368 10.2973 27.1891 10.6217C27.4413 10.946 27.7386 11.2162 28.081 11.4325C28.6936 11.8649 29.3332 12.2973 29.9999 12.7298C30.6666 13.1622 31.2792 13.6307 31.8377 14.1352C32.3963 14.6397 32.8467 15.2253 33.1891 15.8919C33.5314 16.5586 33.7116 17.3153 33.7296 18.1622C33.7296 18.6307 33.5585 19.0361 33.2161 19.3784C32.8738 19.7208 32.4684 19.8919 31.9999 19.8919ZM44.108 19.8919C43.6395 19.8919 43.2341 19.7208 42.8918 19.3784C42.5494 19.0361 42.3783 18.6307 42.3783 18.1622C42.3783 17.7478 42.2521 17.3784 41.9999 17.0541C41.7476 16.7298 41.4503 16.4595 41.108 16.2433C40.4774 15.8108 39.8377 15.3784 39.1891 14.946C38.5404 14.5135 37.9278 14.0451 37.3512 13.5406C36.7747 13.0361 36.3242 12.4505 35.9999 11.7838C35.6756 11.1171 35.4954 10.3604 35.4594 9.51354C35.4594 9.04507 35.6305 8.63967 35.9729 8.29733C36.3152 7.95498 36.7206 7.78381 37.1891 7.78381C37.6576 7.78381 38.063 7.95498 38.4053 8.29733C38.7476 8.63967 38.9188 9.04507 38.9188 9.51354C38.9188 9.92796 39.0449 10.2973 39.2972 10.6217C39.5494 10.946 39.8467 11.2162 40.1891 11.4325C40.8017 11.8649 41.4413 12.2973 42.108 12.7298C42.7747 13.1622 43.3873 13.6307 43.9458 14.1352C44.5044 14.6397 44.9549 15.2253 45.2972 15.8919C45.6395 16.5586 45.8197 17.3153 45.8377 18.1622C45.8377 18.6307 45.6666 19.0361 45.3242 19.3784C44.9819 19.7208 44.5765 19.8919 44.108 19.8919ZM47.7026 39.7838C47.108 41.1352 46.3693 42.3784 45.4864 43.5135C44.6035 44.6487 43.6125 45.7117 42.5134 46.7027H54.4864V50.1622C54.4864 50.973 54.3603 51.7838 54.108 52.5946C53.8558 53.4054 53.4954 54.1442 53.0269 54.8108C52.5585 55.4775 51.9729 56.018 51.2702 56.4325C50.5675 56.8469 49.7657 57.0631 48.8648 57.0811H9.94584C9.04494 57.0811 8.25215 56.8739 7.56746 56.4595C6.88278 56.0451 6.29719 55.5045 5.81071 54.8379C5.32422 54.1712 4.95485 53.4325 4.7026 52.6217C4.45034 51.8108 4.32422 50.991 4.32422 50.1622V46.7027H14.5675C12.4413 44.8469 10.7837 42.6937 9.59449 40.2433C8.4053 37.7928 7.8017 35.1442 7.78368 32.2973V22.4865H51.1621C52.3512 22.4865 53.4594 22.7117 54.4864 23.1622C55.5134 23.6126 56.4143 24.2343 57.1891 25.0271C57.9639 25.8198 58.5675 26.7388 58.9999 27.7838C59.4323 28.8289 59.6576 29.946 59.6756 31.1352C59.6756 32.3063 59.4594 33.4144 59.0269 34.4595C58.5945 35.5045 57.9909 36.4235 57.2161 37.2162C56.4413 38.009 55.5404 38.6307 54.5134 39.0811C53.4864 39.5316 52.3693 39.7658 51.1621 39.7838H47.7026ZM49.2972 25.946C49.2972 26.7027 49.3062 27.4595 49.3242 28.2162C49.3422 28.973 49.3512 29.7388 49.3512 30.5135C49.3512 31.5045 49.3242 32.4865 49.2702 33.4595C49.2161 34.4325 49.072 35.3874 48.8377 36.3244H51.1621C51.8648 36.3244 52.5224 36.1892 53.135 35.9189C53.7476 35.6487 54.2882 35.2703 54.7567 34.7838C55.2251 34.2973 55.5765 33.7478 55.8107 33.1352C56.0449 32.5226 56.1801 31.8559 56.2161 31.1352C56.2161 30.4325 56.09 29.7658 55.8377 29.1352C55.5855 28.5045 55.2251 27.955 54.7567 27.4865C54.2882 27.018 53.7567 26.6487 53.1621 26.3784C52.5675 26.1081 51.9008 25.964 51.1621 25.946H49.2972ZM11.2431 32.2973C11.2431 33.8829 11.4774 35.4054 11.9458 36.8649C12.4143 38.3244 13.09 39.6757 13.9729 40.9189C14.8558 42.1622 15.8828 43.2703 17.0539 44.2433C18.2251 45.2162 19.5314 46.0361 20.9729 46.7027H36.108C37.5314 46.0541 38.8377 45.2433 40.0269 44.2703C41.2161 43.2973 42.2431 42.1802 43.108 40.9189C43.9729 39.6577 44.6395 38.3063 45.108 36.8649C45.5765 35.4235 45.8197 33.9009 45.8377 32.2973V25.946H11.2431V32.2973ZM48.8648 53.6217C49.2431 53.6217 49.5675 53.4955 49.8377 53.2433C50.108 52.991 50.3332 52.6937 50.5134 52.3514C50.6936 52.009 50.8197 51.6307 50.8918 51.2162C50.9639 50.8018 51.0089 50.4505 51.0269 50.1622H7.78368C7.78368 50.4685 7.81971 50.8199 7.89179 51.2162C7.96386 51.6126 8.09899 51.982 8.29719 52.3244C8.49539 52.6667 8.72062 52.973 8.97287 53.2433C9.22512 53.5135 9.54944 53.6397 9.94584 53.6217H48.8648Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_351_189">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Treffit odottavat! Oletko valmis?",
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
          pinnallista. Säästä itseltäsi aikaa ja anna asiantuntijoiden määrittää
          sinulle sopiva deitti.
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
            <p className="text-main-blue">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
