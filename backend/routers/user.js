// import { Router } from "express";
// import bcrypt from "bcrypt";
// import User from "../models/users.model.js";
// import passport from "../config/passport.js";
// const router = Router();

// router.post("/signup", async (req, res) => {
//   const { email, username, password } = req.body;

//   //   const hashedPassword = await bcrypt.hash(password, 10);
//   const user = await User.create({
//     username,
//     email,
//     password: hashedPassword,
//   });

//   res.status(201).json(user);
// });

// router.post(
//   "/login",
//   passport.authenticate(
//     "local",
//     {
//       failureMessage: true,
//     },
//     (req, res) => {
//       res.json("login success!");
//     }
//   )
// );

// export default router;

import { Router } from "express";
import bcrypt from "bcrypt";
import User from "../models/users.model.js";
import passport from "../config/passport.js";

const router = Router();

// SIGNUP ROUTE
// router.post("/signup", async (req, res) => {
//   try {
//     const { email, username, password } = req.body;

//     // Hash the password
//     // const hashedPassword = await bcrypt.hash(password, 10);

//     // Create the user
//     const user = await User.create({
//       username,
//       email,
//       password,
//     });

//     res.status(201).json({ message: "User created", user });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// Update the signup route
router.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // Create the user without logging them in
    const user = await User.create({
      username,
      email,
      password,
    });

    // Return success but DON'T log the user in
    res.status(201).json({
      success: true,
      message: "User created successfully. Please sign in.",
      // Don't return the user object here
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }
    res.status(500).json({
      success: false,
      message: err.message || "Registration failed",
    });
  }
});
// router.post("login", passport.authenticate("local"), {
//   failureMessage: true,
// }),
//   (req, res) => {
//     res.json("login success");
//   };

// router.post(
//   "/login",
//   passport.authenticate(
//     "local",
//     {
//       failureMessage: true,
//     },
//     (req, res) => {
//       res.json("login success!");
//     }
//   )
// );

// LOGIN ROUTE with custom response
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({ message: info?.message || "Login failed" });
    }

    req.login(user, (err) => {
      if (err) return next(err);
      return res.json({ message: "Login success!", user });
    });
  })(req, res, next);
});

// LOGOUT ROUTE

router.post("/logout", (req, res) => {
  req.logout(() => {
    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.json({ message: "logout !" });
    });
  });
});

// CHECK SESSION (optional)
router.get("/me", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ loggedIn: true, user: req.user });
  } else {
    res.status(401).json({ loggedIn: false, message: "Not authenticated" });
  }
});

export default router;
