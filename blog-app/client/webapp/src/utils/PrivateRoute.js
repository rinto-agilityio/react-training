import React from 'react';
import { Query } from 'react-apollo';
import {
  Route,
  Redirect
} from 'react-router-dom';
import { ApolloConsumer } from 'react-apollo';

//query
import { LOGGED_USER } from '../graphql/author/queries';

//prop type
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, loginPath, path, ...rest}) => {
  return (
    <ApolloConsumer >
      {
        client => {
          return (
            <Query query= { LOGGED_USER } >
              {({ data, error }) => {
                const isAuthenticated = (error || !data.loggedUser) ? false : true;
                return (
                  <Route {...rest} render={props => {
                    return (
                      isAuthenticated || (!isAuthenticated && loginPath === path) ? (
                        <Component path={path} {...props} {...rest} accessClient={client}/>
                      ) : (
                        <Redirect to={{
                          pathname: loginPath
                        }} />
                      )
                    );
                  }} />
                );
              }}
            </Query>
          );
        }
      }
    </ApolloConsumer>
  );
};

PrivateRoute.propTypes = {
  loginPath: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

PrivateRoute.defaultProps = {
  loginPath: '',
  component: null
};

export default PrivateRoute;
