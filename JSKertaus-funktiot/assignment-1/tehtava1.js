const readline = require('readline');

let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

console.log('Fruits:', fruits);

console.log('Length of Fruits:', fruits.length);

console.log('Element at Index 2:', fruits[2]);

console.log('Last Element of Fruits:', fruits[fruits.length - 1]);

let vegetables = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askForVegetable(count) {
  if (count < 3) {
    rl.question('Enter a vegetable: ', function (vegetable) {
      vegetables.push(vegetable);
      askForVegetable(count + 1);
    });
  } else {
    console.log('Vegetables:', vegetables);

    console.log('Length of Vegetables:', vegetables.length);

    rl.close();
  }
}

askForVegetable(0);
