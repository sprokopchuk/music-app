import { connect } from 'react-redux';
import TrackList from '../Shared/TrackList';
import { pauseTrack, playTrack, selectTrack } from '../../actions';

const mapStateToProps = state => {
  return {
    tracks: state.tracks,
    trackSelected: state.trackSelected,
    isPlaying: state.isPlaying
  }
};

export default connect(mapStateToProps, { selectTrack, playTrack, pauseTrack })(TrackList);
