export function lastIndexExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  /*--------------- lastIndexOf ----------------*/
  const usersLasIndexOf = users.lastIndexOf(user2);
  // Returns the index of the last occurrence,
  // of a specified value in an array, or -1 if it is not present.

  console.log("usersLasIndexOf => ", usersLasIndexOf);
  // usersLasIndexOf =>  1
}
