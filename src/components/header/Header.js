import React from "react";
import Navigation from "../navigation/Navigation";
import { routes } from "../../route/headerRoutes";

import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <Navigation routes={routes} />
    </header>
  );
};

export default Header;
