import React from 'react';
import { connect } from 'react-redux';
import TrackList from './TrackList';
import PlayingBar from './PlayingBar';

const AudioPlayer = ({ trackSelected }) => {
  return (
    <React.Fragment>
      <TrackList/>
      { trackSelected && <PlayingBar/> }
    </React.Fragment>
  )
};

const mapStateToProps = (state) => {
  return {
    trackSelected: state.trackSelected,
  }
};

export default connect(mapStateToProps)(AudioPlayer);