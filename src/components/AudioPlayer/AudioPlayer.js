import React from 'react';
import { connect } from 'react-redux';
import TrackList from './TrackList';
import PlayingBar from './PlayingBar';
import { togglePlay } from '../../actions';

class AudioPlayer extends React.Component {
  // state = { play: false, duration: 0 };
  audio = React.createRef();
  //
  onTogglePlay = () => {
    const { trackSelected, isPlaying, togglePlay } = this.props;

    // if(!trackSelected) {
    //   this.props.loadFirstTrack();
    //   return;
    // }

    if (isPlaying) {
      this.audio.current.pause();
      togglePlay();
    } else {
      this.audio.current.play();
      togglePlay();
    }
  };
  //
  // onPlay = () => {
  //   this.setState({ play: true });
  // };
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
        <TrackList
          onTogglePlay={this.onTogglePlay}
          // isPlaying={this.state.play}
        />
        {/*<PlayingBar*/}
        {/*  source={this.props.trackSelected && this.props.trackSelected.preview_url}*/}
        {/*  onTogglePlay={this.onTogglePlay}*/}
        {/*  onEnded={this.onEnded}*/}
        {/*  onTimeUpdate={this.onTimeUpdate}*/}
        {/*  onPlay={this.onPlay}*/}
        {/*  duration={this.state.duration}*/}
        {/*  isPlaying={this.state.play}*/}
        {/*  audioRef={this.audio}*/}
        {/*/>*/}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tracks: state.tracks,
    trackSelected: state.trackSelected,
    isPlaying: state.isPlaying
  }
};

export default connect(mapStateToProps, { togglePlay })(AudioPlayer);