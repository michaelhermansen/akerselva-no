import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { MdArrowUpward } from "react-icons/md";
import Container from "../Container";

export default function Footer() {
  const router = useRouter();

  function handleScrollToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
    router.replace({ pathname: router.pathname }, undefined, { shallow: true });
  }

  return (
    <footer className="border-t border-white border-opacity-10 bg-black pt-32 text-white">
      <Container className="grid gap-16 py-8 lg:grid-cols-2">
        <div className="text-lg">
          <Link href="/" className="block max-w-max leading-normal">
            Akerselva Friluftsmuseum
          </Link>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1 py-2 opacity-50 transition-opacity hover:opacity-100"
          >
            <MdArrowUpward />
            <span>Til toppen</span>
          </button>
        </div>

        <div className="justify-center text-lg lg:flex">
          <ul>
            <ListLink href="tel:+47 98 69 20 42">+47 98 69 20 42</ListLink>
            <ListLink href="mailto:post@akerselva.no">
              post@akerselva.no
            </ListLink>
            <ListLink href="https://www.instagram.com/akerselva_friluftsmuseum/">
              @akerselva_friluftsmuseum
            </ListLink>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-10 pt-36 pb-16 lg:flex-row lg:items-center">
        <p className="text-sm text-white/50">
          Designet og utviklet av
          <br />
          <a
            className="transition-colors hover:text-white"
            href="https://www.travers.as/"
          >
            Travers
          </a>
          {" & "}
          <a
            className="transition-colors hover:text-white"
            href="https://github.com/michaelhermansen"
          >
            Michael
          </a>
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://akerselvatrebaatforening.org/"
            title="Akerselva Trebåtforening"
            className="opacity-50 transition-opacity hover:opacity-100"
          >
            <Image
              src="/assets/footer-logos/logo-atf.png"
              alt="Logo for Akerselva Trebåtforening"
              width={48}
              height={48}
            />
          </a>
          <a
            href="https://www.oslomuseum.no/arbeidermuseet/"
            title="Arbeidermuseet"
            className="opacity-50 transition-opacity hover:opacity-100"
          >
            <Image
              src="/assets/footer-logos/logo-omam.svg"
              alt="Logo for Arbeidermuseet"
              width={176}
              height={44}
            />
          </a>
          <a
            href="https://frittord.no/"
            title="Fritt ord"
            className="opacity-50 transition-opacity hover:opacity-100"
          >
            <Image
              className="-translate-y-3"
              src="/assets/footer-logos/logo-fo.svg"
              alt="Logo for Fritt ord"
              width={116}
              height={44}
            />
          </a>
        </div>
      </Container>
    </footer>
  );
}

function ListLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <li>
      <a
        className="block max-w-max py-1 opacity-50 transition-opacity hover:opacity-100"
        href={href}
      >
        {children}
      </a>
    </li>
  );
}
