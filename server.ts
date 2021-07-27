import { someExample } from "examples/array-methods/some";
import express from "express";
import "./examples/class-examples/abstract";
import "./examples/class-examples/private";
import "./examples/class-examples/inheritance-with-super";
import {
  AssignExample,
  EntriesExample,
  FreezeExample,
  GetOwnPropertyDescriptorExample,
  GetOwnPropertyDescriptorsExample,
  KeysExample,
} from "./examples/object-methods";
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

showArrayMethodsExamples();

/** Object Examples */

/** Internal Methods..
 *
 * apply
 * bind
 * call
 * caller
 * arguments
 * create
 * defineProperties
 * defineProperty
 */

KeysExample();
AssignExample();
EntriesExample();
FreezeExample();
GetOwnPropertyDescriptorExample();
GetOwnPropertyDescriptorsExample();

app.listen(port, async () => {
  console.info(`[Javascript-Typescript-Examples] Running on ${port}`);
});
