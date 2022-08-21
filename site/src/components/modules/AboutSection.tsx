import { ButtonLink } from "../Button";
import Container from "../Container";

export default function AboutSection() {
  return (
    <Container>
      <section id="om-oss" className="grid grid-cols-4 gap-12 pt-12">
        <div className="col-span-1">
          <h2 className="pb-8 text-xl leading-tight">Om oss</h2>
        </div>
        <div className="col-span-3 space-y-6">
          <p className="max-w-[70ch] px-1 text-xl leading-relaxed text-black">
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
