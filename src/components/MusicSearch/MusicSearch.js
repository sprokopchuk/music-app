import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import SearchBar from '../SearchBar';
import PlayingBar from '../Shared/PlayingBar';
import audioInstance from '../../audioInstance';
import { updateDuration, loadNextTrack } from '../../actions';

class MusicSearch extends React.Component {
  componentDidMount() {
    audioInstance.ontimeupdate = () => {
      const duration = audioInstance.currentTime / audioInstance.duration * 100;
      this.props.dispatch(updateDuration(duration));
    };

    audioInstance.onended = () => {
      this.props.dispatch(loadNextTrack());
    };
  }

  render() {
    return (
      <Fragment>
        <SearchBar/>
        <SearchResults/>
        <PlayingBar/>
      </Fragment>
    )
  }
}

export default connect()(MusicSearch);
