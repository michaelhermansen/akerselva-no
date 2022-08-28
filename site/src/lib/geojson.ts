export interface LngLatObj {
  lng: number;
  lat: number;
}

type FeatureCollection = GeoJSON.FeatureCollection<
  GeoJSON.Geometry,
  GeoJSON.GeoJsonProperties
>;

export function generatePoint(
  geopoint: LngLatObj | undefined
): FeatureCollection | undefined {
  if (!geopoint) return;

  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [geopoint.lng, geopoint.lat],
        },
      },
    ],
  };
}

export function generateLine(
  pointArray: LngLatObj[] | undefined
): FeatureCollection | undefined {
  if (!pointArray) return;

  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: pointArray.map((point) => [point.lng, point.lat]),
        },
      },
    ],
  };
}
