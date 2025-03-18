import { useState, useEffect } from "react";

const Accountpage = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("authenticated") === "true"
  );
const [username] = useState(localStorage.getItem("username") || "")

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = "/"; 
    }

  }, [isAuthenticated]);

  const handleLogout = () => {
    localStorage.removeItem("authenticated"); 
    setIsAuthenticated(false);
  };
  const DeleteAccount = () => {
    if (window.confirm("Would you like to delete your account?")) {
      let users = JSON.parse(localStorage.getItem("users")) || {};
      if (users[username]) {
        delete users[username];
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.removeItem("authenticated");
        localStorage.removeItem("username");
        alert("Account deleted");
        window.location.href = "/";
      } else {
        alert("Account doesn't exsits");
     }
   }
 };
  


  return (
    <div className="account-container">
      <h1>My Account</h1>
      <button onClick={handleLogout} className="logout-button"> Logout </button>
      <button onClick={DeleteAccount} className="Delete-button"> Delete Account </button>
      <p className="full-page-background"></p>
    </div>
  );
};

export default Accountpage;