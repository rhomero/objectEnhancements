function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  const createInstructor2 = (firstName, lastName) => ({firstName, lastName});
  console.log(createInstructor2("john","deer"));

  let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

let instructor2 = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return this.firstName + " says bye!";
    }
  }

const createAnimal = (species, verb, noise) => {
    return {
       species,
       [verb](){
        return noise; 
       }
    }
}

const d = createAnimal("dog", "bark", "Woooof!");
const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
console.log(createAnimal(d));
console.log(createAnimal(s));
console.log(d.bark());
console.log(s.bleet());
