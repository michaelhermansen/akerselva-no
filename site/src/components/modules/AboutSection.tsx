import { ButtonLink } from "../Button";
import Container from "../Container";

export default function AboutSection() {
  return (
    <Container>
      <section
        id="om-oss"
        className="grid pt-8 lg:grid-cols-4 lg:gap-12 lg:pt-12"
      >
        <div className="col-span-1">
          <h2 className="pb-6 text-2xl font-medium leading-tight lg:text-xl lg:font-normal">
            Om oss
          </h2>
        </div>
        <div className="col-span-3 space-y-6">
          <p className="max-w-[70ch] text-xl leading-relaxed text-black">
            Akerselva er en av Oslos viktigste attraksjoner og historiske
            holdepunkter. Akerselva Friluftsmuseum jobber for å
            tilgjengeliggjøre elva i dag og synliggjøre den historiske
            viktigheten. Tjo og hei! Vi har jobbet med utviklingen er en av
            Oslos viktigste attraksjoner og historiske holdepunkter. Akerselva
            Friluftsmuseum jobber for å tilgjengeliggjøre elva i dag og
            synliggjøre den historiske viktigheten. Tjo og hei!
          </p>
          <ButtonLink href="mailto:hei@akerselva.no">Kontakt</ButtonLink>
        </div>
      </section>
    </Container>
  );
}
