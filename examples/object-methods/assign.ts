export function AssignExample() {
  const object = { id: 1, name: "Carlos", age: 28 };

  /** Modifies the original object, returns the object modified */
  const assign = Object.assign(object, { id: 2 });

  console.log("[OBJECT] - AssignExample => ", assign);
  // OBJECT] - AssignExample =>  { id: 2, name: 'Carlos', age: 28 }

  console.log("[OBJECT] - AssignExample => ", object);
  // OBJECT] - AssignExample =>  { id: 2, name: 'Carlos', age: 28 }
}
