import React, { Component, Fragment }   from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux'
import Modal from 'react-modal';
import GoogleAuth from '../components/GoogleAuth';

const mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    ownProps: ownProps
  }
};

Modal.setAppElement('#root');

const withAuthorisationModal = WrappedComponent => ({ isSignedIn, ownProps }) => {
  class AuthorisationComponent extends Component {
    state = { isSignedModalOpen: false };

    onClickAuthorizationRequired = () => {
      if(!isSignedIn) {
        this.setState({
          isSignedModalOpen: true
        })
      } else {
        ownProps.onClick();
      }
    };

    onCloseModal = () => {
      this.setState({
        isSignedModalOpen: false
      })
    };

    render() {
      return (
        <Fragment>
          <Modal isOpen={this.state.isSignedModalOpen} onRequestClose={this.onCloseModal}>
            <div className='ui dimmer modals page visible active'>
              <div className='ui small modal visible active'>
                <div className='header'>
                  In order to continue you have to sign in!
                </div>
                <div className='content'>
                  <GoogleAuth />
                </div>
              </div>
            </div>
          </Modal>
          <WrappedComponent {...ownProps} onClick={this.onClickAuthorizationRequired} />
        </Fragment>
      )
    }
  }

  return <AuthorisationComponent />
};

export default compose(
  connect(mapStateToProps),
  withAuthorisationModal
);
