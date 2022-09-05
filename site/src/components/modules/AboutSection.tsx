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
          <div className="max-w-[70ch] leading-relaxed text-black md:text-xl md:leading-relaxed">
            <p className="mb-4">
              Akerselva Friluftsmuseum lager utstillinger og aktiviteter som
              forsterker opplevelsen av Oslos viktigste byrom. Vi trekker linjer
              mellom fortid, nåtid og fremtid og får frem nye perspektiver på
              Akerselva i samarbeid med institusjoner og aktører langs elva.
            </p>
            <p>
              Akerselva Friluftsmuseum er skybasert, men regner ned i byrommet i
              form av stedsspesifikke prosjekter. Med Maridalsvannet i ryggen
              har vi en beskjeden ambisjon om å seile frem som et av verdens
              beste friluftsmuseum.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
