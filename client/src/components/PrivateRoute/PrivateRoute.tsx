import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';

const PrivateRoute: React.FC = ({ children, ...rest }) => {
  const { isLoggedIn } = useUserContext();

  return (
    <Route
      {...rest}
      render={({ location }) => (
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      )}
    />
  );
};

export default PrivateRoute;
