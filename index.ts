import express from "express";

const app = express();

const port = 3333;

app.listen(port, () => {
  console.info(`[Javascript-Typescript-Examples] Running on ${port}`);
});
