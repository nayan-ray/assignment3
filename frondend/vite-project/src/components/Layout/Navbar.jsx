import React, { useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import userStore from "../../store/user";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { logoutRequest, isLogin } = userStore();
  useEffect(() => {
    console.log(isLogin());
  }, []);
  const logoutHandler = async () => {
    const res = await logoutRequest();
    res ? navigate("/") : console.log("error");
  };
  return (
    <div className="nav-container bg-secondary">
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <Link to="/" className=" text-decoration-none">
          <span className="navbar-brand">NAYAN</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse align-items-center justify-content-end"
          id="navbarText"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className=" text-decoration-none">
                <span className="nav-link">Home</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/blog" className=" text-decoration-none">
                <span className="nav-link">Blog</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/service" className=" text-decoration-none">
                <span className="nav-link">Service</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/about" className=" text-decoration-none">
                <span className="nav-link">About</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/contact" className=" text-decoration-none">
                <span className="nav-link">Contact</span>
              </Link>
            </li>
          </ul>
          <div>
            {isLogin() ? (
              <>
                <button className="btn btn-dark me-3 ms-4">
                  <Link to="/dashboard" className=" text-decoration-none">
                    <span className="nav-link">Dashboard</span>
                  </Link>
                </button>
                <button onClick={logoutHandler} className="btn btn-primary">
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-primary ms-4">
                  <Link to="/login" className=" text-decoration-none">
                    <span className="nav-link text-white">Login</span>
                  </Link>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
