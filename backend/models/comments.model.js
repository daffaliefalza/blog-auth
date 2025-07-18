// import mongoose, { Schema } from "mongoose";

// const CommentSchema = new Schema({
//   content: {
//     type: String,
//     required: true,
//   },

//   post: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Post",
//   },
// });

// const Comment = mongoose.model("Comment", CommentSchema);
// export default Comment;

import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;
