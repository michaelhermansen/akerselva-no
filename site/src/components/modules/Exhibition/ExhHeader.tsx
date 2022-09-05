import { motion } from "framer-motion";
import { delay } from "lodash";
import Image from "next/future/image";
import Link from "next/link";
import { MdArrowBack, MdArrowDownward } from "react-icons/md";
import Container from "../../Container";
import IngerMunchLogo from "../../IngerMunchLogo";

export default function ExhHeader() {
  return (
    <header className="relative h-[740px] min-h-[90vh] overflow-hidden overflow-y-hidden lg:min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute inset-0"
      >
        <Image
          className="block object-cover brightness-90"
          fill
          sizes="100vw"
          alt=""
          src="/assets/exhibition-header.jpeg"
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
          className="relative z-50 grid w-[240px] place-items-center py-12 sm:w-[340px] md:w-[400px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <IngerMunchLogo />
        </motion.div>

        <Link
          href={{ hash: "content" }}
          className="group flex max-w-max flex-col items-center gap-1 p-2"
        >
          <span className="text-lg">Se mer</span>
          <MdArrowDownward className="transition-transform group-hover:translate-y-1" />
        </Link>
      </Container>
    </header>
  );
}
