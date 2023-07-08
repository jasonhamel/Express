import express from "express";
const app = express();

app.get("/", function (req, res) {
  console.log(req);
  res.send("<h1>Hello from Express!</h1>");
});

app.get("/contact", function (req, res) {
  res.send(
    "Please conact me at <a href=https://threads.net/sirculling> Threads </a>"
  );
});

app.get("/about", function (req, res) {
  res.send(
    "Hi! My name is Jason. I'm a career nerd that's trying" +
      " to learn enough about full stack development to not" +
      " embarass myself when applying for jobs."
  );
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
