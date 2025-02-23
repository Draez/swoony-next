import React, { FC } from "react";
import { Quicksand } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

const quickSand = Quicksand({
    weight: ["700"],
    style: ["normal"],
    subsets: ["latin"],
});

export default function Terms() {
    return (
        <>
            <div className="p-8 max-w-4xl mx-auto">
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

                <div className="prose prose-lg max-w-none mt-8">
                    <h1 className="text-3xl font-bold mb-8">Swoony Oy käyttöehdot</h1>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Asiakkaana sitoutuminen</h2>
                        <p className="mb-4">
                            Sinulla ei ole oikeutta luoda tiliä tai käyttää palveluita, elleivät kaikki seuraavat seikat pidä paikkaansa kohdallasi,
                            ja käyttämällä palveluitamme vakuutat ja takaat, että:
                        </p>
                        <ul className="list-decimal pl-6 mb-6">
                            <li className="mb-2">Olet vähintään 18-vuotias yksityishenkilö (eli et ole oikeushenkilö, kumppanuus- tai muu liiketoimintayksikkö)</li>
                            <li className="mb-2">Et ole tehnyt syytteeseen asetettavaa rikosta (tai vastaavan vakavaa rikosta), seksuaalirikosta tai mitään väkivaltaa tai väkivallan uhkaa sisältävää rikosta</li>
                            <li className="mb-2">Vakuutat kaikki antamasi tiedot oikeiksi, etkä jätä kertomatta olennaisia asioita</li>
                            <li className="mb-2">Lupaat vastata kaikkiin kyselylomakkeen kysymyksiin rehellisesti ja vilpittömästi</li>
                            <li className="mb-2">Sinulla ei ole enempää kuin yksi tili palveluissamme</li>
                            <li className="mb-2">Me emme ole aiemmin poistaneet sinua palveluistamme</li>
                            <li className="mb-2">Et ole parisuhteessa asiakkuuden alkamisajankohtana</li>
                            <li className="mb-2">Profiilikuvasi ovat aitoja</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Suostumukset</h2>
                        <p>Suostut:</p>
                        <ul className="list-decimal pl-6 mb-6">
                            <li className="mb-2">Noudattamaan näitä ehtoja ja tarkistamaan tämän sivun aika ajoin varmistaaksesi, että olet tietoinen muutoksista</li>
                            <li className="mb-2">Noudattamaan kaikkia sovellettavia lakeja, mukaan lukien rajoituksetta tietosuojalait, immateriaalioikeuslait, roskapostin vastaiset lait ja sääntelyvaatimukset</li>
                            <li className="mb-2">Ryhtymään kohtuullisiin toimenpiteisiin kirjautumistietojesi suojaamiseksi</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Rajoitukset</h2>
                        <p className="mb-4">Suostut siihen, että et:</p>
                        <ul className="list-decimal pl-6 mb-6">
                            <li className="mb-2">Anna väärää tietoa henkilöllisyydestäsi, iästäsi tai yhteyksistäsi johonkin tiettyyn henkilöön tai yhteisöön</li>
                            <li className="mb-2">Käytä palveluita tavalla, joka vahingoittaa palveluita tai estää muita käyttäjiä käyttämästä niitä</li>
                            <li className="mb-2">Käytä palveluitamme tavalla, joka häiritsee tai vaikuttaa negatiivisesti alustaan, palvelimiin tai palveluidemme verkkoihin</li>
                            <li className="mb-2">Käytä palveluitamme mihinkään haitalliseen, laittomaan tai rikolliseen tarkoitukseen</li>
                            <li className="mb-2">Häiritse, kiusaa, vainoa, pelottele, pahoinpitele, halvenna, vahingoita tai muuten käyttäydy väärin</li>
                            <li className="mb-2">Kalastele salasanoja tai kerää henkilötietoja muilta käyttäjiltä</li>
                            <li className="mb-2">Pyydä rahaa tai muuta arvokasta toiselta käyttäjältä</li>
                            <li className="mb-2">Käytä toisen käyttäjän tiliä</li>
                            <li className="mb-2">Käytä palveluitamme petokseen tai pyramidihuijaukseen</li>
                            <li className="mb-2">Lähetä viruksia tai muuta haitallista koodia</li>
                            <li className="mb-2">Käytä tai kehitä kolmannen osapuolen sovelluksia ilman lupaa</li>
                            <li className="mb-2">Luo uutta tiliä sen jälkeen, kun olemme keskeyttäneet tilisi</li>
                            <li className="mb-2">Lähetä valheellisia ilmoituksia muista käyttäjistä</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Maksuehdot</h2>
                        <div className="space-y-4">
                            <p>Käyttäjä on henkilökohtaisesti vastuussa sopimuksen mukaisten maksujen maksamisesta Swoony Oy:lle. Tämä soveltuu myös tilanteissa, jossa maksajaksi on merkitty toinen henkilö.</p>
                            <p>Uuden sopimuksen solmimisen yhteydessä asiakas maksaa voimassa olevan hinnaston mukaisen hinnan.</p>
                            <p>Maksamalla kuukausitilauksen asiakas sitoutuu sopimukseen kuukauden ajaksi. Kun sopimus solmitaan toistaiseksi voimassa olevana, maksu maksetaa kuukausittain etukäteen automaattisella korttiveloituksella.</p>
                            <p>Automaattisessa korttiveloituksessa, asiakas vastaa siitä, että maksukortti on aktivoitu ja, että sopimuksen mukaiset maksut voidaan veloittaa automaattisesti maksukortilta sopimuksen voimassaoloajan.</p>
                            <p>Maksun velotus tapahtuu automaattisesti sovittuna eräpäivän ilman erilistä ilmoitusta. Mikäli veloitus epäonnistuu, sopimusta ei jatketa seuraavalle kuukaudelle.</p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Muutokset ehtoihin ja palveluntarjontaan</h2>
                        <div className="space-y-4">
                            <p>Swoony Oy:lla on oikeus tehdä muutoksia sopimusten kuukausimaksuihin, muihin maksuihin ja näihin ehtoihin.</p>
                            <p>Jos kuukausimaksu tehdään asiakkaalle haitallisia muutoksia, niistä ilmoitetaan asiakkaalle sähköpostitse tai tekstiviestillä vähintään (1) kuukausi ennen muutoksen voimaantuloa.</p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Peruuttamisoikeus</h2>
                        <div className="space-y-4">
                            <p>Tilaus ja jäsenyys uusiutuvat automaattisesti, paitsi jos perut sen. Swoony-apin tai Swoony-tilin poistaminen ei peru tilausta tai jäsenyyttä.</p>
                            <p>Kun perut tilauksesi tai jäsenyytesi, voit käyttää sitä kuukauden loppuun asti, mistä olet maksanut. Tilauksen peruminen ei oikeuta jälkikäteiseen maksunpalautukseen tilauksen tai jäsenyyden maksuista, eikä aiemmin maksettuja maksuja voida palauttaa peruutuspäivän perusteella.</p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Vastuuehdot</h2>
                        <div className="space-y-4">
                            <p>Asiakas on itse vastuussa Swoony-treffikokemuksestaan, ja Swoony ei ole vastuussa mistään vahingoista tai haitoista, jotka saattavat ilmetä treffien aikana tai niiden jälkeen.</p>
                            <p>Ilmoita meille välittömästi, jos treffikumppanisi käyttäytyy epäasiallisesti treffeillä niin ryhdymme toimenpiteisiin.</p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Asiakasviestintä ja markkinointiviestit</h2>
                        <div className="space-y-4">
                            <p>Asiakassuhteen ylläpitämiseksi viestimme sinulle asioista, jotka liittyvät kiinteästi niihin tuotteisiin tai palveluihin, jotka olet meiltä tilannut. Tällaisia viestejä ovat esimerkiksi tiedotteet hintojen ja palvelusisältöjen muutoksesta, sekä sellaiset viestit, jotka liittyvät palvelun toimittamiseen ja toimintaan. Asiakasviestit voidaan lähettää sähköisesti tai kirjeitse, eivätkä ne sisällä markkinointia.</p>
                            <p>Näiden asiakasviestien lisäksi voimme lähettää markkinointia sisältäviä viestejä sähköisesti. Markkinointiviesteistä saat kattavammin tietoa Swoonyn palveluista ja eduista.</p>
                            <p>Swoonyn asiakaseduista kerrotaan pääsääntöisesti sähköisten kanavien kautta.</p>
                            <p>Sähköistä suoramarkkinointia voidaan lähettää, mikäli olet antanut siihen luvan (markkinointilupa). Voit saada meiltä myös sähköistä suoramarkkinointia tilauksen aktivointiin tai profiilin täyttämiseen liittyen myös ilman erillistä markkinointilupaa. Mikäli kiellät sähköisen markkinoinnin, emme lähetä sinulle minkäänlaista markkinointia sisältäviä sähköisiä viestejä. Voit asettaa sähköisen markkinointikiellon itsepalvelussa tai asiakaspalvelumme kautta.</p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Yleiset turvallisuusmuistutukset</h2>
                        <div className="space-y-4">
                            <p>Tiedät huumeiden ja alkoholin käytön rajasi paremmin kuin kukaan muu. Älä anna mätsisi painostaa sinua mihinkään, mikä sinusta tuntuu epämukavalta. Jos mätsisi yrittää painostaa sinua käyttämään huumeita tai juomaan enemmän kuin haluat, lopeta treffit.</p>
                            <p>Älä koskaan anna kenellekään arkaluontoisia henkilökohtaisia tietoja, kuten sosiaaliturvatunnusta, luottokortin numeroa tai pankkitietoja, riippumatta siitä, miksi treffikumppani sanoo tarvitsevansa sitä.</p>
                            <p>Älä koskaan lähetä rahaa tai henkilötietoja verkossa. Jos toinen Swoony-käyttäjä pyytää sinulta rahaa, ilmoita siitä meille välittömästi.</p>
                            <p>On järkevää ja oikeutesi mukaista keskustella rehellisesti deittisi kanssa seksuaalisesta kontaktista ennen sen aloittamista, mukaan lukien kysyminen, milloin joku on viimeksi testattu sukupuolitautitestin varalta.</p>
                            <p>Oikein ja johdonmukaisesti käytettynä kondomit ja muut suojat voivat vähentää sukupuolitautien, kuten HIV:n, tartunnan tai leviämisen riskiä. On kuitenkin mahdollista saada tietyt sukupuolitaudit joutuessaan kosketuksiin kumppanisi ihon kanssa, vaikka käytät suojaa.</p>
                            <p>Kaiken seksuaalisen toiminnan on aloitettava suostumuksella. Suullinen viestintä voi auttaa sinua ja kumppaniasi varmistamaan, että kunnioitatte toistenne rajoja. Muista, että suostumus voidaan peruuttaa milloin tahansa. Älä koskaan jatka, jos kumppanisi on epävarma tai jos hän ei pysty suostumaan alkoholin tai huumeiden takia.</p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Yhteystiedot</h2>
                        <p className="mb-2">Asiakaspalvelu: info@swoony.io</p>
                        <p className="mb-2">Puhelin: 045 229 6866</p>
                        <p className="mb-2">Aukioloajat: Ma-Pe 10:00 - 17:00</p>
                    </section>
                </div>

                <Link
                    href="/"
                    className="inline-block mt-8 py-2 bg-main-blue text-white text-md font-semibold px-8 rounded-full hover:bg-main-red-hover"
                >
                    Takaisin
                </Link>
            </div>
            <Footer />
        </>
    );
}
