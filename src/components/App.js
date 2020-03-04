import React from 'react';
import SearchBar from './SearchBar';
import AudioPlayer from './AudioPlayer';

class App extends React.Component {
  // loadFirstTrack = () => {
  //   this.setState({ trackSelected: this.state.tracks[0] });
  // };
  //
  // loadNextTrack = () => {
  //   const currentIndexTrack = this.state.tracks.findIndex((track) => (track === this.state.trackSelected));
  //   this.setState({ trackSelected: this.state.tracks[currentIndexTrack + 1] })
  // };

  render() {
    return (
      <div className='ui container'>
        <SearchBar/>
        <AudioPlayer/>
        {/*  tracks={this.state.tracks}*/}
        {/*  trackSelected={this.state.trackSelected}*/}
        {/*  onTrackClick={this.onTrackClick}*/}
        {/*  loadFirstTrack={this.loadFirstTrack}*/}
        {/*  loadNextTrack={this.loadNextTrack}*/}
        {/*/>*/}
      </div>
    )
  }

}

export default App;
