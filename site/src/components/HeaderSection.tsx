import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp } from "../animations/fadeUp";
import Container from "./Container";

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
            <h1 className="pb-8 text-xl leading-tight">
              Akerselva
              <br />
              Friluftsmuseum
            </h1>
          </Link>

          <ul className="text-lg">
            {navigationLinks.map((link) => (
              <li key={link.linkUrl}>
                <Link
                  className="py-1 text-zinc-500 transition-colors hover:text-black"
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
          whileInView="visible"
          viewport={{ once: true }}
          className="col-span-3"
        >
          <div className="h-[760px] rounded-3xl bg-zinc-800 py-10 px-14">
            <p className="max-w-[20ch] text-5xl leading-tight text-white">
              Kunst- og kulturopplevelser langs Akerselva
            </p>
          </div>
        </motion.div>
      </header>
    </Container>
  );
}
