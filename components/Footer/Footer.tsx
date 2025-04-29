import React, { FC, FormEvent } from "react";
import { Quicksand } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { trackLead } from "@/lib/fb";
import Link from "next/link";

const quickSand = Quicksand({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
});

const Footer: FC = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const nameRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  const trackLeadAction = () => {
    const email = emailRef.current?.value;
    const name = nameRef.current?.value;

    if (!email || !name) return;
    trackLead({
      email,
      name,
    });
  };

  return (
    <footer
      className="bg-main-blue text-white p-8 py-24 w-full"
      id="footer-section"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-xl mx-auto">
          {!success && (
            <h3 className="text-2xl font-semibold mb-10">
              Jätä yhteystietosi meille ja kuulet ensimmäisenä sovelluksen uusista ominaisuuksista!
            </h3>
          )}
          {success && (
            <h3 className="text-2xl font-semibold mb-10">
              Kiitos ilmoittautumisesta! Olemme sinuun yhteydessä sovelluksen
              etenemisestä.
            </h3>
          )}
          <form
            name="contact"
            method="POST"
            action="/?success=true#footer-section"
            data-netlify="true"
            onSubmit={trackLeadAction}
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="mb-2 max-w-sm mx-auto">
              <input
                required
                type="text"
                name="name"
                placeholder="Nimi"
                className="w-full placeholder-white bg-transparent p-3 border border-white rounded-xl focus:outline-none focus:border-blue-300 mb-4"
                ref={nameRef}
              />
            </div>
            <div className="mb-8 max-w-sm mx-auto">
              <input
                required
                type="text"
                name="email"
                placeholder="Sähköposti"
                className="w-full placeholder-white bg-transparent p-3 border border-white rounded-xl focus:outline-none focus:border-blue-300 mb-4"
                ref={emailRef}
              />
            </div>
            <button className="bg-main-red text-white text-lg font-semibold py-4 max-w-sm rounded-full w-full hover:bg-main-red-hover">
              Tilaa uutiskirje
            </button>
          </form>
          <div className="flex flex-row gap-2 justify-center">
            <a
              href="https://apps.apple.com/app/swoony/id6499217523"
              target="_blank"
            >
              <Image src="/applestore.svg" alt="Apple" width={180} height={180} />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=fi.swoonymatchmaking.app"
              target="_blank"
            >
              <Image src="/google-play.svg" alt="Google" width={180} height={180} />
            </a>
          </div>

        </div>

        <hr className="border-light-blue border-opacity-50 mb-16" />

        <section className="bottom-footer  leading-7">
          <h4 className="col-span-1 text-left text-2xl font-bold mb-6">
            Yhteystiedot
          </h4>
          <div className="grid sm:grid-cols-1 md:grid-cols-4 space-y-6 md:space-y-0 text-md">
            <p className="col-span-1">
              <Link href="mailto:info@swoony.io">info@swoony.io</Link>
              <br />
              +358505443089<br /><br />

              © Swoony Oy <br />
              Y-tunnus: 3358461-2 <br />

            </p>
            <p className="col-span-1">
              <Link href="/swoony_guide.pdf" target="_blank">Sovelluksen käyttöopas</Link> <br />
              <Link href="terms">Käyttöehdot</Link> <br />
              <Link href="privacy_policy">Tietosuojaseloste</Link> <br />

            </p>
            <div className="col-span-1 flex justify-start space-x-2">
              <Link href="https://www.instagram.com/swoonyofficial/" target="_blank">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 9.375C13.8875 9.375 12.7999 9.7049 11.8749 10.323C10.9499 10.9411 10.2289 11.8196 9.80318 12.8474C9.37744 13.8752 9.26604 15.0062 9.48308 16.0974C9.70013 17.1885 10.2359 18.1908 11.0225 18.9775C11.8092 19.7641 12.8115 20.2999 13.9026 20.5169C14.9938 20.734 16.1248 20.6226 17.1526 20.1968C18.1804 19.7711 19.0589 19.0501 19.677 18.1251C20.2951 17.2001 20.625 16.1125 20.625 15C20.6234 13.5086 20.0303 12.0788 18.9758 11.0242C17.9212 9.96968 16.4914 9.37655 15 9.375ZM15 18.75C14.2583 18.75 13.5333 18.5301 12.9166 18.118C12.2999 17.706 11.8193 17.1203 11.5355 16.4351C11.2516 15.7498 11.1774 14.9958 11.3221 14.2684C11.4667 13.541 11.8239 12.8728 12.3483 12.3483C12.8728 11.8239 13.541 11.4667 14.2684 11.3221C14.9958 11.1774 15.7498 11.2516 16.4351 11.5355C17.1203 11.8193 17.706 12.2999 18.118 12.9166C18.5301 13.5333 18.75 14.2583 18.75 15C18.75 15.9946 18.3549 16.9484 17.6516 17.6516C16.9484 18.3549 15.9946 18.75 15 18.75ZM20.625 2.8125H9.375C7.63509 2.81436 5.96697 3.50636 4.73667 4.73667C3.50636 5.96697 2.81436 7.63509 2.8125 9.375V20.625C2.81436 22.3649 3.50636 24.033 4.73667 25.2633C5.96697 26.4936 7.63509 27.1856 9.375 27.1875H20.625C22.3649 27.1856 24.033 26.4936 25.2633 25.2633C26.4936 24.033 27.1856 22.3649 27.1875 20.625V9.375C27.1856 7.63509 26.4936 5.96697 25.2633 4.73667C24.033 3.50636 22.3649 2.81436 20.625 2.8125ZM25.3125 20.625C25.3125 21.8682 24.8186 23.0605 23.9396 23.9396C23.0605 24.8186 21.8682 25.3125 20.625 25.3125H9.375C8.1318 25.3125 6.93951 24.8186 6.06044 23.9396C5.18136 23.0605 4.6875 21.8682 4.6875 20.625V9.375C4.6875 8.1318 5.18136 6.93951 6.06044 6.06044C6.93951 5.18136 8.1318 4.6875 9.375 4.6875H20.625C21.8682 4.6875 23.0605 5.18136 23.9396 6.06044C24.8186 6.93951 25.3125 8.1318 25.3125 9.375V20.625ZM22.5 8.90625C22.5 9.18438 22.4175 9.45626 22.263 9.68752C22.1085 9.91878 21.8889 10.099 21.6319 10.2055C21.3749 10.3119 21.0922 10.3397 20.8194 10.2855C20.5466 10.2312 20.296 10.0973 20.0994 9.90062C19.9027 9.70395 19.7688 9.45338 19.7145 9.1806C19.6603 8.90781 19.6881 8.62506 19.7945 8.3681C19.901 8.11114 20.0812 7.89152 20.3125 7.737C20.5437 7.58247 20.8156 7.5 21.0938 7.5C21.4667 7.5 21.8244 7.64816 22.0881 7.91188C22.3518 8.1756 22.5 8.53329 22.5 8.90625Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100095309208001" target="_blank">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.5 15C27.5 8.1 21.9 2.5 15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.05 6.8 26.0875 12.5 27.25V18.75H10V15H12.5V11.875C12.5 9.4625 14.4625 7.5 16.875 7.5H20V11.25H17.5C16.8125 11.25 16.25 11.8125 16.25 12.5V15H20V18.75H16.25V27.4375C22.5625 26.8125 27.5 21.4875 27.5 15Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
            <div className="col-span-1">
              <Link
                className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0 m"
                href="/"
                rel="noopener noreferrer"
              >
                <Image
                  src="/swoony.svg"
                  alt="Swoony: Dating app"
                  width={32}
                  height={24}
                  priority
                />
                <div
                  className={`${quickSand.className} text-xl font-semibold text-zinc-50 uppercase tracking-wide`}
                >
                  Swoony
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div >
    </footer >
  );
};

export default Footer;
