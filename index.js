// Code your solutions in this file
// const people = [];

function writeCards(names, event) {
    const people = [];
  for (let i = 0; i < names.length; i++) {
   people.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
   
  }

  return people;
}

// writeCards(([person], "birthday"))

function countDown(number) {
    while (number > 0) {
    console.log(number);
    number--;
}
   console.log(number)
}
