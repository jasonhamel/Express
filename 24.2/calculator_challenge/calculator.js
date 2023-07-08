import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyparser from "body-parser";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const bodyParser = bodyparser;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let result = Number(req.body.num1) + Number(req.body.num2);
  res.send("<p>The sum of the two numbers submitted is: </p>" + result);
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
