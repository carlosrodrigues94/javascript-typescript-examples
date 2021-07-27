export function KeysExample() {
  const object = { id: 1, name: "Carlos", age: 28 };

  const keys = Object.keys(object);

  console.log("[OBJECT] - KeysExample => ", keys);
  /* [OBJECT] - KeysExample =>  [ 'id', 'name', 'age' ] */
}
