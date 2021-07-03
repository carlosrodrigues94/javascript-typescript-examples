export function includesExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  /*--------------- includes ----------------*/
  const userIncludes = users.includes(users[0]);
  // will return true or false, *the schema must match
  console.log("Includes => ", userIncludes);
  // userIncludes =>  true
}
