/** Example Using SUPER */

function calculate(a: number, b: number) {
  return a + b;
}

class Inheritance {
  /**
   * If param calculate is public, all classes that extends this class can use it.
   * If param calculate is private, just this class can use it
   * If param calculte is protected, just this class and classes that extends this, can use it
   */
  constructor(protected calculate: (a: number, b: number) => number) {}

  executeCalc() {
    const result = this.calculate(5, 5);
    return result;
  }
}

class ExampleInheritance extends Inheritance {
  constructor() {
    /** When a class extends another class that has a constructor
     * this class must to call super method to pass the params of constructor
     *
     */
    super(calculate);
  }

  execute() {
    const calc = this.executeCalc();

    return calc;
  }
}

const exampleInheritance = new ExampleInheritance();

console.log("Inheritance with Super => ", exampleInheritance.execute());

// Inheritance with Super =>  10
