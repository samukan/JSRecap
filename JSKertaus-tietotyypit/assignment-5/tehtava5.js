function calculateSum() {
  let number = parseInt(document.getElementById('numberInput').value);

  if (isNaN(number) || number <= 0) {
    document.getElementById('sumOutput').textContent =
      'Please enter a valid positive integer.';
    return;
  }

  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  document.getElementById(
    'sumOutput'
  ).textContent = `The sum of all natural numbers up to ${number} is: ${sum}`;
}
