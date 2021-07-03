export function forEachExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  /*--------------- forEach ----------------*/
  users.forEach((item) => {
    if (item.age > 30) {
      console.log("ForEach => ", item);
    }
  });
  // ForEach =>  { name: 'mary', age: 40 }
  // ForEach =>  { name: 'peter', age: 32 }
}
