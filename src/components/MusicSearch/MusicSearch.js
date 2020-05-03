import React, { Fragment } from 'react';
import SearchResults from './SearchResults';
import SearchBar from '../SearchBar';
import PlayingBar from '../Shared/PlayingBar';

const MusicSearch = () => {
  return (
    <Fragment>
      <SearchBar/>
      <SearchResults/>
      <PlayingBar/>
    </Fragment>
  )
};

export default MusicSearch;
