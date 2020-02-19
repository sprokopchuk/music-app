import React from 'react';
import '../css/playing_bar.scss';

const PlayingBar = ({ track }) => {
  return (
    <React.Fragment>
      {
        track &&
          <div className='playing-bar'>
            <div className="ui bottom attached segment">
              <audio
                  controls
                  src={track.preview_url}>
              </audio>
            </div>
          </div>
      }
    </React.Fragment>
  );
};

export default PlayingBar;