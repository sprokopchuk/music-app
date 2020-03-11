import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import '../../css/playing_bar.scss';
import { playTrack, pauseTrack, updateDuration } from '../../actions';

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

  render() {
    return (
      <React.Fragment>
        {
          <div className='playing-bar'>
            <div className="ui bottom attached segment">
              <div className="ui top attached progress" >
                <div className="bar" style={{width: `${this.props.duration}%`}} />
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
    duration: state.duration
  }
};

export default connect(mapStateToProps, { playTrack, pauseTrack, updateDuration })(PlayingBar);