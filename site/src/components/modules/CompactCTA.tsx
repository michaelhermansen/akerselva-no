import Image from "next/future/image";
import Link from "next/link";
import { ApiLandingPageSection } from "../../lib/validation/landingPageSection";

export default function CompactCTA({
  cta,
}: {
  cta: ApiLandingPageSection | null;
}) {
  if (!cta) return null;

  return (
    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg bg-gray-medium">
      <Link href={cta.attributes.Link.LinkUrl}>
        <Image
          className="absolute scale-105 object-cover"
          src={cta.attributes.Image.url}
          alt=""
          fill
        />
        <div className="relative z-20 px-8 py-12 md:px-16 md:py-16">
          <p className="max-w-2xl text-3xl leading-small text-white md:text-4xl lg:text-5xl">
            {cta.attributes.ImageTitle}
          </p>
          <p className="max-w-[70ch] py-8 leading-normal text-white md:text-xl">
            {cta.attributes.Description}
          </p>
          <span className="block max-w-max rounded-sm bg-white py-3 px-8 transition-colors hover:bg-opacity-75">
            Les mer
          </span>
        </div>
      </Link>
    </div>
  );
}
