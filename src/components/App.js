import React from 'react';
import SearchBar from './SearchBar';
import spotify from './api/spotify';

class App extends React.Component {
  state = { tracks: [] }

  componentDidMount() {
    spotify.get('/search', {
      params: {
        q: 'muse',
        type: 'track'
      }
    }).then((response) => {
      if (response.status === 200) {
        this.setState( { tracks: response.data.tracks.items })
        console.log(response.data.tracks.items)
      }
    });
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar />
      </div>
    )
  }

};

export default App;
