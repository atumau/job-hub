import React from 'react';
import { Link } from "react-router-dom";
import './Styles/header.css'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="head1 container-fluid text-black gap-3">
        <Link className="navbar-brand text-white" to="/homepage">
            <img src="lo.avif" className="logo" alt="home-logo" />
          </Link>
          <button className="navbar-toggler ms-auto mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 ms-2">
              <li className="nav-item">
                <Link className="nav-link active text-black" aria-current="page" to="/homepage">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-black" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-black" aria-current="page" to="/featuredhome">Jobs</Link>
              </li>
              
            </ul>
    <Link className="navbar-brand text-white" to="/">
              <button class="btn btn-primary" type="button">Login</button>
          </Link>
            
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;
