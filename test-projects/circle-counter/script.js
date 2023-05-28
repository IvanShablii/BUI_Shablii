const DENSITY = 0.9068996821; // https://mathworld.wolfram.com/CirclePacking.html
const SIZE_TO_FILL = 1.7 * 1000 * 1000; // m2 -> mm2
const CIRCLE_DIAMETER = 0.6; // in mm
const PI = Math.PI;

function circlesCount() {
  // площа одного круга
  const areaCircle = PI * Math.pow(CIRCLE_DIAMETER / 2, 2);
  // шукаємо скільки кругів поміститься на заданій площі, якщо макс. заповнення ~90%
  let count = (SIZE_TO_FILL * DENSITY) / areaCircle;

  console.log("totalSize mm2 : " + SIZE_TO_FILL);
  console.log("filledSize mm2 : " + SIZE_TO_FILL * DENSITY);
  console.log("areaCircle mm2 : " + areaCircle.toFixed(2));

  return +count.toFixed(0);
}

circlesCount(); // 5.452.753
