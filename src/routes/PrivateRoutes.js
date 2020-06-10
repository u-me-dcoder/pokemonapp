import React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const RenderRoute = props => {
  let { component: Component, children, location } = props;
  
  return (
    <Route
      exact
      path={location.pathname}
      render={reactRouterProps => {
        return (
          <ErrorBoundary>
            <Component {...reactRouterProps} {...props} routes={children} />
          </ErrorBoundary>
        );
      }}
    />
  );
};

const PrivateRoute = props => {
  console.log(props)
  return(
 
    <Switch>
      {props.appRoutes.map((route, index) => (
        <RenderRoute key={index} {...route} />
      ))}
    </Switch>
  )
};

export default PrivateRoute;
