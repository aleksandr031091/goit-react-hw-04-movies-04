import React from "react";
import Navigation from "../navigation/Navigation";
import { routes } from "../../route/headerRoutes";

const Header = () => {
  return (
    <header>
      <Navigation routes={routes} />
    </header>
  );
};

export default Header;
