import { useEffect } from "react";
import Container from "../components/Container";
import Metadata from "../components/Metadata";
import ExhHeader from "../components/modules/ExhHeader";

export default function ContactPage() {
  return (
    <>
      <Metadata title="Inger Munch og Akerselva" description="..." />

      <ExhHeader />
      <Container>
        <p className="mx-auto max-w-[40ch] pt-52 pb-32 text-center text-3xl leading-normal text-white">
          I 1927 fikk Inger et kamera av sin bror Edvard Munch og med tiden ble
          hun en flink fotograf som på oppfordring av sin bror fotograferte
          akerselven fra Maridalen i nord til kysten i sør.
        </p>
      </Container>

      <style jsx global>{`
        html,
        body {
          background-color: #000000;
        }
      `}</style>
    </>
  );
}
