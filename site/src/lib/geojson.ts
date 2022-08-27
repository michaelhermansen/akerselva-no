export interface LngLatObj {
  lng: number;
  lat: number;
}

type Point = GeoJSON.FeatureCollection<
  GeoJSON.Geometry,
  GeoJSON.GeoJsonProperties
>;

export function generatePoint(
  geopoint: LngLatObj | undefined
): Point | undefined {
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
