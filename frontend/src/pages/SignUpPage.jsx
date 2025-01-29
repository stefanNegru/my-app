import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useState } from "react";
import "./LoginPage.css";

const SignUpPage = () => {
  const { signup } = useAuthStore();
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    signup(formData);
  };

  return (
    <div className="loginPage">
      <div className="loginBox">
        <h1>Welcome Back</h1>
        <p>Sign in to your account</p>
        <input
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
        <input
          placeholder="email@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button onClick={() => signup(formData)}>Sign In</button>
      </div>
    </div>
  );
};

export default SignUpPage;
