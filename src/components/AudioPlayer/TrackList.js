import React from 'react';
import { connect } from 'react-redux';
import { selectTrack } from '../../actions';
import { isPresent } from '../collection';
import TrackItem from './TrackItem';

class TrackList extends React.Component {
  onTrackClick = (track) => {
    if(!track.preview_url) return;
    this.props.selectTrack(track);
  };

  render (){
    const { tracks, trackSelected } = this.props;

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
                    onTrackClick={() => this.onTrackClick(track)}
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
}

const mapStateToProps = (state) => {
  return {
    tracks: state.tracks,
    trackSelected: state.trackSelected
  }
};

export default connect(mapStateToProps, { selectTrack })(TrackList);