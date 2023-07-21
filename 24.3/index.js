//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
import "dotenv/config";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", function (req, res) {
  if (req.body.password === process.env.SECRET_KEY) {
    res.redirect("/check");
  } else {
    res.redirect("/");
  }
});

app.get("/check", function (req, res) {
  res.sendFile(__dirname + "/public/secret.html");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
