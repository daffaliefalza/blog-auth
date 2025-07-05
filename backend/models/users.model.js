import mongoose from "mongoose";
import { Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.*@.*\..*/, "Please fill a valid email form"],
  },
  password: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

UserSchema.pre("save", async function () {
  if ((this.password && this.isNew) || this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

// Fix: Add `next` parameter and call it at the end

// UserSchema.pre("save", async function (next) {
//   if ((this.password && this.isNew) || this.isModified("password")) {
//     try {
//       this.password = await bcrypt.hash(this.password, 10);
//     } catch (err) {
//       return next(err); // pass error to mongoose
//     }
//   }
//   next(); // move on to save
// });

const User = mongoose.model("User", UserSchema);

export default User;
