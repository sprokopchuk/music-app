import React from 'react';
import cn from 'classnames';

class AudioPlayer extends React.Component {
  state = { play: true, duration: 0 };

  onTogglePlay = () => {
    if (this.state.play) {
      this.audio.pause();
      this.setState({ play: false })
    } else {
      this.audio.play();
      this.setState({ play: true });
    }
  };

  onPlay = () => {
    this.setState({ play: true });
  };

  onTimeUpdate = () => {
    const duration = Math.floor(this.audio.currentTime) / Math.floor(this.audio.duration) * 100;
    this.setState({ duration: duration });
  };

  onEnded = () => {
    this.setState({ play: false })
  };

  render() {
    return (
      <React.Fragment>
        <div className="ui top attached progress" >
          <div className="bar" style={{width: `${this.state.duration}%`}} />
          <audio
            ref={(audio) => { this.audio = audio }}
            src={this.props.source}
            onPlay={this.onPlay}
            onTimeUpdate={this.onTimeUpdate}
            onEnded={this.onEnded}
            autoPlay
          />
        </div>
        <i className={cn('icon', { pause: this.state.play, play: !this.state.play })} onClick={this.onTogglePlay}/>
      </React.Fragment>
    )
  }
}

export default AudioPlayer;