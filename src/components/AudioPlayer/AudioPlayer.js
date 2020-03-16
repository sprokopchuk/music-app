import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

AudioPlayer.propTypes = {
  trackSelected: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    trackSelected: state.trackSelected,
  }
};

export default connect(mapStateToProps)(AudioPlayer);
