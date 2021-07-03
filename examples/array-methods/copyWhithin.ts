export function copyWhithinExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  /*--------------- copyWithin ----------------*/

  const lettersToCopy = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const indexToPaste = 7;
  const start = 0;
  const end = 1;
  const lettersCopied = lettersToCopy.copyWithin(indexToPaste, start, end);
  // will copy the index 0 "a" and paste at index 7 "h"
  // start will start in the index passed
  // end will stop ultil arrive in the index passed
  console.log("CopyWithin => ", lettersCopied);
  // CopyWithin =>  [
  //   'a', 'b', 'c',
  //   'd', 'e', 'f',
  //   'g', 'a'
  // ]
}
