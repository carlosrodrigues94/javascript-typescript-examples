type User = {
  name: string;
  age: number;
};

export function reduceExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users: User[] = [user1, user2, user3];

  /*-------- reduce -------- */

  const initalValue = { name: "new-user", age: 50 };
  const total = users.reduce((previousValue, currentValue, currentIndex) => {
    return { ...previousValue, age: currentValue.age + previousValue.age };
  }, initalValue);

  // the initial value set the type and the value of previous
  // if the initial value is empty, previous will take the type of item from array

  console.log("Reduce => ", total);
  // Reduce =>  { name: 'new-user', age: 147 }
  // the age is the result sum from user1, user2, user3 and initalValue ages.
}
