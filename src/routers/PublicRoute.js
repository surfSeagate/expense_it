
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
//import ExpenseDashboardPage from '../components/ExpenseDashboardPage';

//Redirect is a Route method, not made by me

export const PublicRoute = ({
  isAUthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAUthenticated ? (

        <Redirect to='/dashboard' />

      ) : (
          <Component {...props} />
        )
    )} />
  );

// !! switches it to a boolean value
const mapStateToProps = (state) => ({
  isAUthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute)