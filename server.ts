import express from "express";

import {
  AssignExample,
  EntriesExample,
  FreezeExample,
  GetOwnPropertyDescriptorExample,
  GetOwnPropertyDescriptorsExample,
  KeysExample,
} from "./examples/object-methods";
import { showCreationalDesignPatterns } from "./examples/design-patterns/";
import {
  concatExample,
  copyWhithinExample,
  entriesExample,
  everyExample,
  fillExample,
  filterExample,
  findExample,
  includesExample,
  forEachExample,
  findIndexExample,
  indexOfExample,
  joinExample,
  lastIndexExample,
  mapExample,
  reduceExample,
  reduceRightExample,
  reverseExample,
  shiftExample,
  sliceExample,
  spliceExample,
  unshiftExample,
  valuesExample,
  popExample,
  pushExample,
  toStringExample,
  toLocaleStringExample,
  someExample,
} from "./examples/array-methods";
const app = express();
const port = 3333;

/** Array Methods */

function showArrayMethodsExamples() {
  concatExample();
  copyWhithinExample();
  entriesExample();
  everyExample();
  fillExample();
  filterExample();
  findExample();
  includesExample();
  forEachExample();
  findIndexExample();
  indexOfExample();
  joinExample();
  lastIndexExample();
  mapExample();
  reduceExample();
  reduceRightExample();
  reverseExample();
  shiftExample();
  sliceExample();
  spliceExample();
  unshiftExample();
  valuesExample();
  popExample();
  pushExample();
  toStringExample();
  toLocaleStringExample();
  someExample();
}

function showObjectMethods() {
  KeysExample();
  AssignExample();
  EntriesExample();
  FreezeExample();
  GetOwnPropertyDescriptorExample();
  GetOwnPropertyDescriptorsExample();
}

async function showClassExamples() {
  require("./examples/class-examples/abstract");
  require("./examples/class-examples/private");
  require("./examples/class-examples/inheritance-with-super");
}

// showObjectMethods();
// showArrayMethodsExamples();
// showClassExamples();
showCreationalDesignPatterns();

app.listen(port, async () => {
  console.info(`[Javascript-Typescript-Examples] Running on ${port}`);
});
