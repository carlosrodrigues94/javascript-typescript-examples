import express from "express";
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

app.listen(port, async () => {
  console.info(`[Javascript-Typescript-Examples] Running on ${port}`);
});
