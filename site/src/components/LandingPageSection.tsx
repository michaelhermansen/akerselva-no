import Link from "next/link";
import { ApiLandingPageSections } from "../lib/validation/landingPageSection";
import Container from "./Container";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/fadeUp";
import { kebabCase } from "lodash";

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
          <p className="text-zinc-500">{section.attributes.Subtitle}</p>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="col-span-3 space-y-6"
        >
          <div className="h-[490px] rounded-3xl bg-zinc-800 py-10 px-14">
            <p className="max-w-[20ch] text-5xl leading-tight text-white">
              {section.attributes.ImageTitle}
            </p>
          </div>
          <p className="max-w-[70ch] px-1 text-xl leading-relaxed text-zinc-600">
            {section.attributes.Description}
          </p>
          <Link className="btn" href={section.attributes.Link.LinkUrl}>
            {section.attributes.Link.LinkText}
          </Link>
        </motion.div>
      </section>
    </Container>
  );
}
