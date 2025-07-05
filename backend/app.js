import express from "express";
// import helloRouter from './hello.js'
import postRouter from "./routers/post.js";
import userRouter from "./routers/user.js";
// import commentRouter from './routers/comment.js'
import cors from "cors";
import passport from "passport";

import session from "express-session";

import MongoStore from "connect-mongo";

const app = express();

// app.use(
//   session({
//     secret: "asdasdad",
//     resave: false,
//     saveUninitialized: false,
//     store: MongoStore.create({
//       mongoUrl: "mongodb://127.0.0.1:27017/react-restapi",
//     }),
//   })
// );

app.use(
  cors({
    origin: "http://localhost:5200", // Your frontend origin
    credentials: true, // Allow credentials (cookies)
  })
);
app.options("/{*any}", cors()); // Enable preflight for all routes

app.use(
  session({
    secret: "asdasdad",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/react-restapi",
    }),
    cookie: {
      httpOnly: true,
      secure: false, // Set to true if using HTTPS
      sameSite: "lax", // Important for cross-origin requests
      maxAge: 1000 * 60 * 60,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session()); // <- This makes `req.logout()` available

app.use(express.json());

// app.use(passport.authenticate("session"));

app.use("/posts", postRouter);
app.use("/auth", userRouter);

const middleware1 = (req, res, next) => {
  req.test = "this is set by middleware1";
  next();
};

const middleware2 = (req, res, next) => {
  console.log(req.test);
  req.test2 = "this is set by middleware2";
  next(new Error("error"));
};

app.get("/", middleware1, middleware2, (req, res) => {
  res.json([req.test, req.test2]);
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

// app.listen(3000, () => {
//   console.log(`app runing on http://localhost:3000`);
// });

export default app;
