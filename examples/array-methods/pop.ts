export function popExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  const result = users.pop();
  // removes the last element of array and return it
  // pop *modifies the original array

  console.log("Pop => ", result);
  //Pop =>  { name: 'peter', age: 32 }
}
