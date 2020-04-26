import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { trySignIn, trySignOut } from '../actions';

const GoogleButton = ({ text, onClick }) => {
  return (
    <button className="ui google button red" onClick={onClick}>
      <i className="google icon" />
      {text}
    </button>
  )
};

const GoogleAuth = ({ isSignedIn, trySignIn, trySignOut }) => {
  if (isSignedIn == null) {
    return null;
  }
  return (
    <Fragment>
      {isSignedIn
        ?
        <GoogleButton text='SIGN OUT' onClick={trySignOut} />
        :
        <GoogleButton text='SIGN IN' onClick={trySignIn} />
      }
    </Fragment>
  )
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
};

export default connect(mapStateToProps, { trySignIn, trySignOut })(GoogleAuth);
