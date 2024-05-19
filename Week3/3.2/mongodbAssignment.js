const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO);

const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());

async function userExists(username, password) {
  // should check in the database

  let userExists = await User.findOne({ username, password });

  return userExists ? true : false;
}

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  if (await userExists(username, password)) {
    return res.status(403).json({
      msg: "User already exist in our memory db",
    });
  }

  let user = await User.create({
    username,
    password,
    name,
  });

  res.status(200).json({
    msg: "User created successfully",
    user,
  });
});

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!(await userExists(username, password))) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database

    let users = await User.find({ username: { $ne: username } });

    res.status(200).json({
      msg: "Here is the list of all other users",
      users,
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);
