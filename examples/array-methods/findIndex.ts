export function findIndexExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  /*--------------- findIndex ----------------*/
  const userIndex = users.findIndex((item) => item.age > 30);
  // will return just the first index from the given validation
  console.log("findIndex => ", userIndex);
  // findIndex =>  1
}
