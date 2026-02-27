class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    console.log("Woof! Woof!");
  }
}

let animal1 = new Animal("Lion");
let dog1 = new Dog("Buddy", "Labrador");

animal1.makeSound();
dog1.makeSound();

console.log(dog1.name);
console.log(dog1.breed);
