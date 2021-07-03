export function toLocaleStringExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  const result = users.toLocaleString();
  // returns an string representation of array

  console.log("toLocaleString => ", result);
  // toLocaleString =>  [object Object],[object Object],[object Object]
}
