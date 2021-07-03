export function filterExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  /*--------------- filter ----------------*/
  const usersFilter = users.filter((item) => item.age > 30);
  // if we return null or undefined, the array will be empty
  // if we return true the result will be the item
  console.log("Filter => ", usersFilter);
  // Filter =>  [ { name: 'mary', age: 40 }, { name: 'peter', age: 32 } ]
}
