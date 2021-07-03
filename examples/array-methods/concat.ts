export function concatExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  /*--------------- concat ----------------*/
  const usersConcat = users.concat([{ name: "greg", age: 49 }]);
  // Combines two or more arrays. This method returns a new array
  console.log("Concat => ", usersConcat);
  // Concat =>  [
  //  { name: 'jhon', age: 25 },
  //  { name: 'mary', age: 40 },
  //  { name: 'peter', age: 32 },
  //  { name: 'greg', age: 49 }
  // ]
}
