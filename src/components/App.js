import React, { Fragment } from 'react';
import SearchBar from './SearchBar';
import AudioPlayer from './AudioPlayer';
import GoogleAuth from './GoogleAuth';

const App = () => {
  return (
    <Fragment>
      <div className='ui secondary menu'>
        <div className='ui container'>
          <a className='active item'>Home</a>
          <a className='item'>Playlist</a>
          <div className="right menu">
            <GoogleAuth/>
          </div>
        </div>
      </div>
      <div className='ui container'>
        <SearchBar/>
        <AudioPlayer/>
      </div>
    </Fragment>
  )
};

export default App;
