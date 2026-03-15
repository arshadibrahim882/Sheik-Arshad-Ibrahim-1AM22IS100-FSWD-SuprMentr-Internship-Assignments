import React, { useState } from "react";

function SignupForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return pattern.test(email);
  };

  const getPasswordStrength = (password) => {
    if (password.length < 6) 
        return "Weak";

    if (
      password.match(/[A-Z]/) &&
      password.match(/[0-9]/) &&
      password.match(/[@$!%*?&]/)
    ) {
      return "Strong";
    }
    return "Medium";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setSuccess("");

    let valid = true;
    
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    }

    const strength = getPasswordStrength(password);
    if (strength === "Weak") {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    }

    if (valid) {
      setSuccess("Signup successful!");
      setEmail("");
      setPassword("");
    }
  };

  const strength = getPasswordStrength(password);

  return (
    <form onSubmit={handleSubmit} style={{maxWidth:"350px", margin:"auto"}}>
      <div style={{marginBottom:"15px"}}>
        <label>Email</label><br/>
        <input
          type="text"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <p style={{color:"red"}}>{emailError}</p>
      </div>

      <div style={{marginBottom:"15px"}}>
        <label>Password</label><br/>
        <input
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        {password && (
          <p>Password Strength: <b>{strength}</b></p>
        )}
        <p style={{color:"red"}}>{passwordError}</p>
      </div>

      <button type="submit">Signup</button>
      <p style={{color:"green"}}>{success}</p>
    </form>
  );
}
export default SignupForm;