let addressLat, addressLong, positionLat, positionLong;
const distance =
  ((positionLat - addressLat) ** 2 + (addressLong - positionLong) ** 2) ** 0.5;
console.log(`Расстояние: ${distance}`);
