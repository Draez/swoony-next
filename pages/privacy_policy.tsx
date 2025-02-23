import React from "react";
import { Quicksand } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

const quickSand = Quicksand({
    weight: ["700"],
    style: ["normal"],
    subsets: ["latin"],
});

export default function PrivacyPolicy() {
    return (
        <>
            <div className="p-8 text-black max-w-4xl mx-auto">
                <Link href="/">
                    <div className="pointer-events-none select-none flex place-items-center gap-2 lg:pointer-events-auto py-4">
                        <Image
                            src="/swoony.svg"
                            alt="Swoony: Dating app"
                            width={32}
                            height={24}
                            priority
                        />
                        <div className={`${quickSand.className} text-xl font-semibold text-main-blue uppercase tracking-wide`}>
                            Swoony
                        </div>
                    </div>
                </Link>

                <Link
                    href="/"
                    className="inline-block my-4 py-2 bg-main-blue text-white text-md font-semibold px-8 rounded-full hover:bg-main-red-hover"
                >
                    Takaisin
                </Link>
                <div className="space-y-6 mt-8">
                    <h1 className="text-3xl font-bold mb-8">Swoony Oy tietosuojaseloste</h1>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Johdanto</h2>
                        <p className="mb-4">
                            Tietosuoja tarkoittaa henkilön, jonka tietoja käsitellään, oikeuksien toteutumista henkilötietojen käsittelyssä.
                            Tietosuojan tarkoituksena on osoittaa, milloin ja millä edellytyksillä henkilötietoja voidaan käsitellä.
                            Henkilötieto puolestaan tarkoittaa tietoja, jotka liittyvät tunnistettuun tai tunnistettavissa olevaan luonnolliseen henkilöön.
                        </p>
                        <p className="mb-4">
                            Swoonyn toiminnan kannalta on välttämätöntä käsitellä henkilötietoja. Noudatamme menettelytapoja ja prosesseja,
                            joilla suojataan henkilötietoja tietosuojalainsäädännön vaatimusten mukaisesti.
                        </p>
                        <p>Rekisterinpitäjänä toimii Swoony Oy.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Miksi käsittelemme henkilötietoja ja millä perusteella?</h2>
                        <h3 className="text-xl font-medium mb-2">Henkilötietojen käsittelyn tarkoitukset</h3>
                        <p className="mb-2">Keräämme ja käsittelemme henkilötietoja, jotta:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>potentiaalisille asiakkaille ja nykyisille asiakkaille voidaan markkinoida ja viestiä meidän tai valitsemiemme kolmansien osapuolten palveluista</li>
                            <li>voimme hoitaa sopimuksista johtuvat velvoitteemme</li>
                            <li>voimme kehittää palveluitamme ja parantaa palveluidemme käyttökokemusta</li>
                            <li>palveluitamme voidaan hallinnoida</li>
                            <li>voimme ennaltaehkäistä ja selvittää mahdollisia väärinkäytöksiä</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-medium mb-2">Henkilötietojen käsittelyn oikeusperuste</h3>
                        <p className="mb-4">
                            Pyydämme sinulta tietyissä tilanteissa suostumusta henkilötietojesi käsittelyyn. Näitä tilanteita ovat esimerkiksi suostumus sähköiseen suoramarkkinointiin tai joidenkin erityisryhmiin kuuluvien tietojen käsittely.
                        </p>
                        <p className="mb-4">
                            Kun markkinoimme palveluitamme tai tuotteitamme markkinointikohderyhmiin kuuluville henkilöille, käsittelemme henkilötietoja oikeutetun edun perusteella.
                        </p>
                        <p className="mb-4">
                            Meillä on myös oikeutettu etu kehittää tuotteitamme ja palveluitamme.
                        </p>
                        <p>
                            Hoitaessamme sopimuksista johtuvat velvoitteemme käsittelemme henkilötietoja sopimuksen, kuten palvelu-, työ- tai toimeksiantosopimuksen perusteella. Lisäksi käsittelemme henkilötietoja täyttääksemme lainsäädännöstä johtuvat velvoitteemme.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Mitä tietoja keräämme?</h2>
                        <p className="mb-4">Keräämme tässä tietosuojaselosteessa määriteltyjen käyttötarkoitusten kannalta tarpeellisia tietoja:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>A: Meille antamasi tiedot: Sivustoilla ja palvelussamme kysytään esimerkiksi yhteystietojasi tilatessasi uutiskirjeen, ilmoittautuessasi tapahtumaan, jättäessäsi palautetta tai yhteydenottopyynnön.</li>
                            <li>B: Tiedot, joita saamme muilta: Saatamme saada tietoja sinusta kumppaneiltamme, kuten tiedon mainoskampanjamme onnistumisesta.</li>
                            <li>C: Palveluiden käytöstä havainnoidut ja johdetut tekniset tiedot: Käytämme erilaisia teknologioita (mukaan lukien evästeitä) kerätäksemme ja säilyttääksemme tietoa.</li>
                            <li>D: Muista lähteistä kerätyt tiedot: Keräämme henkilötietoja julkisesti saatavilla olevista lähteistä.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Kuinka kauan käyttäjien tietoja säilytetään?</h2>
                        <p>
                            Säilytämme käyttäjien henkilötietoja vain niin kauan kuin niitä tarvitaan palvelun tarjoamista varten tai lain salliman enimmäisajan.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Kenelle voimme jakaa tietojasi?</h2>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Muut käyttäjät: Kun olet tarjoamamme palvelun käyttäjä, luovutat tietoja muille käyttäjille.</li>
                            <li>Palveluntarjoajat: Siirrämme henkilötietoja ainoastaan siinä laajuudessa kuin kolmannet osapuolet tarvitsevat pääsyn käsittelemiimme henkilötietoihin.</li>
                            <li>Oikeudellisista syistä: Henkilötietojasi voidaan luovuttaa toimivaltaisen viranomaisen esittämien vaatimusten ja lakiin perustuvien edellytysten mukaisesti.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Automatisoitu päätöksenteko ja profilointi</h2>
                        <p className="mb-4">
                            Automatisoidulla päätöksenteolla tarkoitetaan päätöstä, joka perustuu automaattiseen käsittelyyn ja jolla on henkilöä koskevia oikeusvaikutuksia tai joka vaikuttaa häneen merkittävästi.
                        </p>
                        <p>
                            Profiloinnilla puolestaan tarkoitetaan automaattisesti tapahtuvaa henkilötietojen käsittelyä, johon liittyy esimerkiksi henkilön kiinnostuksen kohteiden tai käyttäytymisen arviointia tai ennakointia.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Kansainväliset tietojen siirrot</h2>
                        <p className="mb-4">
                            Pyrimme toteuttamaan palvelut ja käsittelemään henkilötietoja EU- tai ETA-alueella sijaitsevia toimijoita ja palveluita hyödyntäen.
                        </p>
                        <p>
                            Palveluita saatetaan kuitenkin joissakin tapauksissa toteuttaa myös muualla sijaitsevia toimijoita käyttäen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Tietojen suojaus</h2>
                        <p>
                            Tietoturva varmistetaan asianmukaisilla hallinnollisilla, teknisillä ja fyysisillä suojaustoimilla.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Alaikäiset</h2>
                        <p>
                            Tarjoamamme palvelu ei ole suunnattu alaikäisille emmekä kerää alaikäisten henkilötietoja.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Kolmansien palvelut</h2>
                        <p>
                            Tämä tietosuojaseloste soveltuu vain meidän tarjoamaamme palveluun emmekä ole vastuussa muiden palveluiden tietosuojakäytännöistä.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Tietosuojaselosteen muuttaminen</h2>
                        <p>
                            Voimme muuttaa tätä tietosuojaselostetta. Jos tietosuojaselosteeseen tulee muutoksia, ilmoitamme näistä muutoksista aina tässä tietosuojaselosteessa.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Sinun oikeutesi</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-medium mb-2">Tarkastusoikeus</h3>
                                <p>Sinulla on oikeus tarkastaa, mitä sinua koskevia tietoja yhteystietorekisteriin on talletettu.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium mb-2">Oikeus vaatia tiedon oikaisemista</h3>
                                <p>Sinulla on oikeus vaatia väärän, epätarkan, epätäydellisen, vanhentuneen tai tarpeettoman tiedon korjaamista tai täydentämistä.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium mb-2">Oikeus vaatia tiedon poistamista</h3>
                                <p>Voit pyytää meitä poistamaan henkilötietosi järjestelmistämme. Suoritamme pyyntösi mukaiset toimenpiteet, mikäli meillä ei ole oikeutettua syytä olla poistamatta tietoa.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium mb-2">Oikeus rajoittaa tiedon käsittelyä</h3>
                                <p>Voit pyytää meitä rajoittamaan tiettyjen henkilötietojesi käsittelyjä. Tietojen käsittelyn rajoittamista koskeva pyyntö saattaa johtaa rajoitetumpiin mahdollisuuksiin käyttää internetsivujamme sekä palveluitamme.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium mb-2">Oikeus vastustaa tiedon käsittelyä</h3>
                                <p>Voit myös pyytää rajoituksia henkilötietojesi käsittelyyn, mikäli tietojasi käsitellään muihin tarkoituksiin kuin palvelumme suorittamiseksi tai laista aiheutuvan velvollisuuden täyttämiseksi.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium mb-2">Oikeus siirtää tiedot järjestelmästä toiseen</h3>
                                <p>Sinulla on oikeus saada henkilötietosi meiltä jäsennellyssä ja yleisesti käytetyssä muodossa, jotta voit välittää tiedot toiselle rekisterinpitäjälle.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium mb-2">Oikeus peruuttaa suostumus</h3>
                                <p>Mikäli tietojesi käsittely perustuu suostumukseen, sinulla on oikeus peruuttaa suostumus milloin tahansa.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium mb-2">Oikeuksiesi käyttäminen</h3>
                                <p className="mb-4">Voit käyttää oikeuksiasi ottamalla yhteyttä asiakaspalveluun. Voimme pyytää lisätietoja, jotka ovat tarpeen henkilöllisyytesi varmentamiseksi.</p>
                                <p>Mikäli koet henkilötietojesi käsittelyn olevan ristiriidassa voimassa olevan lainsäädännön kanssa, voit tehdä valituksen paikalliselle tietosuojavalvontaviranomaiselle.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4">Kehen voin ottaa yhteyttä?</h2>
                        <p>
                            Yhteyttä tietosuojaa koskevissa asioissa voit ottaa asiakaspalveluumme{' '}
                            <a href="mailto:info@swoony.io" className="text-main-blue hover:underline">
                                info@swoony.io
                            </a>
                        </p>
                    </section>

                    <Link
                        href="/"
                        className="inline-block mt-8 py-2 bg-main-blue text-white text-md font-semibold px-8 rounded-full hover:bg-main-red-hover"
                    >
                        Takaisin
                    </Link>
                </div>
            </div>

            <Footer />
        </>
    );
}
