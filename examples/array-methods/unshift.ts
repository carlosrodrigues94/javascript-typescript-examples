export function unshiftExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  const result = users.unshift({ age: 50, name: "will" });
  // insert new items in the array
  // returns the new array lenght value
  // unshift *modifies the original array

  console.log("Unshift => ", result);
  // Unshift =>  4
}
