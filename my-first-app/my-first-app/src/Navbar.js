import "./App.css";
import logo from './logo.png';

const Navbar = () => {
  
  const isAuthenticated = localStorage.getItem("authenticated")
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="logo" className="logo-image" />
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/construction">Construction</a></li>
        <li><a href="/systems">Systems</a></li>
        <li><a href={isAuthenticated ? "/account" : "/login"}>
                    {isAuthenticated ? "Account" : "Login"}
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar