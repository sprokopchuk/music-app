import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import SearchBar from '../SearchBar';
import audioInstance from '../../audioInstance';
import { updateDuration, loadNextTrack } from '../../actions';
import { SEARCH_TRACKS_KEY } from '../../constants/tracksKeys'

class MusicSearch extends React.Component {
  componentDidMount() {
    audioInstance.ontimeupdate = () => {
      const duration = audioInstance.currentTime / audioInstance.duration * 100;
      this.props.dispatch(updateDuration(duration));
    };

    audioInstance.onended = () => {
      this.props.dispatch(loadNextTrack(SEARCH_TRACKS_KEY));
    };
  }

  render() {
    return (
      <Fragment>
        <SearchBar/>
        <SearchResults/>
      </Fragment>
    )
  }
}

export default connect()(MusicSearch);
