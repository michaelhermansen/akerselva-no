const scrollerItems = [
  {
    id: 1,
    text: "Maridalsvannet med Nordmarka i bakgrunnen.",
    image: "/",
    geopoint: { lat: 59.96837238731618, lng: 10.784626007080078 },
  },
  {
    id: 2,
    text: "Maridalsvannet danner Akerselven ved Oset.",
    image: "/",
    geopoint: { lat: 59.967470291279476, lng: 10.780763626098633 },
  },
  {
    id: 3,
    text: "Oslo renvannsanlegg ved Maridalsoset, fra ca. 1860.",
    image: "/",
    geopoint: { lat: 59.96661112935506, lng: 10.776128768920898 },
  },
  {
    id: 4,
    text: "Bergensbanen går forbi Oset.",
    image: "/",
    geopoint: { lat: 59.96467793354456, lng: 10.774927139282227 },
  },
  {
    id: 5,
    text: "Akerselvens begynnelse ved Oset. Ved Oset stod asbjørnsen og fisket (Kværnsagn)",
    image: "/",
    geopoint: { lat: 59.9632601849119, lng: 10.77235221862793 },
  },
  {
    id: 6,
    text: 'Badekulpen "Stilla" ved Kjelsås.',
    image: "/",
    geopoint: { lat: 59.96106899949782, lng: 10.77183723449707 },
  },
  {
    id: 7,
    text: "Ved Kjelsås. Skolebarn på tur. En sti opover bakken fører fre til Maridalsvannet.",
    image: "/",
  },
  {
    id: 8,
    text: "Mustads spikerverk, anlagt i 1884.",
    image: "/",
  },
  {
    id: 9,
    text: "Mustad spikerverk, menn 4, arbeidere",
    image: "/",
  },
  {
    id: 10,
    text: "Mellem Kjelsås og Brekke.",
    image: "/",
  },
  {
    id: 11,
    text: "Ved Brekke sag. Løvenskiolds bruk.",
    image: "/",
  },
  {
    id: 12,
    text: "Tømmer lenses opp til Brekke sag.",
    image: "/",
  },
  {
    id: 13,
    text: "Fossen ved Brekke sag.",
    image: "/",
  },
  {
    id: 14,
    text: "Tømmeret lettes på Jernbanevogn ved Kjelsås.",
    image: "/",
  },
  {
    id: 15,
    text: "Brekke gård - en av Akers eldste gårder. Den eldst kjente eier var Arnfinn Tordsson som kjøpte den i 1936.",
    image: "/",
  },
  {
    id: 16,
    text: "Brekke gård.",
    image: "/",
  },
  {
    id: 17,
    text: "Ved Brekke gård.",
    image: "/",
  },
  {
    id: 18,
    text: "Badekulp mellem Maridalen og Nydalen.",
    image: "/",
  },
  {
    id: 19,
    text: "Hvor Nydalsrennet foregår.",
    image: "/",
  },
  {
    id: 20,
    text: "Dammen ved Nydalens fabrikker.",
    image: "/",
  },
  {
    id: 21,
    text: "Der skyllles klær i dammen ved Nydalen.",
    image: "/",
  },
  {
    id: 22,
    text: "Fossen ved Nydalens fabrikker.",
    image: "/",
  },
  {
    id: 23,
    text: "Vannfall ved Nydalens veveri.",
    image: "/",
  },
  {
    id: 24,
    text: "Stryk i Nydalen.",
    image: "/",
  },
  {
    id: 25,
    text: "Fra Nydalen Veveri. Nydalen Compagnie blev anlagt 1845.",
    image: "/",
  },
  {
    id: 26,
    text: "Vannfall ved Christiania Spigerværk ved Nydalen.",
    image: "/",
  },
  {
    id: 27,
    text: "Da Hans Nielsen Hauge kom ut av fengslet i 1811, anla han Bakke Mølle. I dette lille huset like ved møllen skal han ha bodd i en tid.",
    image: "/",
  },
  {
    id: 28,
    text: "Christiania Spigerværk, anlagt 1853.",
    image: "/",
  },
  {
    id: 29,
    text: "Ved Spikerverket.",
    image: "/",
  },
  {
    id: 30,
    text: "Fra Nydalen går elven til Sandaker. Til høire Bakke Mølle. Til venstre Spikerverket.",
    image: "/",
  },
  {
    id: 31,
    text: "Omkring Bakke Mølle.",
    image: "/",
  },
  {
    id: 32,
    text: "Bakke Mølle nederst i Nydalen. Møllen brente i 1900 og blev gjenopført i 1901.",
    image: "/",
  },
  {
    id: 33,
    text: "Elektrisitetsverket tilhørende Christiania Spigerværk.",
    image: "/",
  },
  {
    id: 34,
    text: "Omkring Bakke Mølle.",
    image: "/",
  },
  {
    id: 35,
    text: "Badeliv ved Bakke Mølle.",
    image: "/",
  },
  {
    id: 36,
    text: "Mellem Bakke Mølle og Havnens teglverk.",
    image: "/",
  },
  {
    id: 37,
    text: "Arbeidere ved Norsk Hydros sekkefabrikk, Sandaker.",
    image: "/",
  },
  {
    id: 38,
    text: "Norsk Hydros sekkefabrikk.",
    image: "/",
  },
  {
    id: 39,
    text: "Havnens teglverk og sagbruk ved Maridalsveien. Teglverket, som var anlagt ca. 1873, blev nedlagt for noen år siden.",
    image: "/",
  },
  {
    id: 40,
    text: "Badeliv ved Sandaker.",
    image: "/",
  },
  {
    id: 41,
    text: "Det gamle huset i urskogen ved teglverket.",
    image: "/",
  },
  {
    id: 42,
    text: "Fra Sandaker.",
    image: "/",
  },
  {
    id: 43,
    text: "I urskogen. Mellem Maridalsveien og Sandakerveien.",
    image: "/",
  },
  {
    id: 44,
    text: "I urskogen. (1)",
    image: "/",
  },
  {
    id: 45,
    text: "I urskogen. (2)",
    image: "/",
  },
  {
    id: 46,
    text: "Nedover til Treschows bro.",
    image: "/",
  },
  {
    id: 47,
    text: "Stryk ved Sandaker.",
    image: "/",
  },
  {
    id: 48,
    text: "Kristiania Presgjærfabrik ved Treschows bro.",
    image: "/",
  },
  {
    id: 49,
    text: "Ved Presgjærfabrikken.",
    image: "/",
  },
  {
    id: 50,
    text: "Ved Treschows bro.",
    image: "/",
  },
  {
    id: 51,
    text: "Treschows bro. Har sitt navn efter admiralitetsråd Gerhard Treschow som i 1712 anla en oljemølle og et sepesyderi ved Bjølsen.",
    image: "/",
  },
  {
    id: 52,
    text: "Fra Bjølsen Valsemølle A/S.",
    image: "/",
  },
  {
    id: 53,
    text: "Fra Lilleborg fabrikker A/S. Her anla Ludvig Maribo omkring 1812-14 en klædesfabrikk. Tidligere lå Jerusalems Papirmølle på samme sted.",
    image: "/",
  },
  {
    id: 54,
    text: "Bentse bruk har sitt navn efter Ole Bents som anla en papirmølle her i 1686.",
    image: "/",
  },
  {
    id: 55,
    text: "Bentse bro. I bakgrunnen boliger for arbeidere ved Myrens Verksted A/S.",
    image: "/",
  },
  {
    id: 56,
    text: "Fra Myren.",
    image: "/",
  },
  {
    id: 57,
    text: "Her var et gammelt møllested. Myrens mekaniske verksted er anlagt 1854. Til høire: Myrens Verksted A/S., til venstre: Norsk Elektrisk Brown Boveri. I bakgrunnen Bentse bro.",
    image: "/",
  },
  {
    id: 58,
    text: "Maridalsveien ved Myren.",
    image: "/",
  },
  {
    id: 59,
    text: "Broen fører over Myren til Maridalsveien.",
    image: "/",
  },
  {
    id: 60,
    text: "Utsikt fra broen mot Hjula Væveri.",
    image: "/",
  },
  {
    id: 61,
    text: "Hjula Væveri anlagt 1855 av Halvor Schou.",
    image: "/",
  },
  {
    id: 62,
    text: "Beierbroen. Første gang man hører om Beierbroen er i 1671. Navnet skriver sig fra Vøiens daværende eier Anders Beier.",
    image: "/",
  },
  {
    id: 63,
    text: "Fra fossen ovenfor Beierbroen.",
    image: "/",
  },
  {
    id: 64,
    text: "Utsikt fra Beierbroen.",
    image: "/",
  },
  {
    id: 65,
    text: "Fra fossen nedenfor Beierbroen. (1)",
    image: "/",
  },
  {
    id: 66,
    text: "Sagene skole 1861. Til høire Ringnes Bryggeri A/S.",
    image: "/",
  },
  {
    id: 67,
    text: "Utsikt fra Sagene skole.",
    image: "/",
  },
  {
    id: 68,
    text: "Fra fossen nedenfor Beierbroen. (2)",
    image: "/",
  },
  {
    id: 69,
    text: "Våghalsen Barkestampe - opført omkring 1800. Bygget i 2 perioder, den største del først. I Bbakgrunnen Vøien. Knud Graahs tidligere bomullsspinneri anlagt i 1846.",
    image: "/",
  },
  {
    id: 70,
    text: "Akerselvens største foss. I bakgrunnen Beierbroen.",
    image: "/",
  },
  {
    id: 71,
    text: "Ved den store fossen.",
    image: "/",
  },
  {
    id: 72,
    text: "Sanner bro. 1917.",
    image: "/",
  },
  {
    id: 73,
    text: "Jordans fabrikk. Til høire Sanner bro. Grefsen i bakgrunnen.",
    image: "/",
  },
  {
    id: 74,
    text: "Sanner bro. I bakgrunnen de nye Knud Graahs fabrikker.",
    image: "/",
  },
  {
    id: 75,
    text: "Øvre Foss. Christiania Seilduksfabrik, anlagt i 1875.",
    image: "/",
  },
  {
    id: 76,
    text: 'Dammen ved "Seilduken".',
    image: "/",
  },
  {
    id: 77,
    text: 'Fra "Seilduken" lørdag kl. 1.',
    image: "/",
  },
  {
    id: 78,
    text: "Schulzehaugens teglverk, anlagt i begynnelsen av 1800-årene.",
    image: "/",
  },
  {
    id: 79,
    text: 'Akers mekaniske Verksted blev anlagt her 1812, men flyttet i 1850-årene. Til venstre: "Seilduken".',
    image: "/",
  },
  {
    id: 80,
    text: "Gamle Aker kirke og Telthusgaten. Telthusgaten har sitt navn efter en militær magasinbygning, et såkalt telthus som blev opført i 1700-årene og lå ved gatens øvre ende.",
    image: "/",
  },
  {
    id: 81,
    text: "Nedre Schulzehaugen har sitt navn efter trelasthandler Jens Schulz som eide gården en tid i 1700-årene annen halvdel.",
    image: "/",
  },
  {
    id: 82,
    text: 'Utsikt til Nedre Foss, Bagås og Vulkan Jernstøperi & mek. Værksted, sett fra Marselis gate. Ved Nedre Foss hadde Christiania fra 1844 sitt første styrtebad, "Heidekkers badehus", senere kalt "Bagås badehus". (Sogneprest Frølichs bok: I. H. Frølich og hans samtid. 2. del).',
    image: "/",
  },
  {
    id: 83,
    text: "Fossveien 7 og 9. Edv. Munch bodde begge steder i 70-80årene. Vannfall ved Nedre Foss.",
    image: "/",
  },
  {
    id: 84,
    text: "Grüners have var i gamle dager en av byens vakreste haver. Den var i familien Grüners eie til ut i 1880-årene.",
    image: "/",
  },
  {
    id: 85,
    text: "Nedre Foss hovedgår. Tilhører nu Bjølsen Valsemølle.",
    image: "/",
  },
  {
    id: 86,
    text: "Bomhuset ved Grünerbroen. Her blev det langt inn i 1800-årene opkrevet toll eller akeise. Slike tollstasjoner lå ved alle innfartsveier til byen.",
    image: "/",
  },
  {
    id: 87,
    text: "Brænderibakken. Nora mineralvannsfabrikk og Grünerbroen.",
    image: "/",
  },
  {
    id: 88,
    text: "Bomhuset ved Grünerbroen.",
    image: "/",
  },
  {
    id: 89,
    text: "Gamle Akers kirke fotografert fra Grünerbroen.",
    image: "/",
  },
  {
    id: 90,
    text: "Nedre Foss.",
    image: "/",
  },
  {
    id: 91,
    text: "Grünerbroen. Grünerbroen het i sagatiden Frysja bro, så Akersbroen, senere Grüners bro. Den er den eldste broforbindelsen over Akerselven.",
    image: "/",
  },
  {
    id: 92,
    text: 'Fra "Nedre Foss". Øverst "Seilduken" og Sølvbergs farveri. Til høire: "Kongens Mølle".',
    image: "/",
  },
  {
    id: 93,
    text: 'Fra Nedre Foss. Til høire: Vulkan Jernstøperi & mek. Værksted. Til venstre: "Kongens mølle"',
    image: "/",
  },
  {
    id: 94,
    text: 'Nedre Foss eller "Kongens Mølle". "Kongens Mølle" solgtes av Christian V i 1672 til myntmester Fredrik Grüner. I 1758 ble den solgt til vicelagmann Nielsen, men kom i 1802 atter tilbake til familien Grüner som eide møllen til ut i 1880-årene.',
    image: "/",
  },
  {
    id: 95,
    text: "Hovedbygningen på Nedre Foss - Stammer fra 1700-årene.",
    image: "/",
  },
  {
    id: 96,
    text: "Veste og Østre Elvebakke. Til venstre en del av håndverksforskolens nye bygning. Fotografert fra Nedregate, Grünerløkken.",
    image: "/",
  },
  {
    id: 97,
    text: "Fra Ankerbroen. (1)",
    image: "/",
  },
  {
    id: 98,
    text: "Ankerbroen. På den gamle Ankerløkken, hvor nu Ankertorvet og Gassverket m. m. ligger, blev det ved koleraepidemien i 1833 anlagt en epidemikirkegård. I 1839 blev dentatt i bruk som kirkegård, med denne blev nedlagt i 1866. Ankerbroen. - Bygget 1874-76, ombygget for en del år siden.",
    image: "/",
  },
  {
    id: 99,
    text: "Fra Ankerbroen. (2)",
    image: "/",
  },
  {
    id: 100,
    text: "Østkantutstillingen på Ankertorvet.",
    image: "/",
  },
  {
    id: 101,
    text: "Ved Ankerbroen. I bakgrunnen Søndre gate.",
    image: "/",
  },
  {
    id: 102,
    text: "Fra Nybroen. Grand Vaskeri, tidligere Akerselvens Spikerværk.",
    image: "/",
  },
  {
    id: 103,
    text: "Akers Sparebank.",
    image: "/",
  },
  {
    id: 104,
    text: "Jakobs kirke. Ankerbroen.",
    image: "/",
  },
  {
    id: 105,
    text: "Fra Nybroen. Akers Sparebank. Schous Bryggeri A/S.",
    image: "/",
  },
  {
    id: 106,
    text: "Nybroen, bygget i 1827.",
    image: "/",
  },
  {
    id: 107,
    text: "Hausmannsbroen, bygget i 1892.",
    image: "/",
  },
  {
    id: 108,
    text: "Elisabethssøster på Hausmanns-broen.",
    image: "/",
  },
  {
    id: 109,
    text: "Fra Vaterlands bro.",
    image: "/",
  },
  {
    id: 110,
    text: "Smalgangen - er den gamle forstadsgate som lengst har beholdt sitt preg fra 16 - 1700-årene med små trehus, gammeldags brolegning og rennesten midt i gaten. Takkammeret til venstre vr for en tid Olafia Johansdottirs redningshjem.",
    image: "/",
  },
  {
    id: 111,
    text: "Vaterlands bro, bygget 1619.",
    image: "/",
  },
  {
    id: 112,
    text: "Fiskehallen ved Vaterlands bro blev anlagt i 1855, men fiskehandelen her har foregått fra gamle dager. Den skjedde tidligere fra båtene.",
    image: "/",
  },
  {
    id: 113,
    text: "Fra Grønlands torv.",
    image: "/",
  },
  {
    id: 114,
    text: "Fra Grønlands torv. Kjøtthallen i bakgrunn.",
    image: "/",
  },
  {
    id: 115,
    text: "Fra Vaterland.",
    image: "/",
  },
  {
    id: 116,
    text: "Bispebroen, bygget 1886.",
    image: "/",
  },
  {
    id: 117,
    text: "Kullossing ved Bispegaten.",
    image: "/",
  },
  {
    id: 118,
    text: "Hjem fra fiske. I bakgrunnen Nylands Verksted.",
    image: "/",
  },
  {
    id: 119,
    text: "barn ved ferjen Hovedøens bad. Bispebryggen.",
    image: "/",
  },
  {
    id: 120,
    text: "Ferjen går fullastet. Til høireprammer som fører Oslos søppel til Langøene. To øer forenes, og det er en frodig vekst der ute.",
    image: "/",
  },
  {
    id: 121,
    text: "Langøene som forenes ved Oslos søppel.",
    image: "/",
  },
  {
    id: 122,
    text: "Livlig trafikk på Bispebroen.",
    image: "/",
  },
  {
    id: 123,
    text: "Under Schweigaards bro.",
    image: "/",
  },
  {
    id: 124,
    text: "Schweigaards bro, bygget i 1882.",
    image: "/",
  },
  {
    id: 125,
    text: "Ut på fiske. I bakgrunnen Schweigaards bro.",
    image: "/",
  },
  {
    id: 126,
    text: "En morgen ved Nylands Verksted.",
    image: "/",
  },
  {
    id: 127,
    text: "Nylands mekaniske Verksted - anlagt i 1855.",
    image: "/",
  },
  {
    id: 128,
    text: "Akerselvens utløp i Bjørviken.",
    image: "/",
  },
  {
    id: 129,
    text: "Ved Akerselvens munning.",
    image: "/",
  },
  {
    id: 130,
    text: "Tørdokken ved Nylands Verksted.",
    image: "/",
  },
  {
    id: 131,
    text: '"Brakar". Fred Olsen og Co.',
    image: "/",
  },
  {
    id: 132,
    text: "Edv. Munch: Utsikt fra Fossveien 7. 1881.",
    image: "/",
  },
  {
    id: 133,
    text: '"Fra Øvre Foss". Maleri av Edv. Munch 1880.',
    image: "/",
  },
  {
    id: 134,
    text: "Akvarell av dammeni Grüners have. Malt i 1880 av Edv. Munch.",
    image: "/",
  },
  {
    id: 135,
    text: 'Edv. Munch: "Fra Nedre Foss" 1880.',
    image: "/",
  },
  {
    id: 136,
    text: "Gamle Aker Kirke og telthusgaten, malt i 1881 av Edv. Munch.",
    image: "/",
  },
  {
    id: 137,
    text: 'Nedre Foss. Fra "Kongens Mølle" efter flom.',
    image: "/",
  },
];

export default scrollerItems;
