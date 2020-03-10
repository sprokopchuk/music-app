import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import cn from 'classnames';
import '../../css/playing_bar.scss';
import { playTrack, pauseTrack, updateDuration, playNextTrack, selectTrack } from '../../actions';

const sourceSelector = createSelector(state => state.trackSelected,
                                     trackSelected => trackSelected.preview_url);

class PlayingBar extends React.Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.source !== this.props.source) {
      this.props.updateDuration(0);
    }
  }

  onTogglePlay = () => {
    const { playTrack, pauseTrack, isPlaying } = this.props;
    isPlaying ? pauseTrack() : playTrack();
  };

  onEnded = () => {
    this.props.loadNextTrack();
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
                  onEnded={this.onEnded}
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

export default connect(mapStateToProps, { playTrack, pauseTrack, updateDuration, playNextTrack, selectTrack })(PlayingBar);