import React from 'react';
import SearchBar from './SearchBar';
import spotify from './api/spotify';
import TrackList from "./TrackList";

class App extends React.Component {
  state = { tracks: [] }

  componentDidMount() {

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

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onFormSubmit}/>
        <TrackList tracks={this.state.tracks} />
      </div>
    )
  }

};

export default App;
