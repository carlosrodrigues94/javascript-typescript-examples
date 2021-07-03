export function reduceRightExample() {
  const user1 = { name: "jhon", age: 25 };
  const user2 = { name: "mary", age: 40 };
  const user3 = { name: "peter", age: 32 };

  const users = [user1, user2, user3];

  const total = users.reduceRight(
    (previousValue, currentValue, currentIndex) => {
      console.log("previousValue", previousValue);
      console.log("currentValue", currentValue);
      return previousValue + currentValue.age;
    },
    0
  );

  // reduceRight is almost the same that reduce
  // the difference its because starts on the last item
  // the first currentValue is the value of last item on array

  console.log("ReduceRight => ", total);
}
