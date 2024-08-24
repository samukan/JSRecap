function filterEvenNumbers() {
  let numbers = [];

  while (true) {
    let input = prompt("Enter a number (or 'done' to finish):");

    if (input.toLowerCase() === 'done') {
      break;
    }

    let number = parseInt(input);

    if (!isNaN(number)) {
      numbers.push(number);
    } else {
      alert("Please enter a valid number or 'done' to finish.");
    }
  }

  let evenNumbers = [];
  for (let num of numbers) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }

  let resultsDiv = document.getElementById('results');
  if (evenNumbers.length > 0) {
    resultsDiv.innerHTML = `<p>Even Numbers: ${evenNumbers.join(', ')}</p>`;
  } else {
    resultsDiv.innerHTML = `<p>Even Numbers: None</p>`;
  }
}
