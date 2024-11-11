import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between py-5">
        <div className="header-title text-3xl font-semibold pr-14">
          <Link to="/"> React Landing Page</Link>
        </div>
        <div className="header-list text-xl text-gray-500">
          <ul className="flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">Featurs</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/servicesus">Services</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
