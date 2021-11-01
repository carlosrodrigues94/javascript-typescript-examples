class ComponentWithBackReference {
  public prototype: Prototype;

  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}

class Prototype {
  public primitive!: number;
  public component!: Date;
  public circularReference!: ComponentWithBackReference;

  public clone(): this {
    const clone = Object.create(this);

    clone.component = Object.create(this.component);

    clone.circularReference = {
      ...this.circularReference,
      prototype: Object.create(this),
    } as ComponentWithBackReference;

    return clone;
  }
}

const current = new Prototype();

current.primitive = 245;
current.component = new Date();

current.circularReference = new ComponentWithBackReference(current);

const clone = current.clone();

const primitiveIsEqual = current.primitive === clone.primitive;
const componentIsEqual = current.component === clone.component;

const circularReferenceIsEqual =
  current.circularReference === clone.circularReference;

console.log({
  primitiveIsEqual, // true
  componentIsEqual, // false
  circularReferenceIsEqual, // false
});
