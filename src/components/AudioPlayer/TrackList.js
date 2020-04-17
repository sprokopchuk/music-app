import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectTrack, playTrack, pauseTrack } from '../../actions';
import { isPresent } from '../../utils/collection';
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
                    onTrackClick={() => this.onTrackClick(track) }
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


TrackList.propTypes = {
  tracks: PropTypes.array.isRequired,
  trackSelected: PropTypes.object,
  isPlaying: PropTypes.bool.isRequired,
  playTrack: PropTypes.func.isRequired,
  pauseTrack: PropTypes.func.isRequired,
  selectTrack: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    tracks: state.tracks,
    trackSelected: state.trackSelected,
    isPlaying: state.isPlaying
  }
};

export default connect(mapStateToProps, { selectTrack, playTrack, pauseTrack })(TrackList);
