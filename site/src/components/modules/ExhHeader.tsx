import Image from "next/future/image";
import Link from "next/link";
import { MdArrowBack, MdArrowDownward } from "react-icons/md";
import Container from "../Container";

export default function ExhHeader() {
  return (
    <header className="relative h-[900px] overflow-hidden">
      <Image
        className="absolute top-0 z-0 block h-[840px] w-full object-cover"
        fill
        alt=""
        src="/assets/img-1.png"
      />

      <Image
        className="absolute top-1/2 left-1/2 z-10 block -translate-y-1/2 -translate-x-1/2 object-cover"
        width={440}
        height={280}
        alt=""
        src="/assets/ima-logo.svg"
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

          <Link className="flex items-center gap-2" href="/">
            <MdArrowBack />
            <span className="text-lg">Tilbake</span>
          </Link>
        </div>
        <Link href="/" className="flex max-w-max flex-col items-center gap-1">
          <span className="text-lg">Se mer</span>
          <MdArrowDownward />
        </Link>
      </Container>
    </header>
  );
}
