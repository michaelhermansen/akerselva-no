import { motion } from "framer-motion";
import { MapProvider } from "react-map-gl";
import Container from "../components/Container";
import Metadata from "../components/Metadata";
import CompactCTA from "../components/modules/CompactCTA";
import ExhHeader from "../components/modules/Exhibition/ExhHeader";
import ExhibitionScroller from "../components/modules/Exhibition/ExhibitionScroller";
import ExhImageQuote from "../components/modules/Exhibition/ExhImageQuote";
import Footer from "../components/modules/Footer";
import { fadeUp } from "../lib/animations";

export default function ExhibitionPage() {
  return (
    <>
      <Metadata
        title="Inger Munch og Akerselva – Akerselva Friluftsmuseum"
        description="Inger Munch, søster av Edvard Munch, testamenterte ved sin død i 1952 over 200 negativer til Oslo Bymuseum. Blant negativene var mange av bildene fra hennes bok «Akerselven», som ble utgitt i 1932. I 2022 er det 90 år siden boka kom ut, og 70 år siden Inger Munch døde. Vi markerer dette med utstillingen Inger Munch og Akerselva!"
        imageUrl="/assets/open-graph/og_inger-munch.jpg"
      />

      <ExhHeader />

      <section id="content">
        <Container>
          <figure className="mx-auto max-w-[50ch] px-2 pt-32 pb-40 text-center text-xl !leading-normal text-white md:pt-52 md:text-2xl lg:text-2xl">
            <blockquote>
              <p className="mb-4">
                «Sommeren 1929 foreslo min bror, Edvard Munch, mig at jeg skulde
                fotografere våre gamle boliger på Grünerløkken. Jeg gjorde så og
                drog også op til Brekke og Kjelsås Gård hvor vi bodde somrene
                1875 og 76.
              </p>
              <p>
                Så fikk jeg den idé å ta billeder langs hele Akerselven, fra
                dens begynnelse ved Oset i Maridalen og til dens utløp i
                Bjørviken»
              </p>
            </blockquote>
            <figcaption className="pt-4">
              <cite className="text-lg not-italic text-white text-opacity-75">
                Forord fra Inger Munchs Akerselven, 1932
              </cite>
            </figcaption>
          </figure>

          <ExhImageQuote
            quote="Nu er det svært morsomt med Akerselven. En arbeiderkone sa til mig; det var da hygeligt av Dem å trekke Akerselven frem den som gir så mange brød."
            cite="Inger Munch"
            imageOrientation="landscape"
            imageSrc="/assets/inger-munch.jpg"
          />
          <ExhImageQuote
            quote="Du er bleven en udmærket amatørfotograf og kan udvikle Dig mer som sådan. Alle sy jeg har vist Dine fotografier syns at de er så vakkert tat."
            cite="Edvard Munch"
            imageOrientation="portrait"
            imageSrc="/assets/edvard-inger-munch.jpg"
            reverse
          />
        </Container>
      </section>

      <section>
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="px-4 pt-48 pb-20 text-center text-white md:pb-24"
          >
            <h2 className="text-2xl sm:text-3xl">
              Følg Inger Munchs fotospor langs Akerselva
            </h2>
            <p className="mx-auto max-w-2xl pt-4 text-white/50">
              Fotografiene er hentet fra oslobilder.no. Bildene er gjengitt i
              kronologisk rekkefølge og følger elven fra Maridalsvannet til
              Oslofjorden.
            </p>
          </motion.div>

          <MapProvider>
            <ExhibitionScroller />
          </MapProvider>
        </Container>
      </section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50%" }}
      >
        <Container>
          <h2 className="px-4 pt-56 text-center text-4xl text-white md:text-5xl">
            2022 vs 1932
          </h2>

          <div className="mx-auto max-w-[40ch] px-2 pt-8 pb-36 text-center text-xl !leading-normal text-white md:text-2xl lg:text-2xl">
            <p className="mb-4">
              Hvordan ser vi på Akerselva i 2022 vs 1932? Er fortellingen om
              Akerselva som et sosialt skille mellom øst og vest like aktuell i
              dag? Eller kan man si at det sosiale skillet har krympet, vendt
              seg 90 grader og befinner seg nord og syd for togsporene på Oslo
              S?
            </p>
          </div>

          <div className="mx-auto max-w-5xl"></div>
        </Container>
      </motion.section>

      <section className="pb-52 pt-20">
        <Container>
          <CompactCTA
            title="Opplev Akerselvas nye rutebåt, gjennom kulverten."
            text="Under togsporene på Oslo S ligger Akerselva i kulvert. Togsporene danner et av Oslos mest omtalte sosiale skiller, med Bjørvika på den ene siden og Grønland på den andre. Til våren åpner vi rutebåtforbindelse som tar deg gjennom kuverten mellom Vaterland og Inger Munchs brygge i Bjørvika. Prosjektet gjøres i samarbeid med Akerselva trebåtforening."
            imageSrc="/assets/kulvert.jpg"
            url="/rutebat"
          />
        </Container>
      </section>

      <Footer />

      <style jsx global>{`
        html,
        body {
          background-color: #000000;
        }
      `}</style>
    </>
  );
}
