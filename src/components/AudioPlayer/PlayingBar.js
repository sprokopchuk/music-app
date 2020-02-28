import React from 'react';
import '../../css/playing_bar.scss';
import cn from "classnames";

const PlayingBar = ({ source, duration, onPlay, onTimeUpdate, onEnded, onTogglePlay, audioRef, isPlaying }) => {
  return (
    <React.Fragment>
      {
        <div className='playing-bar'>
          <div className="ui bottom attached segment">
            <div className="ui top attached progress" >
              <div className="bar" style={{width: `${duration}%`}} />
              <audio
                ref={audioRef}
                src={source}
                onPlay={onPlay}
                onTimeUpdate={onTimeUpdate}
                onEnded={onEnded}
                autoPlay
              />
            </div>
            <i className={cn('icon', { pause: isPlaying, play: !isPlaying })} onClick={onTogglePlay}/>
          </div>
        </div>
      }
    </React.Fragment>
  );
};

export default PlayingBar;