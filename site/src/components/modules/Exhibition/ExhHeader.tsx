import { motion } from "framer-motion";
import Image from "next/future/image";
import Link from "next/link";
import { MdArrowBack, MdArrowDownward } from "react-icons/md";
import Container from "../../Container";
import IngerMunchLogo from "../../IngerMunchLogo";

export default function ExhHeader() {
  return (
    <header className="relative h-[740px] max-h-screen overflow-hidden overflow-y-hidden sm:h-[740px] md:h-[800px] lg:h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
        className="absolute inset-0"
      >
        <Image
          className="block object-cover"
          fill
          alt=""
          src="/assets/img-1.png"
          priority
        />
      </motion.div>

      <Container className="relative z-20 flex h-full flex-col items-center justify-between py-12 text-white">
        <div className="flex w-full items-baseline justify-between gap-4">
          <Link href="/">
            <h1 className="max-w-max text-xl leading-tight">
              Akerselva
              <br />
              Friluftsmuseum
            </h1>
          </Link>

          <Link className="hidden items-center gap-2 lg:flex" href="/">
            <MdArrowBack />
            <span className="text-lg">Tilbake</span>
          </Link>
        </div>

        <motion.div
          className="relative z-50 grid w-[240px] place-items-center py-12 sm:w-[340px] md:w-[440px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            duration: 1,
            ease: "easeOut",
          }}
        >
          <IngerMunchLogo />
        </motion.div>

        <a
          href="#content"
          className="group flex max-w-max flex-col items-center gap-1 p-2"
        >
          <span className="text-lg">Se mer</span>
          <MdArrowDownward className="transition-transform group-hover:translate-y-1" />
        </a>
      </Container>
    </header>
  );
}
