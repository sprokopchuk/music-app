import React from 'react';
import TrackList from './TrackList';
import PlayingBar from './PlayingBar';

class AudioPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { play: true, duration: 0 };
    this.audio = React.createRef();
  }

  onTogglePlay = () => {
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
    this.setState({ play: false })
  };

  render() {
    return (
      <React.Fragment>
        <TrackList tracks={this.props.tracks} onTrackClick={this.props.onTrackClick}
                   trackSelected={this.props.trackSelected}/>
        <PlayingBar
          source={this.props.trackSelected}
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