import { indexOf } from "lodash";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect } from "react";
import ReactMap, { Layer, Source, useMap } from "react-map-gl";
import scrollerItems from "../../../../lib/data/scrollerItems";
import {
  generateLine,
  generatePoint,
  LngLatObj,
} from "../../../../lib/geojson";
import {
  entirePathStyle,
  selectedItemBgStyle,
  selectedItemStyle,
  visiblePathStyle,
} from "../../../../styles/mapBoxLayerStyles";
import { ScrollerItem } from "./ScrollerText";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const MAPBOX_STYLE = "mapbox://styles/mapbox/light-v10";

interface MapProps {
  selectedItem?: ScrollerItem;
  mapId: string;
}

const tempItemsWithGeopoints: LngLatObj[] = [];
scrollerItems.forEach((item) => {
  if (item.geopoint) tempItemsWithGeopoints.push(item.geopoint);
});

export default function Map({ selectedItem, mapId }: MapProps) {
  const maps = useMap();
  const currentMap = maps[mapId];
  const selectedItemIndex = indexOf(
    scrollerItems,
    scrollerItems.find((item) => item.id === selectedItem?.id)
  );

  const selectedItemGJ = generatePoint(selectedItem?.geopoint);
  const entirePathGJ = generateLine(tempItemsWithGeopoints);
  const visiblePathGJ = generateLine(
    tempItemsWithGeopoints.slice(0, selectedItemIndex + 1)
  );

  useEffect(() => {
    currentMap?.easeTo({ center: selectedItem?.geopoint, duration: 500 });
  }, [currentMap, selectedItem]);

  return (
    <ReactMap
      id={mapId}
      mapboxAccessToken={MAPBOX_TOKEN}
      mapStyle={MAPBOX_STYLE}
      initialViewState={{
        latitude: scrollerItems[0].geopoint?.lat,
        longitude: scrollerItems[0].geopoint?.lng,
        zoom: 11,
        bearing: -25,
        pitch: 0,
      }}
      keyboard={false}
      padding={{ bottom: 30, left: 30, top: 0, right: 0 }}
      style={{ position: "absolute", width: "100%", height: "100%" }}
      logoPosition="top-left"
    >
      <Source id="entire-path" type="geojson" data={entirePathGJ}>
        <Layer {...entirePathStyle} />
      </Source>
      <Source id="visible-path" type="geojson" data={visiblePathGJ}>
        <Layer {...visiblePathStyle} />
      </Source>
      {selectedItemGJ && (
        <Source id="selected-item" type="geojson" data={selectedItemGJ}>
          <Layer {...selectedItemBgStyle} />
          <Layer {...selectedItemStyle} />
        </Source>
      )}
    </ReactMap>
  );
}
