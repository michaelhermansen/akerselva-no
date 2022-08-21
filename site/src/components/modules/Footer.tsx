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
    <footer className="bg-black pt-12 text-white">
      <button
        onClick={handleScrollToTop}
        className="mx-auto hidden max-w-max p-4 text-xl opacity-50 transition-opacity hover:opacity-100 lg:block"
      >
        Til toppen
      </button>

      <Container className="grid gap-4 py-20 lg:grid-cols-2 lg:pb-48 lg:pt-32">
        <div className="justify-center py-1 text-2xl lg:flex lg:text-base">
          <p>Akerselva Friluftsmuseum</p>
        </div>

        <div className="justify-center lg:flex">
          <ul>
            <ListLink href="tel:+47 98 69 20 42">+47 98 69 20 42</ListLink>
            <ListLink href="mailto:hei@akerselva.no">hei@akerselva.no</ListLink>
            <ListLink href="/">@akerselva_friluftsmuseum</ListLink>
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
        className="block max-w-max py-1 opacity-50 transition-opacity hover:opacity-100"
        href={href}
      >
        {children}
      </a>
    </li>
  );
}
