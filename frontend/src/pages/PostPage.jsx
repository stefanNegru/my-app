import React, { useEffect, useState } from "react";
import "./PostPage.css";
import { usePostsStore } from "../store/usePostsStore";
import { useAuthStore } from "../store/useAuthStore";

const PostPage = () => {
  const { selectedPost, comments, getComments, createComment } =
    usePostsStore();
  const { authUser } = useAuthStore();

  useEffect(() => {
    getComments(selectedPost._id);
    console.log(selectedPost._id);
  }, []);

  const [text, setText] = useState("");

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    try {
      await createComment({ userId: authUser._id, content: text.trim() });
      setText("");
    } catch (error) {
      console.error("Failed to comment post:", error);
    }
  };

  return (
    <div className="asd">
      <div className="postPage">
        <div className="postContainer">
          <div className="post">
            <div className="userInfo">
              <img
                src="../images/default-profile-pic.jpg"
                className="postProfilePic"
              />
              <div>Nume Prenume</div>
            </div>
            <div>
              <div className="postTitle">{selectedPost.title}</div>
              <div className="postContent">{selectedPost.content}</div>
            </div>
          </div>
        </div>
        <form onSubmit={handleAddComment} className="createCommSection">
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Add a comment..."
            className="createComm"
          />
          <button type="submit" className="addCommBtn" disabled={!text.trim()}>
            Add comment
          </button>
        </form>
        <div className="commentsContainer">
          {
            /*comments.map((comment) => (
            <div key={comment._id} className="comm">
              {comment.content}
            </div>
          ))*/
            comments
              .slice()
              .reverse()
              .map((comment) => (
                <div key={comment._id} className="comm">
                  {comment.content}
                </div>
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default PostPage;
