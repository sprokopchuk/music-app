import React, { Fragment } from 'react';
import SearchBar from './SearchBar';
import AudioPlayer from './AudioPlayer';
import GoogleAuth from './GoogleAuth';

const App = () => {
  return (
    <Fragment>
      <div className='ui borderless main menu'>
        <div className="right menu">
          <GoogleAuth/>
        </div>
      </div>
      <div className='ui main container'>
        <SearchBar/>
        <AudioPlayer/>
      </div>
    </Fragment>
  )
};

export default App;
