const numbers = [1, 2, 3, 4, 5];

const square = (num) => num ** 2;
const isEven = (num) => num % 2 === 0;
const sum = (num1, num2) => num1 + num2;

for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
}

const person = {
  name: "Antony",
  age: 40,
};
for (const key in person) {
  console.log(key, person[key]);
}

for (const index in numbers) {
  console.log(index, numbers[index]);
}

for (const item of numbers) {
  console.log(numbers.indexOf(item), item);
}

numbers.forEach((item, index, arr) => {
  console.log(index, item, arr);
});

numbers.forEach((item) => console.log(item));
numbers.forEach(console.log);

// squares: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]
{
  const squares = [];
  numbers.forEach((item) => {
    squares.push(square(item));
  });
  console.log(squares);
}

{
  const squares = numbers.map((item) => {
    return square(item);
  });
  console.log(squares);
}

{
  const squares = numbers.map(square);
  console.log(squares);
}

{
  const evens = []; // init
  numbers.forEach((item) => {
    if (isEven(item)) {
      evens.push(item); // accumulate
    }
  });
  console.log(evens); // return
}

{
  const evens = numbers.filter(isEven);
  console.log(evens);
}

{
  const firstEven = numbers.find(isEven);
  console.log(firstEven);
}

{
  const firstEvenIndex = numbers.findIndex(isEven);
  console.log(firstEvenIndex);
}

{
  let hasEven = false;
  numbers.forEach((item) => {
    if (isEven(item)) {
      hasEven = true;
    }
  });
  console.log(hasEven);
}

{
  const hasEven = numbers.some(isEven);
  console.log(hasEven);
}

{
  let allEvens = true; // init
  numbers.forEach((item) => {
    if (!isEven(item)) {
      allEvens = false; // accumulate
    }
  });
  console.log(allEvens); // return
}

{
  const allEvens = numbers.every(isEven);
  console.log(allEvens);
}

{
  // sum: [1, 2, 3, 4, 5] -> 1 + 2 + 3 + 4 + 5 = 15
  let acc = 0; // init
  numbers.forEach((item) => {
    acc += item; // accumulate
  });
  console.log(acc); // return
}

{
  const result = numbers.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);
  console.log(result);
}

{
  const result = numbers.reduce(sum);
  console.log(result);
}

{
  // reduce can replace any other array method
  const allEvens = numbers.reduce((acc, item) => {
    if (!isEven(item)) {
      acc = false;
    }
    return acc;
  }, true);
  console.log(allEvens);
}

{
  // sumOfSquareEvens: [1, 2, 3, 4, 5] -> [2, 4] -> [4, 16] -> 20

  console.log(sumOfSquareEvens(numbers));

  function sumOfSquareEvens(numbers) {
    let acc = 0;
    for (const item of numbers) {
      if (isEven(item)) {
        acc = sum(acc, square(item));
      }
    }
    return acc;
  }
}

{
  const evens = numbers.filter(isEven);
  const squares = evens.map(square);
  const result = squares.reduce(sum);
  console.log(result);
}

{
  const result = numbers //
    .filter(isEven)
    .map(square)
    .reduce(sum);
  console.log(result);
}
