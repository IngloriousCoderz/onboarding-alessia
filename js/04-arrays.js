const numbers = [1, 2, 3, 4, 5];

{
  const first = numbers[0];
  const second = numbers[1];
  const last = numbers[numbers.length - 1];
  console.log(first, second, last);

  numbers.push(6);
  console.log(numbers);
  numbers.pop();
  console.log(numbers);

  numbers.unshift(7);
  console.log(numbers);
  numbers.shift(0);
  console.log(numbers);

  // delete numbers[2];
  numbers.splice(2, 1, 8, 9);
  console.log(numbers);
  numbers.splice(2, 2, 3);
  console.log(numbers);
}

{
  const LAST_INDEX = 1;

  // destructuring + spread operator
  const [first, second, ...rest] = numbers;
  const last = numbers[numbers.length - LAST_INDEX];
  console.log(first, second, last, rest);

  console.log([6, 7, ...rest]);
  console.log([...numbers]);
}

{
  console.log(numbers.slice(2, 4));
  console.log([...numbers.slice(0, 2), 8, 9, ...numbers.slice(3)]);
  console.log(numbers);
}

const arrayWithDuplicates = [1, 1, 2, 3, 4, 5, 3, 5];
const set = new Set(arrayWithDuplicates);
console.log(set);
const arrayWithoutDuplicates = [...set];
console.log(arrayWithoutDuplicates);

console.log([...new Set(arrayWithDuplicates)]);
