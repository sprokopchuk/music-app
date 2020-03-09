import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import cn from 'classnames';
import '../../css/playing_bar.scss';
import { playTrack, pauseTrack, updateDuration } from '../../actions';

const sourceSelector = createSelector(state => state.trackSelected,
                                     trackSelected => trackSelected.preview_url);

class PlayingBar extends React.Component {
  audio = React.createRef();

  toggleAudio() {
    if(this.props.isPlaying) {
      this.audio.current.play();
    } else {
      this.audio.current.pause();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.source !== this.props.source) {
      this.props.updateDuration(0);
    }
    this.toggleAudio();
  }

  componentDidMount() {
    this.toggleAudio()
  }

  onTogglePlay = () => {
    const { playTrack, pauseTrack, isPlaying } = this.props;
    isPlaying ? pauseTrack() : playTrack()
  };

  onTimeUpdate = () => {
    const duration = Math.floor(this.audio.current.currentTime) / Math.floor(this.audio.current.duration) * 100;
    this.props.updateDuration(duration);
  };

  render() {
    return (
      <React.Fragment>
        {
          <div className='playing-bar'>
            <div className="ui bottom attached segment">
              <div className="ui top attached progress" >
                <div className="bar" style={{width: `${this.props.duration}%`}} />
                <audio
                  ref={this.audio}
                  src={this.props.source}
                  onTimeUpdate={this.onTimeUpdate}
                />
              </div>
              <i
                className={cn('icon', { pause: this.props.isPlaying, play: !this.props.isPlaying })}
                onClick={this.onTogglePlay}
              />
            </div>
          </div>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPlaying: state.isPlaying,
    source: sourceSelector(state),
    duration: state.duration
  }
};

export default connect(mapStateToProps, { playTrack, pauseTrack, updateDuration })(PlayingBar);