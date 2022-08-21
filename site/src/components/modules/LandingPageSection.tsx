import { kebabCase } from "lodash";
import Link from "next/link";
import { ApiLandingPageSections } from "../../lib/validation/landingPageSection";
import { ButtonLink } from "../Button";
import Container from "../Container";

interface LandingPageSectionProps {
  section: ApiLandingPageSections["data"][0];
}

export default function LandingPageSection({
  section,
}: LandingPageSectionProps) {
  const sectionId = kebabCase(section.attributes.NavigationTitle);

  return (
    <Container>
      <section id={sectionId} className="grid grid-cols-4 gap-12">
        <div className="col-span-1">
          <h2 className="pb-2 text-xl leading-tight">
            {section.attributes.Title}
          </h2>
          <p className="text-black text-opacity-50">
            {section.attributes.Subtitle}
          </p>
        </div>

        <div className="col-span-3 space-y-6">
          <Link href={section.attributes.Link.LinkUrl} className="group block">
            <div className="h-[490px] rounded-md bg-gray-medium py-10 px-14 transition-all duration-300 group-hover:rounded-lg">
              <p className="max-w-[20ch] text-5xl leading-tight text-white">
                {section.attributes.ImageTitle}
              </p>
            </div>
          </Link>

          <p className="max-w-[70ch] px-1 text-xl leading-relaxed text-black">
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
