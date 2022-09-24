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
          <h2 className="pb-6 text-2xl font-medium leading-normal lg:text-xl lg:font-normal">
            Om oss
          </h2>
        </div>
        <div className="col-span-3 space-y-6">
          <div className="max-w-[70ch] leading-normal text-black md:text-xl md:leading-normal">
            <p className="mb-4">
              Akerselva Friluftsmuseum lager utstillinger og aktiviteter som
              forsterker opplevelsen av Oslos viktigste byrom. Museet er
              skybasert, men regner ned i byrommet i form av stedsspesifikke
              prosjekter. I samarbeid med institusjoner og aktører langs
              Akerselva trekker vi linjer mellom fortid, nåtid og fremtid.
            </p>
            <p>
              Med Maridalsvannet i ryggen har vi en beskjeden ambisjon om å
              seile frem som et av verdens beste friluftsmuseer!
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
