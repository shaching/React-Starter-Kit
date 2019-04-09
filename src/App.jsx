import PropTypes from 'prop-types';
import React from 'react';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => <React.Fragment>{renderRoutes(route.routes)}</React.Fragment>;

App.propTypes = {
  route: PropTypes.instanceOf(Object).isRequired,
};

export default App;
