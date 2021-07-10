class PrivateConstructorClass {
  private constructor(private name: string) {}

  static execute() {
    return { ok: true };
  }
}

const privateConstructor = PrivateConstructorClass;

console.log("privateConstructor (execute) => ", privateConstructor.execute());
// privateConstructor (execute) =>  { ok: true }

/* Private Method */

class PrivateMethodClass {
  constructor() {}

  /** Execute its now Private and cannot be used outside of this class */
  #execute() {
    return { ok: true };
  }

  useExecute() {
    this.#execute();
  }
}

const privateMethodClass = new PrivateMethodClass();
// Property 'execute' does not exist on type 'PrivateMethodClass'.

class PrivateMethodWithWordClass {
  /** Execute its now Private and cannot be used outside of this class */
  private execute() {}

  useExecute() {
    this.execute();
  }
}

const privateMethodWithWordClass = new PrivateMethodWithWordClass();
//Property 'execute' is private and only accessible within class 'PrivateMethodWithWordClass'
