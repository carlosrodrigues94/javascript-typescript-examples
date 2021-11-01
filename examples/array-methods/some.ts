export function someExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];
  /*--------------- some ----------------*/
  const usersSome = users.some((item) => item.age > 35);
  // in this test, all items until find one that contains given validation
  // will test all values and return boolean
  console.log("usersSome => ", usersSome);
  // usersSome =>  true
}
