const addressLat = 0,
  addressLong = 0,
  positionLat = 1,
  positionLong = 1;

const distance =
  ((positionLat - addressLat) ** 2 + (addressLong - positionLong) ** 2) ** 0.5;

console.log(`Расстояние: ${distance}`);
