import Image from "next/future/image";
import Link from "next/link";

interface CompactCTAProps {
  title: string;
  text: string;
  imageSrc: string;
  url: string;
}

export default function CompactCTA({
  title,
  text,
  imageSrc,
  url,
}: CompactCTAProps) {
  return (
    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg bg-gray-medium">
      <Link href={url}>
        <Image
          className="pointer-events-none absolute scale-105 object-cover brightness-50"
          src={imageSrc}
          alt=""
          fill
        />
        <div className="relative z-20 px-6 py-16 drop-shadow-xl md:px-16 md:py-20">
          <p className="max-w-2xl text-3xl leading-small text-white md:text-4xl lg:text-5xl">
            {title}
          </p>
          <p className="max-w-[55ch] py-8 leading-normal text-white md:text-xl">
            {text}
          </p>
          <span className="block max-w-max rounded-sm bg-white py-3 px-8 transition-colors hover:bg-opacity-75">
            Les mer
          </span>
        </div>
      </Link>
    </div>
  );
}
