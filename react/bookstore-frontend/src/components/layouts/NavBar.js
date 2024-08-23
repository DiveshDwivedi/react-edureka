import React from 'react';

const NavBar = () => {
  let session = sessionStorage.getItem('username');
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">BookStore</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/book">Books</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Profile</a>
          </li>
        </ul>
      </div>

      <div>
      <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/register">SignUp</a>
          </li>
          <li className="nav-item">
            {
              session ? <a className="nav-link" href="/login">Logout</a> : <a className="nav-link" href="/login">LogIn</a>
            }
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

