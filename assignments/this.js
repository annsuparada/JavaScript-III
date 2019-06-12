/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window/Global Object Binding

* 2. Implicit Binding
* 3. New binding
* 4. Explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1

function sayName(name) {
    console.log(this);
    return name;
}
sayName("Suparada");



// Principle 2

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
myObj.sayHello('Suparada')

// another example
const sayNameFunc = obj => {
    obj.sayName = function() {
      console.log(`Hello my name is ${this.name}`);
      console.log(this);
    };
  };
  const me = { name: 'Suparada' };
  const myCat = { name: 'Mali' };
  const myAnotherCat = { name: 'Jeckie' };
  sayNameFunc(me);
  sayNameFunc(myCat);
  sayNameFunc(myAnotherCat);
  
  // Invoke Methods on our objects
  me.sayName();
  myCat.sayName();
  myAnotherCat.sayName();

// Principle 3

function CordiaPerson(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    }
}

const jenny = new CordiaPerson(' Richard');
const richard = new CordiaPerson(' Jenny');

jenny.speak();
richard.speak();

// Principle 4

jenny.speak.call(richard);richard.speak.apply(jenny)