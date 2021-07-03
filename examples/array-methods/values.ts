export function valuesExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  const result = users.values();
  // Returns an Iterator that can be used to see the value of array

  result.next();
  // Values =>  { value: { name: 'jhon', age: 25 }, done: false }

  console.log("Values => ", result);
  //Values =>  Object [Array Iterator] {}
}
