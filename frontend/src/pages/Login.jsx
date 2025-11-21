
import React, { useState, useContext } from "react";
import { loginApi } from "../api/auth";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await loginApi(form);
      login(res.data.token, res.data.user);

      if (res.data.user.role === "teacher") navigate("/teacher");
      else navigate("/student");

    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err.message ||
        "Invalid credentials";
      alert(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

      <div className="card shadow p-4" style={{ width: "350px", borderRadius: "12px" }}>

        <h3 className="text-center mb-3">Login</h3>

        <form onSubmit={submitHandler}>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Register link */}
        <div className="text-center mt-3">
          <button
            className="btn btn-link"
            onClick={() => navigate("/register")}
          >
            Don't have an account? Register
          </button>
        </div>

      </div>
    </div>
  );
}

export default Login;
