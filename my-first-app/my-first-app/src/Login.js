import React, { useState } from "react";
import logo from "./logo.png";
import './App.css'

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  /** Handle Registration */
  const handleRegister = (e) => {
    e.preventDefault();
    let storedUsers = JSON.parse(localStorage.getItem("users")) || {};

    const trimmedUsername = username.trim().toLowerCase();
    const trimmedPassword = password.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedConfirmPassword = confirmPassword.trim();

    const minPasswordLength = 4;
    const maxUsernameLength = 22;
    const maxPasswordLength = 20;

    if (!trimmedUsername || !trimmedPassword || !trimmedEmail || !trimmedConfirmPassword) {
      alert("All fields are required.");
      return;
    }

    if (trimmedUsername.length > maxUsernameLength) {
      alert(`Username cannot exceed ${maxUsernameLength} characters.`);
      return;
    }

    if (trimmedPassword.length < minPasswordLength) {
      alert(`Password must be at least ${minPasswordLength} characters long.`);
      return;
    }

    if (trimmedPassword.length > maxPasswordLength) {
      alert(`Password cannot exceed ${maxPasswordLength} characters.`);
      return;
    }

    if (trimmedPassword !== trimmedConfirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    if (storedUsers[trimmedUsername]) {
      alert("Username already exists. Please choose another.");
    } else {
      storedUsers[trimmedUsername] = { password: trimmedPassword, email: trimmedEmail };
      localStorage.setItem("users", JSON.stringify(storedUsers));
      alert("Registration successful! You can now log in.");
      setIsRegistering(false);
    }
  };

  /** Handle Login */
  const handleLogin = (e) => {
    e.preventDefault();
    let storedUsers = JSON.parse(localStorage.getItem("users")) || {};

    const trimmedUsername = username.trim().toLowerCase();
    const trimmedPassword = password.trim();

    if (!storedUsers[trimmedUsername]) {
      alert("User does not exist");
      return;
    }

    if (storedUsers[trimmedUsername].password !== trimmedPassword) {
      alert("Incorrect password");
      return;
    }

    // Update authentication state & store in localStorage
    if (setIsAuthenticated) {
      setIsAuthenticated(true);
    }
    localStorage.setItem("authenticated", "true");

    window.location.href = "/"; 
  };

  const ChangePassword = (e) => {
    e.preventDefault();
    let storedUsers = JSON.parse(localStorage.getItem("users")) || {};
    const trimmedEmail = email.trim().toLowerCase();

    let userKey = Object.keys(storedUsers).find(
      (key)=> storedUsers[key].email === trimmedEmail
    )

    if (!userKey) {
      alert("Email not found");
      return;
    }
    if (newPassword.trim().length < 4) {
      alert("Password must be at least 4 characters");
      return;
    }

    if(newPassword !== confirmNewPassword) {
      alert("New passwords do not match");
      return;
    }

    storedUsers[userKey].password = newPassword.trim();
    localStorage.setItem("users", JSON.stringify(storedUsers));
    alert("Password changed successfully");
    setIsChangingPassword(false);
  }

  return (
    <div>
      <a href="/">
      <img src={logo} alt="Logo" className="login-logo" />
      </a>
    <div className="login-container">
        <h2 className= "toggle-text" >{isRegistering ? "Register" : isChangingPassword ? "Change Password" : "Login"}</h2>
        {isChangingPassword ? (
          <form onSubmit={ChangePassword}>
              <input type= "email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} requried />
              <input type= "password" placeholder="New Password" value={newPassword} onChange={(e)=> setNewPassword(e.target.value)} requried/>
              <input type="password" placeholder="Confirm New Password" value={confirmNewPassword} onChange={(e)=>setConfirmNewPassword(e.target.value)} requried/>
            <button type="submit" className="PasswordButton">Change Password</button>
            <button type="button" onClick={() => setIsChangingPassword(false)} className="PasswordButton">Cancel</button>
          </form>
        ):(
        <form onSubmit={isRegistering ? handleRegister : handleLogin}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} maxLength="22" required />
          {isRegistering && (
            <>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} maxLength="20" required />
              <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </>
          )}
          {!isRegistering && (
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} maxLength="20" required />
          )}
          <button type="submit">{isRegistering ? "Register" : "Login"}</button>
        </form>
        )}
        {!isRegistering && !isChangingPassword && (
          <button onClick={()=> setIsChangingPassword(true)} className="PasswordButton">
            Change Password
          </button>
        )}
        {!isChangingPassword && (
        <p onClick={() => setIsRegistering(!isRegistering)} className="toggle-button">
          {isRegistering ? "Already have an account? Login here" : "Don't have an account? Register here"}
        </p>
        )}
      </div>
    </div>
  );
};

export default Login;