export function joinExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  /*--------------- join ----------------*/
  const nameToJoin = ["w", "i", "l", "l", "i", "a", "m"];
  const nameJoined = nameToJoin.join("-");
  // will join all values of array into a string
  // the param is an string

  console.log("nameJoined => ", nameJoined);
  // nameJoined =>  w-i-l-l-i-a-m

  /*--------------- keys ----------------*/
  const usersKeys = users.keys();
  // will return a Iterable
  // the value is the index
  // done is used to know if passed of the last item

  console.log("usersKeys => ", usersKeys.next());
  // usersKeys =>  { value: 0, done: false }
}
