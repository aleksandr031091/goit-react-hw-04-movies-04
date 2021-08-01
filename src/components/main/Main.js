import React from "react";
import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "../../route/mainRoutes";

const Main = () => {
  return (
    <main>
      <Suspense fallback={<p>...Loading</p>}>
        <Switch>
          {routes.map((rout) => (
            <Route
              path={rout.path}
              component={rout.component}
              exact={rout.exact}
              key={rout.path}
            />
          ))}
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;
