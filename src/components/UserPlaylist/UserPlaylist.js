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
    return <UserTracks />
  }
}

export default connect()(UserPlaylist);
