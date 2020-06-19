import React, { Fragment } from 'react';
import { NavLink, Route } from 'react-router-dom';
import MusicSearch from './MusicSearch';
import UserPlaylist from './UserPlaylist';
import GoogleAuth from './GoogleAuth';
import PlayingBar from './Shared/PlayingBar';

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
        <Route exact path='/' component={MusicSearch}/>
        <Route path='/playlist' component={UserPlaylist}/>
      </div>
      <PlayingBar />
    </Fragment>
  )
};

export default App;
