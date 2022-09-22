import { kebabCase } from "lodash";
import Image from "next/future/image";
import Link from "next/link";
import { ApiLandingPageSection } from "../../lib/validation/landingPageSection";
import { ButtonLink } from "../Button";
import Container from "../Container";

interface LandingPageSectionProps {
  section: ApiLandingPageSection | null;
}

export default function LandingPageSection({
  section,
}: LandingPageSectionProps) {
  if (!section) return null;

  const sectionId = kebabCase(section.attributes.NavigationTitle);

  return (
    <Container>
      <section id={sectionId} className="grid gap-12 py-6 lg:grid-cols-4">
        <div className="col-span-1 hidden lg:block">
          <h2 className="pb-3 text-xl leading-normal">
            {section.attributes.Title}
          </h2>
          <p className="text-black text-opacity-50">
            {section.attributes.Subtitle}
          </p>
        </div>

        <div className="col-span-3 space-y-4 md:space-y-6">
          <Link
            href={section.attributes.Link.LinkUrl}
            className="group relative block"
          >
            <Image
              className="h-[390px] scale-[1.01] rounded-md bg-gray-medium object-cover brightness-50 transition-all duration-300 hover:scale-100 group-hover:rounded-lg md:h-[490px]"
              src={section.attributes.Image.url}
              alt=""
              width={1200}
              height={600}
            />

            <p className="absolute top-0 my-10 w-full max-w-[30ch] px-8 text-4xl !leading-small text-white drop-shadow-lg lg:px-14 lg:text-5xl">
              {section.attributes.ImageTitle}
            </p>
          </Link>

          <div className="col-span-1 lg:hidden">
            <p className="pt-4 pb-1 text-black text-opacity-50">
              {section.attributes.Subtitle}
            </p>
            <h2 className="text-2xl font-medium leading-normal">
              {section.attributes.Title}
            </h2>
          </div>

          <p className="max-w-[70ch] leading-normal text-gray-medium md:text-xl md:leading-normal">
            {section.attributes.Description}
          </p>

          <ButtonLink href={section.attributes.Link.LinkUrl}>
            {section.attributes.Link.LinkText}
          </ButtonLink>
        </div>
      </section>
    </Container>
  );
}
