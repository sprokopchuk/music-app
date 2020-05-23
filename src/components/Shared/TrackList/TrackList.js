import React from 'react';
import PropTypes from 'prop-types';
import { isPresent } from '../../../utils/collection';
import TrackItem from './TrackItem';

class TrackList extends React.Component {
  onTrackClick(track) {
    if(!track.preview_url) return;
    this.props.selectTrack(track);
    const { playTrack, pauseTrack, isPlaying, trackSelected } = this.props;
    if(trackSelected === track) {
      isPlaying ? pauseTrack() : playTrack();
    } else {
      playTrack();
    }
  }

  render (){
    const { tracks, trackSelected, isPlaying, changeTrackState } = this.props;
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
                    isSelected={track.preview_url && trackSelected === track}
                    onTrackClick={() => this.onTrackClick(track) }
                    isPlaying={isPlaying}
                    onTrackClickToggle={() => changeTrackState(track)}
                  />))
                }
              </div>
            </div>
        }
      </React.Fragment>
    )
  };
}


TrackList.propTypes = {
  tracks: PropTypes.array.isRequired,
  trackSelected: PropTypes.object,
  isPlaying: PropTypes.bool.isRequired,
  playTrack: PropTypes.func.isRequired,
  pauseTrack: PropTypes.func.isRequired,
  selectTrack: PropTypes.func.isRequired,
  changeTrackState: PropTypes.func.isRequired
};

export default TrackList;
