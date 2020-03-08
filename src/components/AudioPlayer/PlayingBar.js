import React from 'react';
import '../../css/playing_bar.scss';
import cn from "classnames";

const PlayingBar = ({ source, duration, onTimeUpdate, onEnded, onTogglePlay, audioRef, isPlaying }) => {
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
                onTimeUpdate={onTimeUpdate}
                onEnded={onEnded}
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