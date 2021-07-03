export function fillExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  /*--------------- fill ----------------*/
  const usersToFill = [
    { name: "mandy", age: 56 },
    { name: "doe", age: 20 },
  ];
  const usersFill = usersToFill.fill({ name: "will", age: 15 }, 0, 1);
  // this method fill the array substuing an existent item.
  // array.fill does´not create a new index.
  // array.fill modifies the original array.
  console.log("usersFill => ", usersFill);
  // usersFill =>  [ { name: 'will', age: 15 }, { name: 'doe', age: 20 } ]
}
