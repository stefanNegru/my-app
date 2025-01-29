import React from "react";
import "./ProfilePage.css";
import { useAuthStore } from "../store/useAuthStore";

const ProfilePage = () => {
  const { authUser, logout } = useAuthStore();
  return (
    <div className="profilePage">
      <div className="pictureBox">
        <img src="../images/default-profile-pic.jpg" className="profilePic" />
      </div>
      <div className="aboutUser">
        <div>{authUser.fullName}</div>
        <div className="followers">
          <h1>100 Following</h1>
          <h1>100 Followers</h1>
        </div>
        <button onClick={logout}>LogOut</button>
      </div>
    </div>
  );
};

export default ProfilePage;
