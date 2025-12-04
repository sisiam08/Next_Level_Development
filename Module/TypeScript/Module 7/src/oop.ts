class Animal {
  //   name: string;
  //   species: string;
  //   sound: string;

  // or
  //   public name: string;
  //   public species: string;
  //   public sound: string;

  //   constructor(name: string, species: string, sound: string) {
  //     this.name = name;
  //     this.species = species;
  //     this.sound = sound;
  //   }

  // or

  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(`${this.name} make sound : ${this.sound}`);
  }
}

const dog = new Animal("Kutta", "Dog", "Ghew Ghew");
const cat = new Animal("Billi", "Cat", "Meow Meow");

// console.log(dog);
dog.makeSound();

// console.log(cat);
cat.makeSound();
