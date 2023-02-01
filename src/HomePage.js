import React from "react";
import { Outlet,NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="nav">
      <ul className="menu">
        <li>
          <NavLink className='menu-item' to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className='menu-item' to="/books">Books</NavLink>
        </li>
        <li>
          <NavLink className='menu-item' to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className='menu-item' to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink className='menu-item' to="/services">Services</NavLink>
        </li>
       
      </ul>
      <Outlet />
    </div>
  );
}

export default HomePage;
