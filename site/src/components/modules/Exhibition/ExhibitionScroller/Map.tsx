import "mapbox-gl/dist/mapbox-gl.css";
import ReactMap, { Layer, LayerProps, Source, useMap } from "react-map-gl";
import { ScrollerItem } from "./ScrollerText";
import { generatePoint } from "../../../../lib/geojson";
import { useEffect } from "react";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const MAPBOX_STYLE = "mapbox://styles/mapbox/light-v10";

interface MapProps {
  selectedItem?: ScrollerItem;
  mapId: string;
}

export default function Map({ selectedItem, mapId }: MapProps) {
  const maps = useMap();
  const currentMap = maps[mapId];

  const selectedItemGJ = generatePoint(selectedItem?.geopoint);

  const selectedItemStyle: LayerProps = {
    id: "selected-item",
    type: "circle",
    paint: {
      "circle-radius": 6,
      "circle-color": "#000000",
      "circle-stroke-color": "#ffffff",
      "circle-stroke-width": 4,
    },
  };

  const selectedItemBgStyle: LayerProps = {
    id: "selected-item-bg",
    type: "circle",
    paint: {
      "circle-radius": 12,
      "circle-color": "#000000",
    },
  };

  useEffect(() => {
    currentMap?.easeTo({ center: selectedItem?.geopoint, duration: 500 });
  }, [currentMap, selectedItem]);

  return (
    <ReactMap
      id={mapId}
      mapboxAccessToken={MAPBOX_TOKEN}
      mapStyle={MAPBOX_STYLE}
      initialViewState={{
        latitude: 59.9403,
        longitude: 10.7668,
        zoom: 11,
        bearing: -25,
        pitch: 0,
      }}
      padding={{ bottom: 30, left: 30, top: 0, right: 0 }}
      style={{ position: "absolute", width: "100%", height: "100%" }}
      logoPosition="top-left"
    >
      {selectedItemGJ && (
        <Source id="selected-item" type="geojson" data={selectedItemGJ}>
          <Layer {...selectedItemBgStyle} />
          <Layer {...selectedItemStyle} />
        </Source>
      )}
    </ReactMap>
  );
}
