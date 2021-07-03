export function spliceExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  const startIndex = 0;
  const deleteCount = 2;
  const result = users.splice(startIndex, deleteCount);
  // deletes elements from array starting by the index passed
  // Splice *modifies the original array
  // returns the deleted elements

  console.log("Splice => ", result);
  // Splice =>  [ { name: 'jhon', age: 25 }, { name: 'mary', age: 40 } ]
}
