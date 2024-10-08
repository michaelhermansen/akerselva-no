import classNames from "classnames";
import Container from "../components/Container";
import Metadata from "../components/Metadata";
import CompactCTA from "../components/modules/CompactCTA";
import Footer from "../components/modules/Footer";
import ImageTextRow from "../components/modules/ImageTextRow";
import PageHeader from "../components/PageHeader";

export default function TimeTables() {
  return (
    <>
      <Metadata
        title="Lørja: Akerselvas nye rutebåt – Akerselva Friluftsmuseum"
        description="Under togsporene på Oslo S ligger Akerselva i kulvert. Togsporene danner et av Oslos mest omtalte sosiale skiller. Bjørvika på den ene siden og Grønland på den andre. I samarbeid med Akerselva trebåtforening kan vi presentere, Lørja: Akerselvas nye rutebåt. Lørja går i rute mellom Vaterland og Inger Munchs brygge utenfor det nye Munchmuseet i Bjørvika."
        imageUrl="/assets/open-graph/og_boat.jpg"
      />

      <PageHeader />

      <div id="content">
        <Container>
          <div className="mx-auto max-w-4xl px-4 py-20 text-lg !leading-normal sm:text-2xl md:py-44 md:text-center md:text-3xl">
            <p className="mb-6">
              Under togsporene på Oslo S ligger Akerselva i kulvert. Togsporene
              danner et av Oslos mest omtalte sosiale skiller, med Bjørvika på
              den ene siden og Grønland på den andre.
            </p>
            <p>
              I samarbeid med Akerselva trebåtforening har vi bygget Lørja;
              Akerselvas nye rutebåt. Den skal gå i rute mellom Vaterland og
              Inger Munchs brygge.
            </p>
          </div>

          <ImageTextRow
            text="I samarbeid med Akerselva trebåtforening kan vi endelig presentere Lørja; Akerselvas nye rutebåt som skal gå mellom Vaterland og Inger Munchs brygge."
            imageOrientation="landscape"
            imageSrc="/assets/timetables/1.jpg"
          />

          <ImageTextRow
            text="Lørja er en flatbunnet pram bygget på dugnad av Akerselva trebåtforening. Den kan frakte opp til 10 personer i tillegg til en Lørjekaptein."
            imageOrientation="landscape"
            reverse
            imageSrc="/assets/timetables/2.jpg"
          />
        </Container>
      </div>

      <div className="pt-40">
        <section id="rutetider" className="py-6">
          <Container>
            <h2 className="text-center text-4xl">Rutetider</h2>

            <div className="relative grid place-items-center overflow-hidden">
              <div className="absolute z-20 rounded-md bg-gray-medium py-3 px-6 text-lg text-white shadow-md">
                Kommer snart
              </div>
              <div className="absolute inset-0 z-10 bg-gray-light/50 backdrop-blur-sm" />

              <div aria-hidden className="pointer-events-none select-none">
                <div className="mx-auto mt-12 max-w-6xl overflow-x-auto rounded-md border border-black/5 bg-white px-4 py-8">
                  <table className="w-full min-w-[700px] table-fixed">
                    <tbody>
                      <tr>
                        <TableHeader>22. sep</TableHeader>
                        <TableHeader>24. sep</TableHeader>
                        <TableHeader>25. sep</TableHeader>
                        <TableHeader>1. okt</TableHeader>
                        <TableHeader>2. okt</TableHeader>
                        <TableHeader>8. okt</TableHeader>
                        <TableHeader>9. okt</TableHeader>
                      </tr>
                      <tr>
                        <TableData>20:00</TableData>
                        <TableData>10:00</TableData>
                        <TableData>10:00</TableData>
                        <TableData>10:00</TableData>
                        <TableData>10:00</TableData>
                        <TableData>10:00</TableData>
                        <TableData>10:00</TableData>
                      </tr>
                      <tr>
                        <TableData>21:00</TableData>
                        <TableData>11:00</TableData>
                        <TableData>11:00</TableData>
                        <TableData>11:00</TableData>
                        <TableData>11:00</TableData>
                        <TableData>11:00</TableData>
                        <TableData>11:00</TableData>
                      </tr>
                      <tr>
                        <TableData>22:00</TableData>
                        <TableData>12:00</TableData>
                        <TableData>12:00</TableData>
                        <TableData>12:00</TableData>
                        <TableData>12:00</TableData>
                        <TableData>12:00</TableData>
                        <TableData>12:00</TableData>
                      </tr>
                      <tr>
                        <TableData>23:00</TableData>
                        <TableData>13:00</TableData>
                        <TableData>13:00</TableData>
                        <TableData>13:00</TableData>
                        <TableData>13:00</TableData>
                        <TableData>13:00</TableData>
                        <TableData>13:00</TableData>
                      </tr>
                      <tr>
                        <TableData noData />
                        <TableData>14:00</TableData>
                        <TableData>14:00</TableData>
                        <TableData>14:00</TableData>
                        <TableData>14:00</TableData>
                        <TableData>14:00</TableData>
                        <TableData>14:00</TableData>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-4 py-5">
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 shrink-0 rounded-full bg-black/5" />
                    <span className="whitespace-nowrap">
                      Avganger fra Vaterland
                    </span>
                  </div>
                  <p className="text-black/60">
                    Vi respekterer Akerselvas krefter og opererer derfor med
                    forholdsforbehold.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>

      <section className="pb-52 pt-36">
        <Container>
          <CompactCTA
            title="Inger Munch og Akerselva"
            text="Inger Munch, søster av Edvard Munch, testamenterte ved sin død i 1952 over 200 negativer til Oslo Bymuseum. Blant negativene var mange av bildene fra hennes bok «Akerselven» som ble utgitt i 1932. I 2022 er det 90 år siden boka kom ut, og 70 år siden Inger Munch døde. Vi markerer dette med utstillingen Inger Munch og Akerselva!"
            url="/inger-munch"
            imageSrc="/assets/inger-edvard.jpg"
          />
        </Container>
      </section>

      <Footer />
    </>
  );
}

function TableHeader({ children }: { children: string }) {
  return <th className="pb-8 pt-4 font-normal md:text-lg">{children}</th>;
}

function TableData({ children, noData }: { children?: string; noData?: true }) {
  return (
    <td className="p-1 text-sm md:text-base">
      <div
        className={classNames("rounded-xs py-3 text-center opacity-60", {
          "bg-gray-medium/5": !noData,
          "text-black/60": noData,
        })}
      >
        {children}
      </div>
    </td>
  );
}
