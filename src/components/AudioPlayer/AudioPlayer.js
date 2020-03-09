import React from 'react';
import { connect } from 'react-redux';
import { selectTrack } from '../../actions'
import TrackList from './TrackList';
import PlayingBar from './PlayingBar';

class AudioPlayer extends React.Component {
  loadNextTrack = () => {
    const { tracks, trackSelected } = this.props;
    const currentIndexTrack = tracks.findIndex((track) => (track === trackSelected));
    if(currentIndexTrack >= 0) {
      const track = tracks.find((track, index) => index > currentIndexTrack && track.preview_url);
      this.props.selectTrack(track);
    } else {
      const track = tracks.find(track => track.preview_url);
      this.props.selectTrack(track);
    }
  };

  render() {
    return (
      <React.Fragment>
        <TrackList/>
        { this.props.trackSelected && <PlayingBar loadNextTrack={this.loadNextTrack}/> }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trackSelected: state.trackSelected,
    tracks: state.tracks
  }
};

export default connect(mapStateToProps, { selectTrack })(AudioPlayer);