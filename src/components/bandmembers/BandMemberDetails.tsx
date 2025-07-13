
import React from "react";
import "./BandMemberDetails.css"

export interface MemberConfig {
    n:number,
    responsibility:string,
    name:string;
    xOffset:number;
    yOffset:number;
    width:number;
    height:number;
    contents:string;
}

export const MemberConfigList = [
    {
        n:0,
        name:"Severi",
        responsibility:"Composing - Lyrics - Vocals - Guitars - Keyboards - Synths",
        xOffset:-260,
        yOffset:-100,
        width:1200,
        height:600,
        contents: "Äänitteen kappaleiden kirjoittaja, sanoitusten sanoittaja, soololaulujen laulaja ja karonkkapizzojen maksaja Severi Vapalahti vietti vuosia kärsien kylmyyttä ja nälkää, noita miesten tärkeimpiä tunteita, kunnes näin ei enää ollut. Vaikka ”Talviuni”-äänite on useiden taiteilijoiden yhteistyöstä syntynyt, ovat Severin kappaleet ja näkemys se runko, jonka päälle kaikki muu rakentui. Paras kuvaus Severin tekemästä työstä on musiikki, jota tällä äänitteellä kuullaan. Toisiksi paras kuvaus voisi olla jotain apinanleipäpuun, auringonlaskun ja ykkösoluen väliltä. Soololaulujen laulamisen lisäksi Severi soitti äänitteelle kitaraa, syntetisaattoreita ja flyygeliä. Muulla taiteellisella urallaan Severi soittaa bassoa Sleazer-yhtyeessä sekä kitaraa Barricades-yhtyeessä."
    }, 
    {
        n:1,
        name:"Sandy",
        responsibility:"Guitars - Beats & Styles",
        xOffset:190,
        yOffset:80,
        width:400,
        height:300,
        contents: "Vaikka Santeri ”Sändels” Laaksosen on joskus kuultu pyytävän ”leipää”, hän ei ole missään nimessä leipuri tai kuulu mihinkään muuhun jauhojengiin. Tällä äänitteellä Sändels on soittanut tuotannollisia kitaroita sekä tuottanut syntetisaattorisaundeja eri kappaleisiin. Hän on toiminut myös yleisenä hääräilijä ja konsulttina eri äänityssessiossa sekä usein niiden ulkopuolellakin. Muulla taiteellisella urallaan Sändels soittaa kitaraa Sleazer-yhtyeessä. Aiemmin hän vaikutti kulttimainetta nauttineessa Meltdown Wankers -orkesterissa. Santeri ei ole sukua Matti Laaksoselle."
    }, 
    {
        n:2,
        responsibility:"Mixing",
        name:"Juuso",
        xOffset:175,
        yOffset:220,
        width:600,
        height:400,
        contents:"Miksaaja, ääniteknikko, signaalianalyytikko ja tekninen tuottaja, joka tietää, miten banaani otetaan haltuun. Sisäpiirissä kuiskitaan, että Juuso on tarunhohtoisen ”jaguaari superpositiossa”-ilmaisun kehittäjä, mutta täyttä varmuutta asiasta ei ole saatu. Runollisesti Juuson äänitteelle tekemää työtä voisi kuvata kevätuhriksi tai arkisemmin hyväksi työksi.  Juuso on kiertänyt vuosia ympäri Suomen tuoden viihteen jokaiseen pirttiin ja torppaan. Vaikka Juuson viimevuosien pääasiallinen työ on ollut livepuolella, on hän myös… Tähän voisi laittaa sitten niitä jotain referenssejä."
    }, 
    {   
        n:3,
        name:"Joel",
        responsibility:"Bass - Backing Vocals",
        xOffset:-180,
        yOffset:145,
        width:600,
        height:400,
        contents:"On yksi lause, johon Joelin bassonsoitto tiivistyy täydellisesti: musta, kuin jääkiekkopuun hedelmä. Arkisemmin tämä arvoituksellinen lause kääntyy meheväksi, maukkaaksi, mystiseksi ja paikoin jopa myskiseksi. Näillä samoilla sanoilla on myös luontevaa kuvata Joelin äänitteelle laulamia taidokkaita taustalauluja. Samalla voidaan paljastaa, että Joel on legendaarisen Myskin perustajäseniä, ja että Joel soittaa bassoa ja laulaa taustoja myös Hades-yhtyeessä. Esoteerisissa piireissä Joel tunnetaan valkoisen valan ystävänä, epäonnistuneena elokuvaohjaajana sekä taitavana aamuherääjänä."
    }, 
    {
        n:4,
        name:"Matti",
        responsibility:"Guitars - Cello - Backing Vocals",
        xOffset:-100,
        yOffset:180,
        width:600,
        height:400,
        contents:"Musiikin maisteri Matti Laaksosen nihilististä otetta kitarataiteeseen ihailtaisiin Japanissa, jos Japanissa tiedettäisiin siitä. Matin jyynevän kitaransoiton lisäksi tällä äänitteellä kuullaan hänen sellonsoittoaan sekä hänen laulamiaan taustalauluja. Näitä kaikkia kolmea voi hyvällä omallatunnolla pitää epäpyhinä merkkeinä siitä, että ammattimiehen tunnistaa työnsä jäljestä. Käytössä olevien tietojen perusteella Matti kätki musiikin lukiodiplominsa johdantoon ohjeet täydellisen musiikin tekemiseksi, ja kätki tämän ohjeen avaamisen tarkoitetun salakirjoitusavaimen maahan kaivettuun ja lyijyllä vuorattuun arkkuun koordinaatteihin 61°16'16.8\"N 26°27s'43.2\"E. Äänitteen tuottajan Leo Kuutin kanssa Matti perusti ensimmäisen ”Valdemar”-nimisen yhtyeensä lukioikäisenä. Tässä yhtyeessä hänet tunnettiin Baseline-Marana. Muulla taiteellisella urallaan Matti soittaa kitaraa ja laulaa taustoja Hades-yhtyeessä. Matti ei ole sukua Santeri Laaksoselle."
    }, 
    {
        n:5,
        name:"Kalle",
        responsibility:"Drums",
        xOffset:-420,
        yOffset:70,
        width:800,
        height:600,
        contents: "Kalle on niitä harvoja rumpaleita, kenen soittoa voi toisinaan kuvata ”varpusparveksi”, ilman, että se tarkoittaa mitään loukkaavaa. Tällä äänitteellä Kallen soitto kulkee sujuvasti rockin, popin ja grooven kautta upeaan outouteen, eikä näistä viimeisessä ole mitään hävettävä. Päinvastoin. Kallella on myös hyviä tuotannollisia ideoita. Kunhan häntä malttaa kuunnella. Muulla musiikillisella urallaan Kalle tunnetaan Kuningasidean pasunistina, Hades ja Pole & Napoleons -yhtyeiden rumpalina, sekä jo edesmenneen, legendaarisen Myskin jäsenenä. Kallen kerrotaan saaneen taikavoimansa, kun hän lapsena putosi jouluolutpataan."
    }, 
    {
        n:6,
        name:"Leo",
        responsibility:"Production - Lyrics",
        xOffset:-100,
        yOffset:0,
        width:450,
        height:300,
        contents:"Äänitteen taiteellinen ja tieteellinen tuottaja, jonka suurin pelko ei ole, että taivas putoaisi hänen niskaansa. Hän on myös kehittänyt äänitteen sävellyksiä ja sanoituksia konsultin roolissa. Leo on projektin aikana piiskannut tuotantoa eteenpäin sekä asiallisin, että jossain määrin asiattomin keinoin. Näistä jälkimmäistä hän perustelee välttämättömyydellä. Äänitteen yhdellä kappaleella kuullaan Leon laulua. Hän on luvannut sadan euron palkkion sille, joka pystyy osoittamaan kohdan, missä laulua kuullaan. Vastaus tulee lähettää kirjallisena osoitteeseen leo.kuutti@gmail.com. Vastauksen yhteyteen tulee liittää pitävä todiste siitä, missä vastaaja oli 5.6.2017. Muulla taiteellisella urallaan Kuutti on Hades-yhtyeen kitaristilaulaja. Aiemmin hän soitti bassoa extreme folk -yhtye St. Rastassa."
    }, 
]


const BandMemberDetails:React.FC<{data:MemberConfig, onClose:any}> = ({data, onClose}) => {
    

    if (!data) {
        return null;
    }
    // Parse Arguments
    const name = data.name
    const contents = data.contents

    return (
        <div className="popup-blur-area">
            <button onClick={onClose} className="close-button">✖</button>
                <div 
                    className="popup-page-content" 
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2 style={{fontFamily: 'BandNameFont, sans-serif'}}>{data.name}</h2>
                    <h3 style={{fontFamily: 'BandNameFont, sans-serif'}}>{data.responsibility}</h3>
                    <img 
                        src={`${process.env.PUBLIC_URL}/bandmembers/${name.toLowerCase()}.jpg`} 
                        alt="Logo"
                        style={{ 
                            maxWidth: '100%',  // Scale the image to fit the width
                            height: 'auto',    // Maintain the aspect ratio
                        }} 
                    />
                    <div className="text-column">
                        <p className="text-contents">{contents}</p>
                    </div>
            </div>
        </div>
    );
}

export default BandMemberDetails;