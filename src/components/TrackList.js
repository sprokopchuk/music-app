import React from 'react';
import TrackItem from './TrackItem';

const TrackList = ({ tracks, onTrackClick, isSelected }) => {
  return (
    <div className='ui segment'>
      <div className='ui relaxed divided list'>
        { tracks.map(track => <TrackItem track={track}
                                         key={track.id}
                                         onTrackClick={onTrackClick}
                                         isSelected={isSelected}/>) }
      </div>
    </div>
  )
};

export default TrackList;