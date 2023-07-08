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

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/", function (req, res) {
  let result = Number(req.body.num1) + Number(req.body.num2);
  res.send(
    "<h1>Very Basic Calculator</h1>" +
      "<p>The sum of the two numbers submitted is: </p>" +
      result
  );
});

app.post("/bmicalculator", function (req, res) {
  let height = parseFloat(req.body.height) * parseFloat(req.body.height);
  let weight = parseFloat(req.body.weight);
  let result = Math.round((weight / height) * 10) / 10;
  res.send(
    "<h1>BMI Calculator</h1>" +
      "<p>The BMI for the entered height and weight is: </p>" +
      result
  );
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
