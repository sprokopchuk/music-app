import React from 'react';
import cn from 'classnames';
import '../css/track_item.scss'

const TrackItem = ({ track, onTrackClick, trackSelected }) => {
  const isSelected = trackSelected === track && track.preview_url;

  return (
    <div className={cn('item track-item ', { isSelected })}>
      <i
        className={cn("music icon", { disabled: !track.preview_url })}
        onClick={() =>{ onTrackClick(track) }}
      />
      <div className='content'>
        <div className='header'>{track.name}</div>
        <div className='description'>{track.artists.map(artist => artist.name).join(', ')}</div>
      </div>
    </div>
  );
};

export default TrackItem;