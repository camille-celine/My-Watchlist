import React from 'react';
import {NavLink} from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <NavLink to="/bookshelf">WatchList</NavLink>
          </div>

          <ul className="nav-links">
            <li>
              <NavLink to="/bookshelf">Watch List</NavLink>
            </li>
            <li>
              <NavLink to="/watched">Watched</NavLink>
            </li>
            <li>
              <NavLink to="/add" className="btn">Add</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
