import React from 'react';
import {Route} from 'react-router-dom'
function RouteWithChildren(route) {
    return (
      <Route
        path={route.path}
        component={props => (
          // pass the sub-routes down to keep nesting
          <route.main {...props} routes={route.routes} />
        )}
      />
    );
  }
  export default RouteWithChildren