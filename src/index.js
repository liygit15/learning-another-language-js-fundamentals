// ======================
//      VARIABLES
// ======================
// veggie = 'carrot'
// veggie = 'onion'
let veggie = 'carrot';
veggie = 'onion';
console.log(veggie);

//
//
// =========================
//      DATA STRUCTURES
// =========================

// animals = ['tiger', 'panda', 'raccoon']
// animals.append('opossum')

// dog = {'name': 'Sprinkles', 'age': 3}
// dog['is_friendly'] = True


const animals = ['tiger', 'panda', 'raccoon'];
console.log({ animals });
console.log(animals)
animals.push('oppssum')


const dog = {'name': 'Sprinkles', 'age': 3};
dog.isFriendly = true;
console.log(dog);


// JS also has a Map type, though plain objects tend to be used more frequently
const dogMap = new Map([['name', 'Sprinkles'], ['age', 3]]);
console.log({ dogMap });
dogMap.set('isFriendly', true);  // must use set and get, not . or [] notation
console.log({ dogMap });

// let animals = ['tiger', 'panda', 'raccoon'];
// animals.push('oppossum');
// console.log(animals);

// let dog = { name: 'Sprinkle', age: 3 };
// dog.is_friendly = true;
// console.log(dog);

//
//
// =================
//       LOOPS
// =================

// num = 5
// for i in range(num):
//    print(i)

let num = 5;
for (let i = 0; i < num; ){
    console.log(i++);
}

const num1 = 5
for (let i = 0; i < num1;) {
  console.log(++i);
}

// for animal in animals:
//    print(animal)
for (let animal of animals){
    console.log(animal);
}
// for k, v in dog.items():
//    print(f'{k}: {v}')
for (const [k, v] of Object.entries(dog)) {
    console.log(`${k}: ${v}`);
}

for (const k in dog){
    console.log(`${k}, ${dog[k]}`);
}

//
//
// ===================================
//       FUNCTIONS / CONDITIONALS
// ===================================

// def fizzbuzz(num):
//    if num % 3 == 0 and num % 5 == 0:
//        return 'fizzbuzz'
//    elif num % 3 == 0:
//        return 'fizz'
//    elif num % 5 == 0:
//        return 'buzz'
//    else:
//        return num

// Old way: Function Declaration
function fizzbuzz(num){
    if ((num % 3 == 0) && (num % 5 == 0)){
        return 'fizzbuzz';
    } else if (num % 3 == 0){
        return 'fizz';
    } else if (num % 5 == 0) {
        return 'buzz';
    } else {
        return num;
    }
}
//
// ES6 way: Function Expression
const fizzbuzzES6 = function(num){ 
    if ((num % 3 == 0) && (num % 5 == 0)){
        return 'fizzbuzz';
    } else if (num % 3 == 0){
        return 'fizz';
    } else if (num % 5 == 0) {
        return 'buzz';
    } else {
        return num;
    }
}
console.log(fizzbuzz(11))

const fizzbuzzES61 = num => {
    if ((num % 3 == 0) && (num % 5 == 0)){
        return 'fizzbuzz';
    } else if (num % 3 == 0){
        return 'fizz';
    } else if (num % 5 == 0) {
        return 'buzz';
    } else {
        return num;
    }
}
console.log(fizzbuzzES61(15))
//
//
// ======================
//       CLASSES
// ======================

// class Animal:
//    def __init__(self,species,name):
// //        self.species = species
// //        self.name = name
// class Animal {
//     constructor(species, name) {
//         this.species = species;
//         this.name = name;
//     }
//     toString() {
//     return this.name + 'is a ' + this.species;
//     }
// }
// const animal = new Animal('Cat','Ben');
// console.log(animal.toString());
//    def __str__(self):
//        return f'{self.name} is a {self.species}'


// class Dog(Animal):
//    def __init__(self, name, trick):
//        super().__init__(species='dog', name=name)
//        self.trick = trick
//
//    def __str__(self):
//        return f'{super().__str__()} that can {self.trick}'


class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }

  toString() {
    return `${this.name} is a ${this.species}`;
  }
}

const a = new Animal('sloth', 'Flash');
console.log({ a });
console.log(`a: ${a}`);


class Dog extends Animal {
    constructor(name, trick){
        super('dog', name);
        this.trick = trick;
    }
    
    toString(){
        return `${super.toString()} that can ${this.trick}`;
    }
}
const cuty = new Dog('Rose','sitting');
console.log(cuty.toString());
