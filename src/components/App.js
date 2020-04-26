import React, { Fragment } from 'react';
import { NavLink, Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import Playlist from './Playlist';
import AudioPlayer from './AudioPlayer';
import GoogleAuth from './GoogleAuth';

const App = () => {
  return (
    <Fragment>
      <div className='ui secondary menu'>
        <div className='ui container'>
          <NavLink exact className='item' to='/'>Home</NavLink>
          <NavLink className='item' to='/playlist'>Playlist</NavLink>
          <div className="right menu">
            <GoogleAuth/>
          </div>
        </div>
      </div>
      <div className='ui container'>
        <Route exact path='/'>
          <SearchBar/>
        </Route>
        <Route path='/playlist'>
          <Playlist/>
        </Route>
        <AudioPlayer/>
      </div>
    </Fragment>
  )
};

export default App;
