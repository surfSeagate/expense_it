import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header'

//Redirect is a Route method, not made by me

export const PrivateRoute = ({
  isAUthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAUthenticated ? (
        <div>
          <Header />
          <Component {...props} />
        </div>
      ) : (
          <Redirect to='/' />
        )
    )} />
  );

const mapStateToProps = (state) => ({

  isAUthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute)