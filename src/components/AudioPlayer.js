import React from 'react';
import cn from 'classnames';

class AudioPlayer extends React.Component {
  state = { play: true };

  constructor(props) {
    super(props);
    this.audio = new Audio(this.props.preview_url);
    this.audio.play();
  }

  togglePlay = () => {
    if (this.state.play) {
      this.audio.pause();
      this.setState({ play: false })
    } else {
      this.audio.play();
      this.setState({ play: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="ui top attached progress">
          <div className="bar"></div>
        </div>
        <i className={cn('icon', { pause: this.state.play, play: !this.state.play })} onClick={this.togglePlay}/>
      </React.Fragment>
    )
  }
}

export default AudioPlayer;