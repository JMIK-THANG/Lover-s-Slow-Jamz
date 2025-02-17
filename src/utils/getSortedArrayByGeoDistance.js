export default function getSortedArrayByGeoDistance(Array, coords) {
  return Array.toSorted((a, b) => {
    const aLatitude = a.coords.latitude;
    const aLongitude = a.coords.longitude;
    const aDistanceSqrd =
      (((aLatitude - coords.latitude) ^ 2) + (aLongitude - coords.longitude)) ^
      2;

    const bLatitude = b.coords.latitude;
    const bLongitude = b.coords.longitude;
    const bDistanceSqrd =
      (((bLatitude - coords.latitude) ^ 2) + (bLongitude - coords.longitude)) ^
      2;

    return bDistanceSqrd - aDistanceSqrd;
  });
}
