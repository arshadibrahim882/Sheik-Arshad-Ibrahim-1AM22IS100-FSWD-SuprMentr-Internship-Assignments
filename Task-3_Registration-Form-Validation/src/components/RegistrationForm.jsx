import React, { useState } from "react";

function RegistrationForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (formData.age < 18) {
      setError("Age must be 18 or above.");
    } else {
      setSuccess("Registration Successful!");
      setFormData({ name: "", email: "", age: "" });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <button type="submit">Submit</button>

      </form>

      {/* Conditional Rendering. */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}

export default RegistrationForm;