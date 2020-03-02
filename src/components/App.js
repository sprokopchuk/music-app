import React from 'react';
import SearchBar from './SearchBar';
import spotify from './api/spotify';
import AudioPlayer from './AudioPlayer';

class App extends React.Component {
  state = { tracks: [], trackSelected: null };

  onFormSubmit = (term) => {
    spotify.get('/search', {
      params: {
        q: term,
        type: 'track'
      }
    }).then((response) => {
      if (response.status === 200) {
        this.setState( { tracks: response.data.tracks.items })
      }
    });
  };

  onTrackClick = (track) => {
    if(!track.preview_url) return;
    this.setState({ trackSelected: track });
  };

  loadFirstTrack = () => {
    this.setState({ trackSelected: this.state.tracks[0] });
  };

  loadNextTrack = () => {
    const currentIndexTrack = this.state.tracks.findIndex((track) => (track === this.state.trackSelected));
    this.setState({ trackSelected: this.state.tracks[currentIndexTrack + 1] })
  };

  render() {
    return (
      <div className='ui container'>
        <AudioPlayer
          tracks={this.state.tracks}
          trackSelected={this.state.trackSelected}
          onTrackClick={this.onTrackClick}
          loadFirstTrack={this.loadFirstTrack}
          loadNextTrack={this.loadNextTrack}
        />
        <SearchBar/>
      </div>
    )
  }

}

export default App;
