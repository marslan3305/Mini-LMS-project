

import React, { useState } from "react";
import { registerApi } from "../api/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await registerApi(form);
      alert("Registration successful!");
      navigate("/");
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err.message ||
        "Registration error";
      alert(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

      <div className="card shadow p-4" style={{ width: "380px", borderRadius: "12px" }}>

        <h3 className="text-center mb-3">Register</h3>

        <form onSubmit={submitHandler}>

          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

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
              placeholder="Create a password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          {/* Role */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Select Role</label>
            <select
              className="form-select"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Link to Login */}
        <div className="text-center mt-3">
          <button
            className="btn btn-link"
            onClick={() => navigate("/")}
          >
            Already have an account? Login
          </button>
        </div>

      </div>
    </div>
  );
}

export default Register;
