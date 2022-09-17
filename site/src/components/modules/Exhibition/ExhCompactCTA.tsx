import Image from "next/future/image";
import Link from "next/link";
import { ApiLandingPageSection } from "../../../lib/validation/landingPageSection";
import { ButtonLink } from "../../Button";

export default function ExhCompactCTA({
  cta,
}: {
  cta: ApiLandingPageSection | null;
}) {
  if (!cta) return null;

  return (
    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg bg-gray-medium">
      <Image
        className="absolute scale-105 object-cover"
        src={cta.attributes.Image.url}
        alt=""
        fill
      />

      <div className="relative z-20 px-8 py-20 md:px-16">
        <p className="max-w-2xl text-4xl leading-normal text-white lg:text-5xl">
          {cta.attributes.ImageTitle}
        </p>

        <p className="max-w-[70ch] py-8 leading-normal text-white md:text-xl">
          {cta.attributes.Description}
        </p>
        <Link
          className="block max-w-max rounded-sm bg-white py-3 px-8 transition-colors hover:bg-opacity-75"
          href={cta.attributes.Link.LinkUrl}
        >
          Les mer
        </Link>
      </div>
    </div>
  );
}
