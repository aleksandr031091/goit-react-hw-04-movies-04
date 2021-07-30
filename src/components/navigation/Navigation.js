import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ routes, url = "" }) => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink to={url + route.path} exact={route.exact}>
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
