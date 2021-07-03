export function indexOfExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  /*--------------- indexOf ----------------*/
  const indexToBegin = 1;
  const userIndexOf = users.indexOf(user3, indexToBegin);
  // will return the index from the given argument
  // second argument at which to begin the search
  console.log("IndexOf => ", userIndexOf);
  // IndexOf =>  2
}
