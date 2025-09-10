console.log("Testing");

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
  favouriteFood: ["pizza", "pasta"],
};

// displays the object in the console
console.log(person);

// displays the object in a table format
console.table(person);

// to access properties use the dot notation
console.log(person.name); // Bob
console.log(person.age); //30
console.log(person.favouriteColour); //red

//to  access properties that are held within an array
console.log(person.favouriteFood[1]); // pasta

//adding a new property and assigning a value and then console logging
person.favouriteSport = "tennis";
console.log(person.favouriteSport);

// create an object for car details and console log it
const car = {
  make: "Ford",
  model: "KA",
  colour: "blue",
};
console.log(car);

//create an object for books and console log it
const book = {
  title: "IT",
  author: "Stephen King",
  pageCount: 2,
};
console.log(book);
