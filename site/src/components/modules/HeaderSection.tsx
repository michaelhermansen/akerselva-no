import Link from "next/link";
import { MdArrowDownward } from "react-icons/md";
import Container from "../Container";
import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations/fadeUp";

interface HeaderSectionProps {
  navigationLinks: {
    linkText: string;
    linkUrl: string;
  }[];
}

export default function HeaderSection({ navigationLinks }: HeaderSectionProps) {
  return (
    <Container>
      <header className="grid gap-12 py-12 lg:grid-cols-4">
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
                  className="inline-block py-1 text-black text-opacity-50 transition-colors hover:text-opacity-100"
                  href={link.linkUrl}
                >
                  {link.linkText}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="col-span-3"
        >
          <Link href="#om-oss" className="group relative block">
            <div className="h-[600px] scale-[1.01] rounded-md bg-gray-medium transition-all duration-300 group-hover:scale-100 group-hover:rounded-lg lg:h-[760px]" />
            <p className="absolute top-0 max-w-[25ch] py-12 px-8 text-3xl leading-tight text-white lg:px-14 lg:text-5xl">
              Kunst- og kulturopplevelser langs Akerselva
              <MdArrowDownward
                className="mx-2 hidden transition-transform group-hover:translate-y-1 lg:inline"
                size={44}
              />
              <MdArrowDownward
                className="mx-2 inline transition-transform group-hover:translate-y-1 lg:hidden"
                size={22}
              />
            </p>
          </Link>
        </motion.div>
      </header>
    </Container>
  );
}
