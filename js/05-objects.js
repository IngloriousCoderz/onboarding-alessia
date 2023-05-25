const person = {
  name: "Antony",
  age: 40,
  "date-of-birth": "1982-10-17",
};

// dot notation
console.log(person.name);
person.age = 41;
console.log(person);
person.legs = 2;
console.log(person);
delete person.legs;
console.log(person);

// square bracket notation
console.log(person["name"]);
person["age"] = 40;
console.log(person);
person["legs"] = 2;
console.log(person);
delete person["legs"];
console.log(person);

console.log(person["date-of-birth"]);

const propertyName = "age";
console.log(person[propertyName]);

{
  const { age, name: firstName, "date-of-birth": dateOfBirth } = person;
  console.log(firstName, age, dateOfBirth);
}

{
  // destructuring
  // spread operator
  const { name, ...rest } = person;
  console.log(name, rest);

  console.log({ name: "Matteo", ...rest });
  console.log({ ...person });
}
