import React, { FC } from "react";
import { Quicksand } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const quickSand = Quicksand({
    weight: ["700"],
    style: ["normal"],
    subsets: ["latin"],
});

export default function Terms() {
    return <div className="p-8">

        <Link href="/">
            <div className="pointer-events-none select-none flex place-items-center gap-2 lg:pointer-events-auto py-4 m">
                <Image
                    src="/swoony.svg"
                    alt="Swoony: Dating app"
                    width={32}
                    height={24}
                    priority
                />
                <div
                    className={`${quickSand.className} text-xl font-semibold text-main-blue uppercase tracking-wide`}
                >
                    Swoony
                </div>
            </div>
        </Link>
        <h2 className="py-2 text-2xl font-bold">Asiakkaana sitoutuminen</h2>

        <p className="py-2">
            Sinulla ei ole oikeutta luoda tiliä tai käyttää palveluita, elleivät kaikki seuraavat seikat pidä
            paikkaansa kohdallasi, ja käyttämällä palveluitamme vakuutat ja takaat, että:
        </p>
        <ul className="py-2">
            <li>1. Olet vähintään 18-vuotias yksityishenkilö (eli et ole oikeushenkilö, kumppanuus- tai muu liiketoimintayksikkö)</li>
            <li>2. Et ole tehnyt syytteeseen asetettavaa rikosta (tai vastaavan vakavaa rikosta), seksuaalirikosta tai mitään väkivaltaa tai väkivallan uhkaa sisältävää rikosta, eikä sinua ole tuomittu sellaisesta, ellet ole saanut armahdusta väkivallattomasta rikoksesta ja olemme päättäneet, että et todennäköisesti aiheuta uhkaa muille palveluidemme käyttäjille</li>
            <li>3. Vakuutat kaikki antamasi tiedot oikeiksi, etkä jätä kertomatta olennaisia asioita.</li>
            <li>4. Lupaat vastata kaikkiin kyselylomakkeen kysymyksiin rehellisesti ja vilpittömästi.</li>
            <li>5. Sinulla ei ole enempää kuin yksi tili palveluissamme.</li>
            <li>6. Me emme ole aiemmin poistaneet sinua palveluistamme tai tytäryhtiöidemme palveluista, ellei sinulla ole nimenomaista kirjallista lupaa uuden tilin luomiseen.</li>
            <li>7. Et ole parisuhteessa asiakkuuden alkamisajankohtana.</li>
            <li>8. Profiilikuvasi ovat aitoja ja enintään 12kk vanhoja.</li>
        </ul>
        <p className="py-2">
            Jos et enää täytä näitä vaatimuksia, kaikki oikeutesi käyttää palveluitamme tai
            järjestelmiämme peruutetaan automaattisesti, sinun on välittömästi poistettava tilisi, ja
            pidätämme oikeuden poistaa pääsysi palveluihimme ilman varoitusta.
        </p>

        <h2 className="py-2 text-2xl font-bold">Suostumukset</h2>
        <p className="py-2">Suostut:</p>
        <ul className="py-2">
            <li>1. Noudattamaan näitä ehtoja ja tarkistamaan tämän sivun aika ajoin varmistaaksesi, että olet tietoinen muutoksista</li>
            <li>2. Noudattamaan kaikkia sovellettavia lakeja, mukaan lukien rajoituksetta tietosuojalait, immateriaalioikeuslait, roskapostin vastaiset lait ja sääntelyvaatimukset</li>
            <li>3. Ryhtymään kohtuullisiin toimenpiteisiin kirjautumistietojesi suojaamiseksi.</li>
        </ul>

        <h2 className="py-2 text-2xl font-bold">Rajoitukset</h2>
        <p className="py-2">Suostut siihen, että et:</p>
        <ul className="py-2">
            <li>1. Anna väärää tietoa henkilöllisyydestäsi, iästäsi tai yhteyksistäsi johonkin tiettyyn henkilöön tai yhteisöön</li>
            <li>2. Käytä palveluita tavalla, joka vahingoittaa palveluita tai estää muita käyttäjiä käyttämästä niitä</li>
            <li>3. Käytä palveluitamme tavalla, joka häiritsee tai vaikuttaa negatiivisesti alustaan, palvelimiin tai palveluidemme verkkoihin</li>
            <li>4. Käytä palveluitamme mihinkään haitalliseen, laittomaan tai rikolliseen tarkoitukseen, mukaan lukien, mutta ei rajoittuen, virtuaalituotteiden käyttö rahanpesuun tai muihin talousrikoksiin</li>
            <li>5. Häiritse, kiusaa, vainoa, pelottele, pahoinpitele, halvenna, vahingoita tai muuten käyttäydy väärin tai aiheuta psykologista vahinkoa</li>
            <li>6. Kalastele salasanoja mihinkään tarkoituksiin tai kerää henkilötietoja muilta käyttäjiltä kaupalliseen tai laittomaan tarkoitukseen tai levitä toisen henkilön henkilökohtaisia tietoja ilman hänen lupaansa</li>
            <li>7. Pyydä rahaa tai muuta arvokasta toiselta käyttäjältä joko lahjana, lainana tai korvauksena</li>
            <li>8. Käytä toisen käyttäjän tiliä</li>
            <li>9. Käytä palveluitamme petokseen, pyramidihuijaukseen tai muuhun vastaavaan käytäntöön</li>
            <li>10. Lähetä viruksia tai muuta haitallista koodia tai muuten vaaranna palvelun turvallisuutta</li>
            <li>11. Käytä tai kehitä mitään kolmannen osapuolen sovelluksia, jotka ovat vuorovaikutuksessa palveluidemme tai jäsensisältömme tai tietojen kanssa ilman kirjallista suostumustamme, mukaan lukien, mutta ei rajoittuen, tekoäly tai koneoppimisjärjestelmät</li>
            <li>12. Luo uutta tiliä sen jälkeen, kun olemme keskeyttäneet tai lopettaneet tilisi, ellet saa siihen nimenomaista lupaamme</li>
            <li>13. Lähetä ilmoitusta jäsenen käytöksestä tai sisällöstä valheellisin, harhaanjohtavin tai muutoin ilmeisen perusteettomin perustein, tai väärinkäytä mitään saatavilla olevaa ilmoitus- tai valitusjärjestelmää.</li>
        </ul>

        <h2 className="py-2 text-2xl font-bold">Treffien turvallisuus</h2>
        <p className="py-2">
            Asiantuntijamme ei koskaan järjestä treffejä ei-julkisessa paikassa. Jos treffikumppanisi painostaa sinua vaihtamaan paikkaa yksityiseen paikkaan tai siirtämään treffipaikkaa ennenaikaisesti heidän kotiinsa, lopeta treffi ja lähde. Kerro meille välittömästi asiasta.
        </p>
        <p className="py-2">
            Asiantuntijamme todentaa käyttäjän oikeellisuuden videoesittelyn sekä profiilikuvien perusteella. Jos epäilemme epärehellisyyttä, kontaktoimme käyttäjää asiasta henkilökohtaisesti.
        </p>
        <p className="py-2">
            Asiakas on itse vastuussa Swoony-treffikokemuksestaan, ja Swoony ei ole vastuussa mistään vahingoista tai haitoista, jotka saattavat ilmetä treffien aikana tai niiden jälkeen.
        </p>

        <h2 className="py-2 text-2xl font-bold">Treffipalvelun Käyttöehdot ja Maksukäytännöt</h2>
        <p className="py-2">
            Treffipalvelumme tarjoaa mahdollisuuden löytää sopivia treffikumppaneita maksamalla kertaluonteisen maksun ennen prosessin aloittamista. Maksu suoritetaan ennen kuin asiantuntijamme alkavat etsiä sinulle sopivaa treffikumppania.
        </p>

        <h2 className="py-2 text-2xl font-bold">Peruutukset ja Ilmoitukset</h2>
        <p className="py-2">
            Jos et pääse osallistumaan sovituille treffeille, ilmoita asiasta mahdollisimman pian. Näin voimme siirtää treffien ajankohtaa ja varmistaa, että molemmille osapuolille löytyy sopiva uusi aika. Ilmoituksen tulee tapahtua vähintään 24 tuntia ennen sovittua ajankohtaa.
        </p>
        <p className="py-2">
            Jos emme löydä sopivaa treffikumppania 3 kuukauden sisällä maksamisesta, sinulla on oikeus saada treffimaksu kokonaan takaisin ja keskeyttää treffikumppanin etsintä.
        </p>

        <h2 className="py-2 text-2xl font-bold">Maksukäytännöt</h2>
        <p className="py-2">Seuraavissa tilanteissa käyttäjä maksaa treffimaksun, vaikka treffit eivät toteutuisi:</p>
        <ul className="py-2">
            <li>Käyttäjä ei saavu sovitusti treffipaikalle:</li>
            <ul>
                <li>Jos käyttäjä jättää saapumatta sovittuun paikkaan ilman etukäteisilmoitusta, treffimaksua ei palauteta.</li>
            </ul>
            <li>Käyttäjä peruuttaa treffit:</li>
            <ul>
                <li>Jos käyttäjä peruuttaa treffit, treffimaksua ei palauteta.</li>
            </ul>
        </ul>

        <h2 className="py-2 text-2xl font-bold">Poikkeustilanteet ja Maksuttomuus</h2>
        <p className="py-2">
            Seuraavissa tilanteissa käyttäjälle ei koidu treffimaksua:
        </p>
        <ul className="py-2">
            <li>Vastapuoli ei saavu sovitusti treffipaikalle:</li>
            <ul>
                <li>Jos vastapuoli jättää saapumatta sovittuun paikkaan, käyttäjälle ei aiheudu kustannuksia.</li>
            </ul>
            <li>Vastapuoli peruuttaa treffit:</li>
            <ul>
                <li>Jos vastapuoli peruuttaa treffit, käyttäjälle ei koidu treffimaksua.</li>
            </ul>
            <li>Treffikumppani ei vastaa odotuksia tai on antanut virheellisiä tietoja:</li>
            <ul>
                <li>Jos treffikumppani ei vastaa ollenkaan odotuksia tai on ilmoittanut selvästi virheellistä tietoa profiilia täyttäessään, käyttäjälle ei aiheudu kustannuksia.</li>
            </ul>
        </ul>

        <h2 className="py-2 text-2xl font-bold">Lisäehdot ja Yleiset Käytännöt</h2>
        <ul className="py-2">
            <li>Maksutapa: Treffimaksu suoritetaan ennakkoon palvelun tilauksen yhteydessä. Hyväksytyt maksutavat ilmoitetaan tilausvaiheessa.</li>
            <li>Tietosuoja: Käyttäjien tiedot käsitellään luottamuksellisesti ja tietosuojalainsäädännön mukaisesti.</li>
            <li>Vastuu: Treffipalvelu ei ole vastuussa kolmansien osapuolten toiminnasta tai treffien onnistumisesta, mutta pyrkii varmistamaan kaikkien osapuolten tyytyväisyyden ja turvallisuuden.</li>
        </ul>

        <p className="py-2">
            Olemme sitoutuneet tarjoamaan laadukasta ja luotettavaa palvelua. Mikäli sinulla on
            kysyttävää tai tarvitset lisätietoja, asiakaspalvelumme auttaa mielellään.
        </p>

        <p className="py-2">
            Tervetuloa käyttämään treffipalveluamme!
        </p>

        <h2 className="py-2 text-2xl font-bold">Yhteystiedot</h2>
        <ul className="py-2">
            <li>Asiakaspalvelu: info@swoony.io</li>
            <li>Puhelin: 045 229 6866</li>
            <li>Aukioloajat: Ma-Pe 10:00 - 17:00</li>
        </ul>

        <h2 className="py-2 text-2xl font-bold">Yleiset turvallisuusmuistutukset</h2>
        <ul className="py-2">
            <li>Tiedät huumeiden ja alkoholin käytön rajasi paremmin kuin kukaan muu. Älä anna mätsisi painostaa sinua mihinkään, mikä sinusta tuntuu epämukavalta. Jos mätsisi yrittää painostaa sinua käyttämään huumeita tai juomaan enemmän kuin haluat, lopeta treffit.</li>
            <li>Älä koskaan jätä juomia tai henkilökohtaisia tavaroita valvomatta.</li>
            <li>Kerro ystävälle tai perheenjäsenelle treffisuunnitelmistasi, mukaan lukien milloin ja minne olet menossa. Jos jokin muuttuu illan aikana, ilmoita siitä heti.</li>
            <li>Varmista, että matkapuhelimesi on ladattu täyteen ja pidä se aina mukanasi.</li>
            <li>Älä jätä huomioimatta omia vaistojasi. Jos tilanne tekee sinut epämukavaksi, on ok jättää treffit kesken.</li>
            <li>Älä koskaan anna kenellekään arkaluontoisia henkilökohtaisia tietoja, kuten sosiaaliturvatunnusta, luottokortin numeroa tai pankkitietoja, riippumatta siitä, miksi treffikumppani sanoo tarvitsevansa sitä.</li>
            <li>Älä koskaan lähetä rahaa tai henkilötietoja verkossa. Jos toinen Swoony-käyttäjä pyytää sinulta rahaa, ilmoita siitä meille välittömästi.</li>
            <li>On järkevää ja oikeutesi mukaista keskustella rehellisesti kumppanisi kanssa seksuaalisesta kontaktista ennen sen aloittamista, mukaan lukien kysyminen, milloin joku on viimeksi testattu sukupuolitautitestin varalta.</li>
            <li>Oikein ja johdonmukaisesti käytettynä kondomit ja muut suojat voivat vähentää sukupuolitautien, kuten HIV:n, tartunnan tai leviämisen riskiä. On kuitenkin mahdollista saada tietyt sukupuolitaudit joutuessaan kosketuksiin kumppanisi ihon kanssa, vaikka käytät suojaa.</li>
            <li>Kaiken seksuaalisen toiminnan on aloitettava suostumuksella. Suullinen viestintä voi auttaa sinua ja kumppaniasi varmistamaan, että kunnioitatte toistenne rajoja. Muista, että suostumus voidaan peruuttaa milloin tahansa. Älä koskaan jatka, jos kumppanisi on epävarma tai jos hän ei pysty suostumaan alkoholin tai huumeiden takia.</li>
        </ul>
        <Link
            href="/"
            className="inline-block my-4 py-2 bg-main-blue text-white text-md font-semibold px-8 rounded-full hover:bg-main-red-hover"
        >
            Takaisin
        </Link>
    </div>
}
