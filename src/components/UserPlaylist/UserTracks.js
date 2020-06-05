import { connect } from 'react-redux';
import TrackList from '../Shared/TrackList';
import { pauseTrack, playTrack, selectTrack, changeTrackState } from '../../actions';

const mapStateToProps = state => {
  return {
    tracks: state.userTracks,
    trackSelected: state.trackSelected,
    isPlaying: state.isPlaying
  }
};

export default connect(
  mapStateToProps,
  { selectTrack,
    playTrack,
    pauseTrack,
    changeTrackState: changeTrackState
  })
(TrackList);
