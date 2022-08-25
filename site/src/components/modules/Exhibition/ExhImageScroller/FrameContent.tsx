import Map from "react-map-gl";
import { ScrollerItem } from "./ScrollerText";
import "mapbox-gl/dist/mapbox-gl.css";
import classNames from "classnames";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const MAPBOX_STYLE = "mapbox://styles/mapbox/dark-v10";

interface FrameContentProps {
  showMap: boolean;
  itemInView: ScrollerItem;
}

export default function FrameContent({
  showMap,
  itemInView,
}: FrameContentProps) {
  return (
    <>
      <div
        className={classNames("absolute inset-0 z-20 p-6 transition-opacity", {
          "opacity-0": showMap,
        })}
      >
        Bilde {itemInView.id}
      </div>

      <div
        className={classNames(
          "pointer-events-none absolute inset-0 z-30 transition-opacity",
          { "z-10 opacity-0": !showMap }
        )}
      >
        <Map
          id="scrollerMap"
          mapboxAccessToken={MAPBOX_TOKEN}
          mapStyle={MAPBOX_STYLE}
          viewState={{
            longitude: 10.7668,
            latitude: 59.9403,
            zoom: 11,
            bearing: -25,
            pitch: 0,
            padding: { top: 0, right: 0, bottom: 0, left: 0 },
            width: 0,
            height: 0,
          }}
        />
      </div>
    </>
  );
}
