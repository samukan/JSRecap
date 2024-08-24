function convertTemperature() {
  let celsius = document.getElementById('celsiusInput').value;

  let fahrenheit = (celsius * 9) / 5 + 32;

  let kelvin = parseFloat(celsius) + 273.15;

  document.getElementById(
    'fahrenheitOutput'
  ).textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
  document.getElementById(
    'kelvinOutput'
  ).textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
}
