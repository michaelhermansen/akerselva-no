import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import Container from "../Container";

export default function Footer() {
  const router = useRouter();

  function handleScrollToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
    router.replace({ pathname: router.pathname }, undefined, { shallow: true });
  }

  return (
    <footer className="border-t border-white border-opacity-10 bg-black pt-12 text-white">
      <button
        onClick={handleScrollToTop}
        className="mx-auto hidden max-w-max p-4 text-xl opacity-75 transition-opacity hover:opacity-100 lg:block"
      >
        Til toppen
      </button>

      <Container className="grid gap-4 py-20 lg:grid-cols-2 lg:pb-48 lg:pt-32">
        <div className="justify-center py-1 lg:flex">
          <Link href="/" className="mb-8 block max-w-max text-xl leading-tight">
            Akerselva
            <br />
            Friluftsmuseum
          </Link>
        </div>

        <div className="justify-center lg:flex">
          <ul>
            <ListLink href="tel:+47 98 69 20 42">+47 98 69 20 42</ListLink>
            <ListLink href="mailto:hei@akerselva.no">hei@akerselva.no</ListLink>
            <ListLink href="https://www.instagram.com/akerselva_friluftsmuseum/">
              @akerselva_friluftsmuseum
            </ListLink>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

function ListLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <li>
      <a
        className="block max-w-max py-1 opacity-75 transition-opacity hover:opacity-100"
        href={href}
      >
        {children}
      </a>
    </li>
  );
}
