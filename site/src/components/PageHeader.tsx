import { motion } from "framer-motion";
import Image from "next/future/image";
import Link from "next/link";
import { MdArrowBack, MdArrowDownward } from "react-icons/md";
import Container from "./Container";

export default function PageHeader() {
  return (
    <header className="relative h-[740px] min-h-[90vh] overflow-hidden overflow-y-hidden bg-black lg:min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute inset-0"
      >
        <Image
          className="block object-cover brightness-75"
          fill
          sizes="100vw"
          alt=""
          src="/assets/timetables-header.jpg"
          priority
        />
      </motion.div>

      <Container className="relative z-20 flex h-full flex-col items-center justify-between py-12 text-white">
        <div className="flex w-full items-baseline justify-between gap-4">
          <Link href="/">
            <p className="max-w-max text-xl !leading-normal">
              Akerselva
              <br />
              Friluftsmuseum
            </p>
          </Link>

          <Link className="hidden items-center gap-2 lg:flex" href="/">
            <MdArrowBack />
            <span className="text-lg">Tilbake</span>
          </Link>
        </div>

        <div className="w-full max-w-5xl">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl">
              Lørja: Akerselvas nye&nbsp;rutebåt
            </h1>
            <p className="py-6 text-xl">
              I samarbeid med Akerselva trebåtforening kan vi presentere, Lørja:
              Akerselvas nye rutebåt. Lørja går i rute mellom Vaterland og Inger
              Munchs brygge utenfor det nye Munchmuseet i Bjørvika.
            </p>
            <Link
              className="block max-w-max rounded-sm bg-white py-3 px-8 text-black transition-colors hover:bg-opacity-75"
              href="#rutetider"
            >
              Se rutetider
            </Link>
          </div>
        </div>

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
