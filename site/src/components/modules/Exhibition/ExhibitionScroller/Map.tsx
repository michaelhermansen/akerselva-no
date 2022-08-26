import "mapbox-gl/dist/mapbox-gl.css";
import ReactMap from "react-map-gl";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const MAPBOX_STYLE = "mapbox://styles/mapbox/dark-v10";

export default function Map() {
  return (
    <ReactMap
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
      logoPosition="top-left"
    />
  );
}
