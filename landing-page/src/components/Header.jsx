import React from "react";

function Header() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between py-5">
        <div className="header-title text-3xl font-semibold pr-14">React Landing Page</div>
        <div className="header-list text-xl text-gray-500">
          <ul className="flex">
            <li>
              <a href="">Featurs</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
