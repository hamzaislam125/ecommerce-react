import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/users.model.js";

let router = express.Router();

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  let user = new User({ firstName, lastName, email, password });
  await user.save();
  res.json({msg: "User registered successfully."});
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email, password });
  if (user) {
    const payload = { id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email };
    jwt.sign(
      payload,
      process.env.SECRET_KEY || "hello",
      { expiresIn: "2 Hours" },
      (err, token) => {
        if (err) {
          console.log(err);
          res.json({msg: "Login failed"});
        } else {
          return res.json({ token });
        }
      },
    );
  } else {
    res.json({msg: "Invalid credential."});
  }
  
});

export default router;
