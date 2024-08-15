import React from "react";
import { Quicksand } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const quickSand = Quicksand({
    weight: ["700"],
    style: ["normal"],
    subsets: ["latin"],
});

export default function PrivacyPolicy() {
    return (
        <div className="p-8 text-black">
            <Link href="/">
                <div className="pointer-events-none select-none flex place-items-center gap-2 lg:pointer-events-auto py-4 m">
                    <Image
                        src="/swoony.svg"
                        alt="Swoony: Dating app"
                        width={32}
                        height={24}
                    />
                    <div
                        className={`${quickSand.className} text-xl font-semibold text-main-blue uppercase tracking-wide`}
                    >
                        Swoony
                    </div>
                </div>
            </Link>
            <h2 className="py-2 text-2xl font-bold">Johdanto</h2>
            <p className="py-2">
                Tietosuoja tarkoittaa henkilön, jonka tietoja käsitellään, oikeuksien toteutumista henkilötietojen käsittelyssä. Tietosuojan tarkoituksena on osoittaa, milloin ja millä edellytyksillä henkilötietoja voidaan käsitellä. Henkilötieto puolestaan tarkoittaa tietoja, jotka liittyvät tunnistettuun tai tunnistettavissa olevaan luonnolliseen henkilöön.
            </p>
            <p className="py-2">
                Swoonyn toiminnan kannalta on välttämätöntä käsitellä henkilötietoja. Noudatamme menettelytapoja ja prosesseja, joilla suojataan henkilötietoja tietosuojalainsäädännön vaatimusten mukaisesti. Tämä tietosuojaseloste sisältää tietojen keräämisen perusteet ja sen, mihin kerättyjä tietoja käytetään. Esimerkkejä sovellustilanteista ovat palveluidemme käyttäminen. Tietosuojaselostetta sovelletaan myös työntekijöidemme ja työnhakijoiden sekä muiden yhteistyökumppaniemme henkilöstön henkilötietojen käsittelyyn.
            </p>
            <p className="py-2">Rekisterinpitäjänä toimii Swoony Oy.</p>

            <h2 className="py-2 text-2xl font-bold">Miksi käsittelemme henkilötietoja ja millä perusteella?</h2>
            <h3 className="py-2 text-xl font-bold">Henkilötietojen käsittelyn tarkoitukset</h3>
            <p className="py-2">
                Keräämme ja käsittelemme henkilötietoja, jotta:
            </p>
            <ul className="list-disc pl-5">
                <li className="py-2">potentiaalisille asiakkaille ja nykyisille asiakkaille voidaan markkinoida ja viestiä meidän tai valitsemiemme kolmansien osapuolten palveluista esimerkiksi tiedotteilla, uutiskirjeillä, erilaisilla markkinointikampanjoilla tai kutsuilla tapahtumiin.</li>
                <li className="py-2">voimme hoitaa sopimuksista johtuvat velvoitteemme niin asiakkaita, yhteistyökumppaneita kuin esimerkiksi työntekijöitämmekin kohtaan.</li>
                <li className="py-2">voimme kehittää palveluitamme ja parantaa palveluidemme käyttökokemusta.</li>
                <li className="py-2">palveluitamme voidaan hallinnoida.</li>
                <li className="py-2">voimme ennaltaehkäistä ja tietyissä tilanteissa selvittää mahdollisia väärinkäytöksiä.</li>
            </ul>

            <h3 className="py-2 text-xl font-bold">Henkilötietojen käsittelyn oikeusperuste</h3>
            <p className="py-2">
                Pyydämme sinulta tietyissä tilanteissa suostumusta henkilötietojesi käsittelyyn. Näitä tilanteita ovat esimerkiksi suostumus sähköiseen suoramarkkinointiin tai joidenkin erityisryhmiin kuuluvien tietojen käsittely.
            </p>
            <p className="py-2">
                Kun markkinoimme palveluitamme tai tuotteitamme markkinointikohderyhmiin kuuluville henkilöille, käsittelemme henkilötietoja oikeutetun edun perusteella.
            </p>
            <p className="py-2">
                Meillä on myös oikeutettu etu kehittää tuotteitamme ja palveluitamme.
            </p>
            <p className="py-2">
                Hoitaessamme sopimuksista johtuvat velvoitteemme käsittelemme henkilötietoja sopimuksen, kuten palvelu-, työ- tai toimeksiantosopimuksen perusteella. Lisäksi käsittelemme henkilötietoja täyttääksemme lainsäädännöstä johtuvat velvoitteemme.
            </p>

            <h2 className="py-2 text-2xl font-bold">Mitä tietoja keräämme?</h2>
            <p className="py-2">
                Keräämme tässä tietosuojaselosteessa määriteltyjen käyttötarkoitusten kannalta tarpeellisia tietoja:
            </p>
            <ul className="list-disc pl-5">
                <li className="py-2"><strong>A) Meille antamasi tiedot:</strong> Sivustoilla ja palvelussamme kysytään esimerkiksi yhteystietojasi tilatessasi uutiskirjeen, ilmoittautuessasi tapahtumaan, jättäessäsi palautetta tai yhteydenottopyynnön.</li>
                <li className="py-2"><strong>B) Tiedot, joita saamme muilta:</strong> Saatamme saada tietoja sinusta kumppaneiltamme, kuten tiedon mainoskampanjamme onnistumisesta.</li>
                <li className="py-2"><strong>C) Palveluiden käytöstä havainnoidut ja johdetut tekniset tiedot:</strong> Käytämme erilaisia teknologioita (mukaan lukien evästeitä) kerätäksemme ja säilyttääksemme tietoa.</li>
                <li className="py-2"><strong>D) Muista lähteistä kerätyt tiedot:</strong> Keräämme henkilötietoja julkisesti saatavilla olevista lähteistä.</li>
            </ul>

            <h2 className="py-2 text-2xl font-bold">Kuinka kauan käyttäjien tietoja säilytetään?</h2>
            <p className="py-2">
                Säilytämme käyttäjien henkilötietoja vain niin kauan kuin niitä tarvitaan palvelun tarjoamista varten tai lain salliman enimmäisajan.
            </p>

            <h2 className="py-2 text-2xl font-bold">Kenelle voimme jakaa tietojasi?</h2>
            <ul className="list-disc pl-5">
                <li className="py-2"><strong>Muut käyttäjät:</strong> Kun olet tarjoamamme palvelun käyttäjä, luovutat tietoja muille käyttäjille.</li>
                <li className="py-2"><strong>Palveluntarjoajat:</strong> Siirrämme henkilötietoja ainoastaan siinä laajuudessa kuin kolmannet osapuolet tarvitsevat pääsyn käsittelemiimme henkilötietoihin.</li>
                <li className="py-2"><strong>Oikeudellisista syistä:</strong> Henkilötietojasi voidaan luovuttaa toimivaltaisen viranomaisen esittämien vaatimusten ja lakiin perustuvien edellytysten mukaisesti.</li>
            </ul>

            <h2 className="py-2 text-2xl font-bold">Automatisoitu päätöksenteko ja profilointi</h2>
            <p className="py-2">
                Automatisoidulla päätöksenteolla tarkoitetaan päätöstä, joka perustuu automaattiseen käsittelyyn ja jolla on henkilöä koskevia oikeusvaikutuksia tai joka vaikuttaa häneen merkittävästi.
            </p>
            <p className="py-2">
                Profiloinnilla puolestaan tarkoitetaan automaattisesti tapahtuvaa henkilötietojen käsittelyä, johon liittyy esimerkiksi henkilön kiinnostuksen kohteiden tai käyttäytymisen arviointia tai ennakointia.
            </p>

            <h2 className="py-2 text-2xl font-bold">Kansainväliset tietojen siirrot</h2>
            <p className="py-2">
                Pyrimme toteuttamaan palvelut ja käsittelemään henkilötietoja EU- tai ETA-alueella sijaitsevia toimijoita ja palveluita hyödyntäen.
            </p>
            <p className="py-2">
                Palveluita saatetaan kuitenkin joissakin tapauksissa toteuttaa myös muualla sijaitsevia toimijoita käyttäen.
            </p>

            <h2 className="py-2 text-2xl font-bold">Tietojen suojaus</h2>
            <p className="py-2">
                Tietoturva varmistetaan asianmukaisilla hallinnollisilla, teknisillä ja fyysisillä suojaustoimilla.
            </p>

            <h2 className="py-2 text-2xl font-bold">Alaikäiset</h2>
            <p className="py-2">
                Tarjoamamme palvelu ei ole suunnattu alaikäisille emmekä erityisesti kerää alaikäisten henkilötietoja.
            </p>

            <h2 className="py-2 text-2xl font-bold">Kolmansien palvelut</h2>
            <p className="py-2">
                Tämä tietosuojaseloste soveltuu vain meidän tarjoamaamme palveluun emmekä ole vastuussa muiden palveluiden tietosuojakäytännöistä.
            </p>

            <h2 className="py-2 text-2xl font-bold">Tietosuojaselosteen muuttaminen</h2>
            <p className="py-2">
                Voimme muuttaa tätä tietosuojaselostetta. Jos tietosuojaselosteeseen tulee muutoksia, ilmoitamme näistä muutoksista aina tässä tietosuojaselosteessa.
            </p>

            <h2 className="py-2 text-2xl font-bold">Sinun oikeutesi</h2>
            <h3 className="py-2 text-xl font-bold">Tarkastusoikeus</h3>
            <p className="py-2">
                Sinulla on oikeus tarkastaa, mitä sinua koskevia tietoja yhteystietorekisteriin on talletettu.
            </p>
            <h3 className="py-2 text-xl font-bold">Oikeus vaatia tiedon oikaisemista</h3>
            <p className="py-2">
                Sinulla on oikeus vaatia väärän, epätarkan, epätäydellisen, vanhentuneen tai tarpeettoman tiedon korjaamista tai täydentämistä.
            </p>
            <h3 className="py-2 text-xl font-bold">Oikeus vaatia tiedon poistamista</h3>
            <p className="py-2">
                Voit pyytää meitä poistamaan henkilötietosi järjestelmistämme. Suoritamme pyyntösi mukaiset toimenpiteet, mikäli meillä ei ole oikeutettua syytä olla poistamatta tietoa.
            </p>
            <h3 className="py-2 text-xl font-bold">Oikeus rajoittaa tiedon käsittelyä</h3>
            <p className="py-2">
                Voit pyytää meitä rajoittamaan tiettyjen henkilötietojesi käsittelyjä. Tietojen käsittelyn rajoittamista koskeva pyyntö saattaa johtaa rajoitetumpiin mahdollisuuksiin käyttää internetsivujamme sekä palveluitamme.
            </p>
            <h3 className="py-2 text-xl font-bold">Oikeus vastustaa tiedon käsittelyä</h3>
            <p className="py-2">
                Voit myös pyytää rajoituksia henkilötietojesi käsittelyyn, mikäli tietojasi käsitellään muihin tarkoituksiin kuin palvelumme suorittamiseksi tai laista aiheutuvan velvollisuuden täyttämiseksi.
            </p>
            <h3 className="py-2 text-xl font-bold">Oikeus siirtää tiedot järjestelmästä toiseen</h3>
            <p className="py-2">
                Sinulla on oikeus saada henkilötietosi meiltä jäsennellyssä ja yleisesti käytetyssä muodossa, jotta voit välittää tiedot toiselle rekisterinpitäjälle.
            </p>
            <h3 className="py-2 text-xl font-bold">Oikeus peruuttaa suostumus</h3>
            <p className="py-2">
                Mikäli tietojesi käsittely perustuu suostumukseen, sinulla on oikeus peruuttaa suostumus milloin tahansa.
            </p>

            <h2 className="py-2 text-2xl font-bold">Oikeuksiesi käyttäminen</h2>
            <p className="py-2">
                Voit käyttää oikeuksiasi ottamalla yhteyttä asiakaspalveluun. Voimme pyytää lisätietoja, jotka ovat tarpeen henkilöllisyytesi varmentamiseksi.
            </p>
            <p className="py-2">
                Mikäli koet henkilötietojesi käsittelyn olevan ristiriidassa voimassa olevan lainsäädännön kanssa, voit tehdä valituksen paikalliselle tietosuojavalvontaviranomaiselle.
            </p>

            <h2 className="py-2 text-2xl font-bold">Kehen voin ottaa yhteyttä?</h2>
            <p className="py-2">
                Yhteyttä tietosuojaa koskevissa asioissa voit ottaa asiakaspalveluumme info@swoony.io.
            </p>

            <Link
                href="/"
                className="inline-block my-4 py-2 bg-main-blue text-white text-md font-semibold px-8 rounded-full hover:bg-main-red-hover"
            >
                Takaisin
            </Link>
        </div>
    );
}
