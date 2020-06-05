import React from 'react';
import { connect } from 'react-redux';
import UserTracks from './UserTracks';
import audioInstance from '../../audioInstance';
import { loadNextTrack, updateDuration } from '../../actions';
import { USER_TRACKS_KEY } from '../../constants/tracksKeys';

class UserPlaylist extends React.Component {
  componentDidMount() {
    audioInstance.ontimeupdate = () => {
      const duration = audioInstance.currentTime / audioInstance.duration * 100;
      this.props.dispatch(updateDuration(duration));
    };

    audioInstance.onended = () => {
      this.props.dispatch(loadNextTrack(USER_TRACKS_KEY));
    };
  }

  render() {
    if(this.props.auth.isSignedIn) {
      return <UserTracks/>;
    } else {
      return <h1 className='ui header center aligned'>To save tracks into playlist you have to sign in!</h1>;
    }
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
};

export default connect(mapStateToProps)(UserPlaylist);
