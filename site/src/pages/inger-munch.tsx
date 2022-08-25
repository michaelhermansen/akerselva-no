import { useEffect } from "react";
import Container from "../components/Container";
import Metadata from "../components/Metadata";
import ExhHeader from "../components/modules/Exhibition/ExhHeader";
import ExhImageQuote from "../components/modules/Exhibition/ExhImageQuote";
import ExhImageScroller from "../components/modules/Exhibition/ExhImageScroller";

export default function ContactPage() {
  return (
    <>
      <Metadata title="Inger Munch og Akerselva" description="..." />

      <ExhHeader />

      <section id="content">
        <Container>
          <p className="mx-auto max-w-[40ch] px-4 pt-32 pb-32 text-center text-xl leading-normal text-white md:pt-52 md:text-2xl lg:text-3xl">
            I 1927 fikk Inger et kamera av sin bror Edvard Munch og med tiden
            ble hun en flink fotograf som på oppfordring av sin bror
            fotograferte akerselven fra Maridalen i nord til kysten i sør.
          </p>

          <ExhImageQuote
            quote="Ja Akerselven blir mer aktuel jo ældre den blir"
            cite="Edvard Munch"
            imageOrientation="landscape"
          />
          <ExhImageQuote
            quote="Nu er det svært morsomt med Akerselven. En arbeiderkone sa til mig; det var da hygeligt av Dem å trekke Akerselven frem den som gir så mange brød."
            cite="Inger Munch"
            imageOrientation="portrait"
            reverse
          />
          <ExhImageQuote
            quote="Du er bleven en udmærket amatørfotograf og kan udvikle Dig mer som sådan. Alle sy jeg har vist Dine fotografier syns at de er så vakkert tat."
            cite="Edvard Munch"
            imageOrientation="portrait"
          />
          <ExhImageQuote
            quote="… Flere fabrikkherrer har takket mig fordi jeg har fått bevart så meget av det gamle."
            cite="Inger Munch"
            imageOrientation="portrait"
            reverse
          />
        </Container>
      </section>

      <section>
        <Container>
          <h2 className="pt-48 pb-24 text-center text-2xl text-white">
            Opplev Akerselva slik Inger Munch så den
          </h2>

          <ExhImageScroller />
          <div className="h-[2000px]">Nyhetsbrev</div>
        </Container>
      </section>

      <style jsx global>{`
        html,
        body {
          background-color: #000000;
        }
      `}</style>
    </>
  );
}
