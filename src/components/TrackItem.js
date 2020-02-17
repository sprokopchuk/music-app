import React from 'react';
import '../css/track_item.css'

const TrackItem = ({ track }) => {
  return (
    <div className='item track-item'>
      <i className="music icon"></i>
      <div className='content'>
        <div className='ui grid'>
          <div className="eight wide column">
            <div className='header'>{track.name}</div>
            <div className='description'>{track.artists.map(artist => artist.name).join(', ')}</div>
          </div>
          <div className="eight wide column">
            <audio
                controls
                src={track.preview_url}>
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackItem;