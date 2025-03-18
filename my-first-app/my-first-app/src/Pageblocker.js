
const LoginOverlay = () => {
    const isAuthenticated = localStorage.getItem("authenticated")

    return (
      !isAuthenticated && (
        <div className="overlay">
          <div className="overlaytext">
            <p>Please login</p>
            <a href="/login" className="overlaylink">Go to Login</a>
          </div>
        </div>
      )
    );
  };

  export default LoginOverlay