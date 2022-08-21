import { motion } from "framer-motion";
import Image from "next/future/image";
import Link from "next/link";
import { MdArrowBack, MdArrowDownward } from "react-icons/md";
import Container from "../Container";

export default function ExhHeader() {
  return (
    <motion.header
      className="relative h-[900px] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween", duration: 0.5 }}
    >
      <Image
        className="absolute top-0 z-0 block h-[840px] w-full object-cover"
        fill
        sizes="100%"
        alt=""
        src="/assets/img-1.png"
        priority
      />

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
          className="grid place-items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/assets/ima-logo.svg"
            alt=""
            className="h-[280px] w-[280px] object-fill lg:h-[440px] lg:w-[440px]"
            width={440}
            height={440}
            priority
          />
        </motion.div>

        <Link href="#" className="flex max-w-max flex-col items-center gap-1">
          <span className="text-lg">Se mer</span>
          <MdArrowDownward />
        </Link>
      </Container>
    </motion.header>
  );
}
