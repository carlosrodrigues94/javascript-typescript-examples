export function pushExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  const result = users.push({ name: "jordan", age: 50 });
  // add a new item in the end of array and returns the new lenght of array
  console.log("Push => ", result);
  // Push =>  4
}
