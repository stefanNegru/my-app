import React, { useState } from "react";
import "./CreatePostPage.css";

import { useAuthStore } from "../store/useAuthStore";
import { usePostsStore } from "../store/usePostsStore";
import { useNavigate } from "react-router-dom";

const CreatePostPage = () => {
  const { authUser } = useAuthStore();
  const { createPost } = usePostsStore();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    try {
      createPost(authUser._id, { title, content });
      setTitle("");
      setContent("");
      navigate("/");
    } catch (error) {
      console.error("Failed to comment post:", error);
    }
  };

  return (
    <div>
      <div className="createPost">
        <textarea
          placeholder="What is happening?!"
          onChange={(e) => setTitle(e.target.value)}
          rows="2"
          cols="50"
        ></textarea>
        <textarea
          placeholder="What is happening?!"
          onChange={(e) => setContent(e.target.value)}
          rows="5"
          cols="50"
        ></textarea>
        <button onClick={handleCreatePost}>create post</button>
      </div>
    </div>
  );
};

export default CreatePostPage;
