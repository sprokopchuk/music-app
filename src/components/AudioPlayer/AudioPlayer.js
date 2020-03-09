import React from 'react';
import { connect } from 'react-redux';
import TrackList from './TrackList';
import PlayingBar from './PlayingBar';

class AudioPlayer extends React.Component {
  //
  // onTimeUpdate = () => {
  //   const duration = Math.floor(this.audio.current.currentTime) / Math.floor(this.audio.current.duration) * 100;
  //   this.setState({ duration: duration });
  // };
  //
  // onEnded = () => {
  //   this.props.loadNextTrack();
  // };

  render() {
    return (
      <React.Fragment>
        <TrackList/>
        { this.props.trackSelected && <PlayingBar/> }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trackSelected: state.trackSelected
  }
};

export default connect(mapStateToProps)(AudioPlayer);