const express = require("express");
const bodyParser = require("body-parser");
const { application } = require("express");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var result = weight / (height * height);
  res.send("Your BMI is :" + result);
});

app.post("/", (req, res) => {
  var num1 = req.body.num1;
  var num2 = req.body.num2;
  var result = Number(num1) + Number(num2);
  res.send("Your result is : " + result);
});

app.get("/contact", (req, res) => {
  res.send("<h2>Contact me at yigitozdamar@hotmail.com </h2>");
});

app.get("/about", (req, res) => {
  res.send("My name is Yigit and I'm full stack developer");
});

app.listen(port, function () {
  console.log("Server listening on 3000 port");
});
