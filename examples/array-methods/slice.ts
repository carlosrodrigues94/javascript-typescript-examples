export function sliceExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  const startIndex = 1;
  const endIndex = 3;

  const result = users.slice(startIndex, endIndex);
  // slice copy part from array using a index to start and end

  console.log("Slice => ", result);
  // Slice =>  [ { name: 'mary', age: 40 }, { name: 'peter', age: 32 } ]
}
