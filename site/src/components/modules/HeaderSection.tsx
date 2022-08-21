import Link from "next/link";
import { MdArrowDownward } from "react-icons/md";
import Container from "../Container";

interface HeaderSectionProps {
  navigationLinks: {
    linkText: string;
    linkUrl: string;
  }[];
}

export default function HeaderSection({ navigationLinks }: HeaderSectionProps) {
  return (
    <Container>
      <header className="grid grid-cols-4 gap-12 py-12">
        <div className="col-span-1">
          <Link href="/">
            <h1 className="mb-8 max-w-max text-xl leading-tight">
              Akerselva
              <br />
              Friluftsmuseum
            </h1>
          </Link>

          <ul className="text-lg">
            {navigationLinks.map((link) => (
              <li key={link.linkUrl}>
                <Link
                  className="py-1 text-black text-opacity-50 transition-colors hover:text-opacity-100"
                  href={link.linkUrl}
                >
                  {link.linkText}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link href="#om-oss" className="group col-span-3 block">
          <div className="h-[760px] rounded-md bg-gray-medium py-10 px-14 transition-all duration-300 group-hover:rounded-lg">
            <p className="max-w-[20ch] text-5xl leading-tight text-white">
              Kunst- og kulturopplevelser langs Akerselva
              <MdArrowDownward
                className="mx-2 inline transition-transform group-hover:scale-90"
                size={42}
              />
            </p>
          </div>
        </Link>
      </header>
    </Container>
  );
}
