function determineTriangleType() {
  let sideA = parseFloat(document.getElementById('sideA').value);
  let sideB = parseFloat(document.getElementById('sideB').value);
  let sideC = parseFloat(document.getElementById('sideC').value);

  if (
    isNaN(sideA) ||
    isNaN(sideB) ||
    isNaN(sideC) ||
    sideA <= 0 ||
    sideB <= 0 ||
    sideC <= 0
  ) {
    document.getElementById('triangleTypeOutput').textContent =
      'Please enter valid positive side lengths.';
    return;
  }

  let triangleType;

  if (sideA === sideB && sideB === sideC) {
    triangleType = 'Equilateral (all sides are equal)';
  } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    triangleType = 'Isosceles (two sides are equal)';
  } else {
    triangleType = 'Scalene (no sides are equal)';
  }

  document.getElementById(
    'triangleTypeOutput'
  ).textContent = `Triangle Type: ${triangleType}`;
}
