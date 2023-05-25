const person = {
  name: "Antony",
  limbs: {
    legs: 2,
  },
};

console.log(person.limbs?.legs);

delete person.limbs;

console.log(person.limbs != null ? person.limbs.legs : undefined);

console.log(person.limbs?.legs);
