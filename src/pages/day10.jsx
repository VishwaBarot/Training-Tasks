import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/day10.scss';

const Day10 = () => (
  <div className="wrapper">
    <h3 className="headings" align="center">
      Day 10 Child Routing, Query Parameters & SCSS
    </h3>
    <nav>
      <ul>
        <li>
          <Link className="link" to="user/?Name=vishwa & pageno=10&pagesize=100">
            User
          </Link>
        </li>
        <li>
          <Link className="link" to="angular">
            AngularJs
          </Link>
        </li>
        <li>
          <Link className="link" to="vue">
            VueJs
          </Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default Day10;
