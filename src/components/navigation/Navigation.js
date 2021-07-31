import React from "react";
import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";

const Navigation = ({ routes, url = "" }) => {
  return (
    <nav>
      <ul className={css.navList}>
        {routes.map((route) => (
          <li key={route.path} className={css.navItem}>
            <NavLink
              to={url + route.path}
              exact={route.exact}
              className={css.navLink}
              activeClassName={css.activeNavLink}
            >
              {route.name.toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
