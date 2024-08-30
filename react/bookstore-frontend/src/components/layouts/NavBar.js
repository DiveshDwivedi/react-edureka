import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  let session = sessionStorage.getItem("username");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        BookStore
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/book">
              Books
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="#">Profile</Link>
          </li> */}
        </ul>
        {/* <SearchText /> */}
      </div>

      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              SignUp
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              {session ? "Logout" : "Login"}{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
