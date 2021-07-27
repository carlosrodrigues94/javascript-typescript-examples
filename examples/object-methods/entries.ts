export function EntriesExample() {
  const object = { id: 1, name: "Carlos" };

  const result = Object.entries(object);

  console.log("[OBJECT] - EntriesExample => ", result);
  // EntriesExample =>  [ [ 'id', 1 ], [ 'name', 'Carlos' ] ]
}
