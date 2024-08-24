function calculateDistance() {
  let point1 = document.getElementById('point1Input').value;
  let point2 = document.getElementById('point2Input').value;

  let [x1, y1] = point1.split(',').map(Number);
  let [x2, y2] = point2.split(',').map(Number);

  let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  document.getElementById(
    'distanceOutput'
  ).textContent = `Distance: ${distance.toFixed(2)}`;
}
