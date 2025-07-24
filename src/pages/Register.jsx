import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendClient } from "../clients/backendClient";

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

    const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await backendClient.post("/users/register", formData);
    console.log("Registration success:", response.data);
  } catch (err) {
  if (err.response && err.response.status === 409) {
    alert("Username or email already exists.");
  } else {
    alert("Registration failed. Try again.");
  }
  console.error("Registration failed:", err);
    }
};


  return (
    <main>
      <h1>Register Page</h1>

      <form onSubmit={handleSubmit}>
        <h2>Register</h2>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="User Name"
          autoComplete="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          autoComplete="new-password"
          value={formData.password}
          onChange={handleChange}
        />

        <input type="submit" value="Register" />
      </form>
    </main>
  );
}

export default RegisterPage;
