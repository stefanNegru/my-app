import React, { useState } from "react";
import "./LoginPage.css";
import { useAuthStore } from "../store/useAuthStore";

const LoginPage = () => {
  const { login } = useAuthStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    login(formData);
  };

  return (
    <div className="loginPage">
      <div className="loginBox">
        <h1>Welcome Back</h1>
        <p>Sign in to your account</p>
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
        <button onClick={() => login(formData)}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
