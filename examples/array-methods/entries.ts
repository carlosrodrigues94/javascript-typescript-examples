export function entriesExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  /*--------------- entries ----------------*/
  const usersEntries = users.entries();
  const a = usersEntries.next(); //{ value: [ 0, { name: 'jhon', age: 25 } ], done: false }
  const b = usersEntries.next(); // { value: [ 1, { name: 'mary', age: 40 } ], done: false }
  const c = usersEntries.next(); // { value: [ 2, { name: 'peter', age: 32 } ], done: false }
  const d = usersEntries.next(); // { value: undefined, done: true }

  // value - is an array of index and value
  // done - if the item passed the last item, done equals true else done equals false
  console.log("Entries => ", a);
  console.log("Entries => ", b);
  console.log("Entries => ", c);
  console.log("Entries => ", d);

  // Entries =>  { value: [ 0, { name: 'jhon', age: 25 } ], done: false }
  // Entries =>  { value: [ 1, { name: 'mary', age: 40 } ], done: false }
  // Entries =>  { value: [ 2, { name: 'peter', age: 32 } ], done: false }
  // Entries =>  { value: undefined, done: true }
}
