import { motion } from "framer-motion";
import { InferGetStaticPropsType } from "next";
import { MapProvider } from "react-map-gl";
import Container from "../components/Container";
import Metadata from "../components/Metadata";
import ExhCompactCTA from "../components/modules/Exhibition/ExhCompactCTA";
import ExhHeader from "../components/modules/Exhibition/ExhHeader";
import ExhibitionScroller from "../components/modules/Exhibition/ExhibitionScroller";
import ExhImageQuote from "../components/modules/Exhibition/ExhImageQuote";
import Footer from "../components/modules/Footer";
import { fadeUp } from "../lib/animations";
import { getEntry } from "../lib/api";

export default function ExhibitionPage({
  featuredLandingPageSection,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Metadata
        title="Inger Munch og Akerselva – Akerselva Friluftsmuseum"
        description="..."
      />

      <ExhHeader />

      <section id="content">
        <Container>
          <div className="mx-auto max-w-[55ch] px-2 pt-32 pb-36 text-center text-xl !leading-normal text-white md:pt-52 md:text-2xl lg:text-2xl">
            <p className="mb-4">
              «Sommeren 1929 foreslo min bror, Edvard Munch, mig at jeg skulde
              fotografere våre gamle boliger på Grünerløkken. Jeg gjorde så og
              drog også op til Brekke og Kjelsås Gård hvor vi bodde somrene 1875
              og 76.
            </p>
            <p>
              Så fikk jeg den idé å ta billeder langs hele Akerselven, fra dens
              begynnelse ved Oset i Maridalen og til dens utløp i Bjørviken»
            </p>
          </div>

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
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="px-4 pt-48 pb-20 text-center text-2xl text-white sm:text-3xl md:pb-24"
          >
            Opplev Akerselva slik Inger&nbsp;Munch så den
          </motion.h2>

          <MapProvider>
            <ExhibitionScroller />
          </MapProvider>
        </Container>
      </section>

      <section>
        <Container>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="px-4 pt-48 text-center text-5xl text-white"
          >
            2022 vs 1932
          </motion.h2>

          <div className="mx-auto max-w-[40ch] px-2 pt-10 pb-36 text-center text-xl !leading-normal text-white md:text-2xl lg:text-2xl">
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
      </section>

      <section className="pb-56 pt-32">
        <Container>
          <ExhCompactCTA cta={featuredLandingPageSection} />
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

export async function getStaticProps() {
  const featuredLandingPageSection = await getEntry("landing-page-sections", 2);

  return {
    props: {
      featuredLandingPageSection,
    },
  };
}
