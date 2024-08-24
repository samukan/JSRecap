function performArrayOperations() {
  let numbers = [];

  for (let i = 1; i <= 5; i++) {
    let num = parseInt(prompt(`Enter Number ${i}:`));
    numbers.push(num);
  }

  let resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `<p>Numbers: [${numbers.join(', ')}]</p>`;

  let searchNum = parseInt(prompt('Enter a Number to Search:'));
  let foundMessage = numbers.includes(searchNum)
    ? `Number ${searchNum} is found in the array.`
    : `Number ${searchNum} is not found in the array.`;

  resultsDiv.innerHTML += `<p>${foundMessage}</p>`;

  numbers.pop();

  resultsDiv.innerHTML += `<p>Updated Numbers: [${numbers.join(', ')}]</p>`;

  numbers.sort((a, b) => a - b);

  resultsDiv.innerHTML += `<p>Sorted Numbers: [${numbers.join(', ')}]</p>`;
}
