import React from 'react';
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className='navigation'>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className='container'>
          <NavLink className="navbar-brand" to="/">
           If home page doesn't load click here
          </NavLink>
          <div>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <NavLink className="nav-link" to="/">
                  Home
                  <span className='sr-only'>(current)</span>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className="nav-link" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;