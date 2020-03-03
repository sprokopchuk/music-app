import React from 'react';
import { connect } from 'react-redux';
import { isPresent } from '../collection';
import TrackItem from './TrackItem';

const TrackList = ({ tracks, onTrackClick, trackSelected, onTogglePlay, isPlaying }) => {
  return (
    <React.Fragment>
      {
        isPresent(tracks) &&
          <div className='ui segment'>
            <div className='ui relaxed divided list'>
              { tracks.map(track => (
                <TrackItem
                  track={track}
                  key={track.id}
                  // onTrackClick={onTrackClick}
                  // trackSelected={trackSelected}
                  // onTogglePlay={onTogglePlay}
                  // isPlaying={isPlaying}
                />))
              }
            </div>
          </div>
      }
    </React.Fragment>
  )
};

const mapStateToProps = (state) => {
  return {
    tracks: state.tracks
  }
};

export default  connect(mapStateToProps)(TrackList);