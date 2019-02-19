import PropTypes from 'prop-types';
import * as React from 'react';
import { renderRoutes } from 'react-router-config';

const Home = ({ route }) => (
  <React.Fragment>
    {renderRoutes(route.routes)}
  </React.Fragment>
);

Home.propTypes = {
  route: PropTypes.instanceOf(Object).isRequired,
};

export default Home;
