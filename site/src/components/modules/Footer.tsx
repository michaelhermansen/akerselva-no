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
        className="mx-auto block max-w-max p-4 text-xl opacity-50 transition-opacity hover:opacity-100"
      >
        Til toppen
      </button>

      <Container className="grid grid-cols-2 gap-12 pb-48 pt-32">
        <div className="flex justify-center">
          <p>Akerselva Friluftsmuseum</p>
        </div>

        <div className="flex justify-center">
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
