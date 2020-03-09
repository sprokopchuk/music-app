import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import cn from 'classnames';
import '../../css/playing_bar.scss';
import { playTrack, pauseTrack } from '../../actions';

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

  componentDidUpdate() {
    this.toggleAudio()
  }

  componentDidMount() {
    this.toggleAudio()
  }

  onTogglePlay = () => {
    const { playTrack, pauseTrack, isPlaying } = this.props;
    isPlaying ? pauseTrack() : playTrack()
  };

  render() {
    return (
      <React.Fragment>
        {
          <div className='playing-bar'>
            <div className="ui bottom attached segment">
              <div className="ui top attached progress" >
                {/*<div className="bar" style={{width: `${duration}%`}} />*/}
                <audio
                  ref={this.audio}
                  src={this.props.source}
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
    source: sourceSelector(state)
  }
};

export default connect(mapStateToProps, { playTrack, pauseTrack })(PlayingBar);