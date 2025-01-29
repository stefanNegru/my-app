import React, { useEffect } from "react";
import { usePostsStore } from "../store/usePostsStore";
import { useAuthStore } from "../store/useAuthStore";
import { Link, useNavigate } from "react-router-dom";

import "./HomePage.css";

const HomePage = () => {
  const { posts, getPosts, setSelectedPost, selectedPost } = usePostsStore();
  const { users, getUsers } = useAuthStore();
  const navigate = useNavigate();

  //console.log(posts);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  useEffect(() => {
    getUsers();
  }, [users]);

  const handleClick = (post) => {
    setSelectedPost(post);
    console.log(post);
    console.log(users);
    console.log(users.find((usr) => usr._id === post.userId).fullName);
    navigate("/post");
  };

  return (
    <div className="asd">
      <div className="homePage">
        <div className="postBox">
          <Link to="createPost">
            <input
              className="input1"
              placeholder="What do you want to ask or share?"
            />
          </Link>

          <button className="postBtn">Post</button>
        </div>

        <div>
          {posts
            .slice()
            .reverse()
            .map((post) => (
              <div key={post._id} className="post">
                <div className="userInfo">
                  <img
                    src="../images/default-profile-pic.jpg"
                    className="postProfilePic"
                  />
                  <div>
                    {users.find((usr) => usr._id === post.userId)?.fullName}
                  </div>
                </div>
                <div>
                  <div className="postTitle">{post.title}</div>
                  <div className="postContent">{post.content}</div>
                </div>
                <button onClick={() => handleClick(post)}>Read Post</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
