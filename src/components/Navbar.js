import React from "react"
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <nav className="nav_bar">
        <img src="../images/airbnb-logo.png" className="nav--logo" alt="logo" />

        {/* <Link to="/">
          <h5 className="">Home</h5>
        </Link>
        <Link>
          <h5>Help</h5>
        </Link>
        <Link to='/host'>
          <button>Airbnb your home</button>
        </Link> */}
      </nav>
    );
}