export function reverseExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  const result = users.reverse();
  // Reverse just invert the order of array

  console.log("Reverse => ", result);
  // Reverse =>  [
  //   { name: 'peter', age: 32 },
  //   { name: 'mary', age: 40 },
  //   { name: 'jhon', age: 25 }
  // ]
}
