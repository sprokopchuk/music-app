import React from 'react';
import AudioPlayer from './AudioPlayer';
import '../css/playing_bar.scss';

const PlayingBar = ({ track }) => {
  return (
    <React.Fragment>
      {
        track &&
          <div className='playing-bar'>
            <div className="ui bottom attached segment">
              <AudioPlayer source={track.preview_url} />
            </div>
          </div>
      }
    </React.Fragment>
  );
};

export default PlayingBar;