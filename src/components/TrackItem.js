import React from 'react';
import '../css/track_item.css'

const TrackItem = ({ track }) => {
  return (
    <div className='item track-item'>
      <i className="music icon"></i>
      <div className='content'>
        <div className='header'>{track.name}</div>
        <div className='description'>{track.artists.map(artist => artist.name).join(', ')}</div>
      </div>
    </div>
  );
};

export default TrackItem;