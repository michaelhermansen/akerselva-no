import { motion } from "framer-motion";
import { MapProvider } from "react-map-gl";
import Container from "../components/Container";
import Metadata from "../components/Metadata";
import ExhHeader from "../components/modules/Exhibition/ExhHeader";
import ExhibitionScroller from "../components/modules/Exhibition/ExhibitionScroller";
import ExhImageQuote from "../components/modules/Exhibition/ExhImageQuote";
import ExhNewsletterSection from "../components/modules/Exhibition/ExhNewsletterSection";
import Footer from "../components/modules/Footer";
import { fadeUp } from "../lib/animations";

export default function ExhibitionPage() {
  return (
    <>
      <Metadata
        title="Inger Munch og Akerselva – Akerselva Friluftsmuseum"
        description="..."
      />

      <ExhHeader />

      <section id="content">
        <Container>
          <div className="mx-auto max-w-[55ch] px-4 pt-32 pb-32 text-center text-xl text-white md:pt-52 md:text-2xl lg:text-2xl">
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
          />
          <ExhImageQuote
            quote="Du er bleven en udmærket amatørfotograf og kan udvikle Dig mer som sådan. Alle sy jeg har vist Dine fotografier syns at de er så vakkert tat."
            cite="Edvard Munch"
            imageOrientation="portrait"
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

      <ExhNewsletterSection />

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
