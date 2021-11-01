export function FreezeExample() {
  const object = { id: 1, name: "Carlos" };

  /** Will prevent the modification of this object */
  /** Make the return of freeze function and original object readonly properties */
  const result = Object.freeze(object);

  // # cannot do this because id its now a readonly property
  // result.id = "new value"

  console.log("[OBJECT] - FreezeExample => ", result);
}
