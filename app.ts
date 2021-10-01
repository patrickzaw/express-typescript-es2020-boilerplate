import express from "express";
import sampleClass from "./src/sampleClass.js";

const app = express();

const port = 4000;

app.listen(port, () => {
  console.log("started");
  sampleClass.saySomething("hello world");
});
