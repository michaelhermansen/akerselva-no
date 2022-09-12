import classNames from "classnames";
import Container from "../components/Container";
import Metadata from "../components/Metadata";
import Footer from "../components/modules/Footer";
import ImageTextRow from "../components/modules/ImageTextRow";
import PageHeader from "../components/PageHeader";

export default function TimeTables() {
  return (
    <>
      <Metadata title="Rutetider" description="..." />

      <PageHeader />

      <div id="content">
        <Container>
          <p className="mx-auto max-w-4xl px-4 py-24 text-center text-xl !leading-snug sm:text-2xl md:py-44 md:text-3xl">
            Under togsporene på Oslo S ligger Akerselva i kulvert. Togsporene
            danner et av Oslos mest omtalte sosiale skiller, med Bjørvika på den
            ene siden og Grønland på den andre.
          </p>

          <ImageTextRow
            text="«Ferjen går fullastet. Til høireprammer som fører Oslos søppel til Langøene. To øer forenes, og det er en frodig vekst der ute.»"
            caption="Foto av Inger Munch"
            imageOrientation="landscape"
            imageSrc="/assets/exhibition-scroller/2.jpg"
          />

          <ImageTextRow
            text="Inspirert av den britiske Punten og den norske Lørja har Akerselva trebåtforening  bygget en båt som går mellom Vaterland og Bjørvika, med støtte fra Eckbos legat og Kulturrådet."
            caption="Her på sjøen ved Bjørvika"
            imageOrientation="portrait"
            reverse
            imageSrc="/assets/exhibition-scroller/2.jpg"
          />

          <ImageTextRow
            text="«Ferjen går fullastet. Til høireprammer som fører Oslos søppel til Langøene. To øer forenes, og det er en frodig vekst der ute.»"
            caption="Foto av Inger Munch"
            imageOrientation="landscape"
            imageSrc="/assets/exhibition-scroller/2.jpg"
          />
        </Container>
      </div>

      <div className="py-40">
        <section id="rutetider" className="py-6">
          <Container>
            <h2 className="text-center text-4xl">Rutetider</h2>
            <p className="py-2 text-center text-lg">
              Å reise med rutebåten er gratis for alle!
            </p>

            <div className="mx-auto mt-12 max-w-6xl overflow-x-auto rounded-md border border-black/5 bg-white px-4 py-8">
              <table className="w-full min-w-[800px] table-fixed">
                <tbody>
                  <tr>
                    <TableHeader>Mandag</TableHeader>
                    <TableHeader>Tirsdag</TableHeader>
                    <TableHeader>Onsdag</TableHeader>
                    <TableHeader>Torsdag</TableHeader>
                    <TableHeader>Fredag</TableHeader>
                    <TableHeader>Lørdag</TableHeader>
                    <TableHeader>Søndag</TableHeader>
                  </tr>
                  <tr>
                    <TableData noData>Ingen avgang</TableData>
                    <TableData noData>Ingen avgang</TableData>
                    <TableData>11:00</TableData>
                    <TableData>11:00</TableData>
                    <TableData>11:00</TableData>
                    <TableData>11:00</TableData>
                    <TableData>11:00</TableData>
                  </tr>
                  <tr>
                    <TableData noData />
                    <TableData noData />
                    <TableData>12:00</TableData>
                    <TableData>12:00</TableData>
                    <TableData>12:00</TableData>
                    <TableData>12:00</TableData>
                    <TableData>12:00</TableData>
                  </tr>
                  <tr>
                    <TableData noData />
                    <TableData noData />
                    <TableData>13:00</TableData>
                    <TableData>13:00</TableData>
                    <TableData>13:00</TableData>
                    <TableData>13:00</TableData>
                    <TableData>13:00</TableData>
                  </tr>
                  <tr>
                    <TableData noData />
                    <TableData noData />
                    <TableData>14:00</TableData>
                    <TableData>14:00</TableData>
                    <TableData>14:00</TableData>
                    <TableData>14:00</TableData>
                    <TableData>14:00</TableData>
                  </tr>
                  <tr>
                    <TableData noData />
                    <TableData noData />
                    <TableData>15:00</TableData>
                    <TableData>15:00</TableData>
                    <TableData>15:00</TableData>
                    <TableData>15:00</TableData>
                    <TableData>15:00</TableData>
                  </tr>
                  <tr>
                    <TableData noData />
                    <TableData noData />
                    <TableData>16:00</TableData>
                    <TableData>16:00</TableData>
                    <TableData>16:00</TableData>
                    <TableData>16:00</TableData>
                    <TableData>16:00</TableData>
                  </tr>
                  <tr>
                    <TableData noData />
                    <TableData noData />
                    <TableData>17:00</TableData>
                    <TableData>17:00</TableData>
                    <TableData>17:00</TableData>
                    <TableData>17:00</TableData>
                    <TableData>17:00</TableData>
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
              <p className="text-black/50">
                Vi respekterer Akerselvas krefter og opererer derfor med
                forholdsforbehold.
              </p>
            </div>
          </Container>
        </section>
      </div>

      <Footer />
    </>
  );
}

function TableHeader({ children }: { children: string }) {
  return <th className="pb-8 pt-4 text-xl font-normal">{children}</th>;
}

function TableData({ children, noData }: { children?: string; noData?: true }) {
  return (
    <td className="p-1">
      <div
        className={classNames("rounded-xs py-3 text-center opacity-60", {
          "bg-gray-medium/5": !noData,
          "text-black/50": noData,
        })}
      >
        {children}
      </div>
    </td>
  );
}
