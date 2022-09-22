import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { MdArrowDownward } from "react-icons/md";
import { fadeUp } from "../../lib/animations";
import Container from "../Container";

interface HeaderSectionProps {
  navigationLinks: {
    linkText: string;
    hash: string;
  }[];
}

export default function HeaderSection({ navigationLinks }: HeaderSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <Container>
      <header className="grid gap-12 py-12 lg:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <Link href="/">
            <h1 className="max-w-max text-xl leading-normal lg:mb-8">
              Akerselva
              <br />
              Friluftsmuseum
            </h1>
          </Link>

          <div className="hidden lg:block">
            <p className="pb-2 text-black/50">Opplevelser</p>
            <ul className="text-lg">
              {navigationLinks.map((link) => (
                <li key={link.hash}>
                  <Link
                    onTouchStart={() => videoRef.current?.play()}
                    className="inline-block py-1 text-black/50 transition-colors hover:text-black"
                    href={{ hash: link.hash }}
                  >
                    {link.linkText}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="col-span-3"
        >
          <Link
            href={{ hash: "om-oss" }}
            className="group relative block"
            onTouchEnd={(e) => {
              if (videoRef.current?.paused) e.preventDefault();
              videoRef.current?.play();
            }}
          >
            <div className="relative h-[450px] scale-[1.01] overflow-hidden rounded-md transition-all duration-300 group-hover:scale-100 group-hover:rounded-lg md:h-[600px] lg:h-[760px]">
              <video
                ref={videoRef}
                src="/assets/header_video.mp4"
                muted
                autoPlay
                playsInline
                loop
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20" />
            </div>

            <p className="absolute top-0 max-w-[28ch] py-12 px-8 text-3xl leading-normal text-white lg:px-14 lg:text-5xl">
              Aktiviteter og kulturopplevelser langs Akerselva
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
