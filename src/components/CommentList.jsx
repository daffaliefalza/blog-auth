// const CommentList = ({ comments }) => {
//   if (comments.length === 0) {
//     return <p className="no-comments">No comments yet.</p>;
//   }

//   return (
//     <ul className="comment-list">
//       {comments.map((comment) => (
//         <li key={comment.id} className="comment-item">
//           <p>{comment.content}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default CommentList;

import { FaUser } from "react-icons/fa";

const CommentList = ({ comments }) => {
  if (comments.length === 0) {
    return (
      <div className="no-comments">
        <p>Be the first to comment!</p>
      </div>
    );
  }

  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <div key={comment._id} className="comment">
          <div className="comment-header">
            <div className="comment-author">
              <FaUser className="user-icon" />
              <span>{comment.author?.username || "Anonymous"}</span>
            </div>
            {comment.createdAt && (
              <span className="comment-date">
                {new Date(comment.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            )}
          </div>
          <div className="comment-body">{comment.content}</div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
