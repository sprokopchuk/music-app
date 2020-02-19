import React from 'react';
import cn from 'classnames';
import '../css/track_item.scss'

const TrackItem = ({ track, onTrackClick, isSelected }) => {
  return (
    <div className={cn('item track-item ', { 'isSelected': isSelected(track) })}>
      <i className="music icon" onClick={() =>{ onTrackClick(track) }}/>
      <div className='content'>
        <div className='header'>{track.name}</div>
        <div className='description'>{track.artists.map(artist => artist.name).join(', ')}</div>
      </div>
    </div>
  );
};

export default TrackItem;