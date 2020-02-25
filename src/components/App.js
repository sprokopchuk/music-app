import React from 'react';
import SearchBar from './SearchBar';
import spotify from './api/spotify';
import TrackList from './TrackList';
import PlayingBar from './PlayingBar';

class App extends React.Component {
  state = { tracks: [], trackSelected: null }

  onFormSubmit = () => {
    spotify.get('/search', {
      params: {
        q: 'muse',
        type: 'track'
      }
    }).then((response) => {
      if (response.status === 200) {
        this.setState( { tracks: response.data.tracks.items })
      }
    });
  };

  onTrackClick = (track) => {
    this.setState({ trackSelected: track });
  };

  isSelected = (track) => {
    return this.state.trackSelected === track;
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onFormSubmit}/>
        <TrackList tracks={this.state.tracks} onTrackClick={this.onTrackClick} isSelected={this.isSelected}/>
        <PlayingBar track={this.state.trackSelected}/>
      </div>
    )
  }

}

export default App;
