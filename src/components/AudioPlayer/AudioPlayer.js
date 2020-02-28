import React from 'react';
import TrackList from './TrackList';
import PlayingBar from './PlayingBar';

class AudioPlayer extends React.Component {
  state = { play: false, duration: 0 };
  audio = React.createRef();

  onTogglePlay = () => {
    if(!this.props.trackSelected) {
      this.props.loadFirstTrack();
      return;
    }

    if (this.state.play) {
      this.audio.current.pause();
      this.setState({ play: false })
    } else {
      this.audio.current.play();
      this.setState({ play: true });
    }
  };

  onPlay = () => {
    this.setState({ play: true });
  };

  onTimeUpdate = () => {
    const duration = Math.floor(this.audio.current.currentTime) / Math.floor(this.audio.current.duration) * 100;
    this.setState({ duration: duration });
  };

  onEnded = () => {
    this.props.loadNextTrack();
  };

  render() {
    return (
      <React.Fragment>
        <TrackList
          tracks={this.props.tracks}
          onTrackClick={this.props.onTrackClick}
          trackSelected={this.props.trackSelected}
          onTogglePlay={this.onTogglePlay}
          isPlaying={this.state.play}
        />
        <PlayingBar
          source={this.props.trackSelected && this.props.trackSelected.preview_url}
          onTogglePlay={this.onTogglePlay}
          onEnded={this.onEnded}
          onTimeUpdate={this.onTimeUpdate}
          onPlay={this.onPlay}
          duration={this.state.duration}
          isPlaying={this.state.play}
          audioRef={this.audio}
        />
      </React.Fragment>
    )
  }
}

export default AudioPlayer;