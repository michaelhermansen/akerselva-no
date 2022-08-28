import { LayerProps } from "react-map-gl";

export const selectedItemStyle: LayerProps = {
  id: "selected-item",
  type: "circle",
  paint: {
    "circle-radius": 6,
    "circle-color": "#000000",
    "circle-stroke-color": "#ffffff",
    "circle-stroke-width": 4,
  },
};

export const selectedItemBgStyle: LayerProps = {
  id: "selected-item-bg",
  type: "circle",
  paint: {
    "circle-radius": 12,
    "circle-color": "#000000",
  },
};

export const entirePathStyle: LayerProps = {
  id: "entire-path",
  type: "line",
  paint: {
    "line-color": "#aaaaaa",
    "line-width": 3,
  },
  layout: {
    "line-cap": "round",
    "line-join": "round",
  },
};

export const visiblePathStyle: LayerProps = {
  id: "visible-path",
  type: "line",
  paint: {
    "line-color": "#000000",
    "line-width": 4,
  },
  layout: {
    "line-cap": "round",
    "line-join": "round",
  },
};
