import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function RouteWrapper ({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (
        <Component {...props} />
      )}
    />
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

export default RouteWrapper;