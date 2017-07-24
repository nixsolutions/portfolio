import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const fakeAuth = {
  isAuthenticated: true,
};

setTimeout(() => {
  fakeAuth.isAuthenticated = false;
}, 5000, this);


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (fakeAuth.isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location },
      }}
      />
    )
  )}
  />
);

export default PrivateRoute;
