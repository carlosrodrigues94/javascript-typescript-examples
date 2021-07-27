export function FreezeExample() {
  const object = { id: 1, name: "Carlos" };

  /** Will prevent the modification of this object */
  /** Make the return of freeze function and original object readonly properties */
  const result = Object.freeze(object);

  console.log("[OBJECT] - FreezeExample => ", result);
}
