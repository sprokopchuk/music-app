import React from 'react';
import { connect } from 'react-redux';
import { selectTrack, togglePlay } from '../../actions';
import { isPresent } from '../collection';
import TrackItem from './TrackItem';

class TrackList extends React.Component {
  onTrackClick = (track) => {
    if(!track.preview_url) return;
    this.props.selectTrack(track);
    this.props.togglePlay();
  };

  render (){
    const { tracks, trackSelected, isPlaying } = this.props;

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
                    isPlaying={isPlaying}
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
    trackSelected: state.trackSelected,
    isPlaying: state.isPlaying
  }
};

export default connect(mapStateToProps, { selectTrack, togglePlay })(TrackList);