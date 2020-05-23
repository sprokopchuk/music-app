import { connect } from 'react-redux';
import TrackList from '../Shared/TrackList';
import { pauseTrack, playTrack, selectTrack, changeSearchTrackState } from '../../actions';

const mapStateToProps = state => {
  return {
    tracks: state.searchTracks,
    trackSelected: state.trackSelected,
    isPlaying: state.isPlaying
  }
};

export default connect(
  mapStateToProps,
  { selectTrack,
    playTrack,
    pauseTrack,
    changeTrackState: changeSearchTrackState
  })
(TrackList);
