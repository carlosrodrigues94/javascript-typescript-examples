export function shiftExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  const result = users.shift();
  // shift removes the first element in array and return it
  // shift *modifies the original array

  console.log("Shift => ", result);
}
