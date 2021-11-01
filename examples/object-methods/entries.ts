export function EntriesExample() {
  const object = { id: 1, name: "Carlos" };

  const result = Object.entries(object);

  const data = result.map(([key, value]) => ({ [key]: value }));

  console.log("[OBJECT] - Entries example, data => ", data);

  console.log("[OBJECT] - EntriesExample => ", result);

  // [OBJECT] - Entries example, data =>  [ { id: 1 }, { name: 'Carlos' } ]
  // [OBJECT] - Entries example =>  [ [ 'id', 1 ], [ 'name', 'Carlos' ] ]
}
