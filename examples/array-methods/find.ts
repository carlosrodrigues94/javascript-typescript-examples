export function findExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  /*--------------- find ----------------*/
  const userFind = users.find((item) => item.name === "jhon");
  // even that we return true, the result will be the the item or undefined
  console.log("Find => ", userFind);
  // Find =>  { name: 'jhon', age: 25 }
}
