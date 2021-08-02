import React from "react";
import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "../../route/mainRoutes";
import MovieDatailsPage from "../../pages/MovieDetailsPage";
import LoaderMovie from "../loader/Loader";

const Main = () => {
  return (
    <main>
      <Suspense fallback={<LoaderMovie />}>
        <Switch>
          <Route path="/movie/:id" component={MovieDatailsPage} exact={false} />
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
