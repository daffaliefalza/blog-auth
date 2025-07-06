import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const CommentForm = ({ onSubmit }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    onSubmit(content);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <div className="form-group">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your thoughts..."
          required
          rows="3"
        />
      </div>
      <button type="submit" className="btn btn-submit">
        <FaPaperPlane /> Post Comment
      </button>
    </form>
  );
};

export default CommentForm;
