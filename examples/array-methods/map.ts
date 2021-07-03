export function mapExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  /*--------------- map ----------------*/
  const usersMap = users.map((item) => item.age > 30);
  // the map will return what we set to return
  // ex: if we return true, the array will contain true
  console.log("Map => ", usersMap);
  // Map =>  [ false, true, true ]
}
