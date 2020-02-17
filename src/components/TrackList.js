import React from 'react';
import TrackItem from './TrackItem';

const TrackList = ({ tracks }) => {
  return (
    <div className='ui segment'>
      <div className='ui relaxed divided list'>
        { tracks.map(track => <TrackItem track={track} key={track.id}/>) }
      </div>
    </div>
  )
};

export default TrackList;