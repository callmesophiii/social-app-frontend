import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendClient } from "../clients/backendClient";

function SignInPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await backendClient.post("/users/login", formData);
      console.log("Login success:", response.data);

      localStorage.setItem("token", response.data.token);

      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid username or password.");
    }
  };

  return (
    <main>
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter username"
          autoComplete="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange}
        />

        <input type="submit" value="Login" />
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </main>
  );
}

export default SignInPage;
