import React from 'react';
import cn from 'classnames';
import '../../css/track_item.scss'

class TrackItem extends React.Component {
  render () {
    const { track, trackSelected, isPlaying, onTogglePlay, onTrackClick } = this.props;
    const isSelected = track.preview_url && trackSelected === track;

    return (
      <div className='item track-item'>
        <i
          className={cn('icon', {
            disabled: !track.preview_url,
            pause: isPlaying && isSelected,
            play: !isPlaying && isSelected
          })}
          onClick={() => {
            onTrackClick(track);
            onTogglePlay();
          }}
        />
        <div className='content'>
          <div className='header'>{track.name}</div>
          <div className='description'>{track.artists.map(artist => artist.name).join(', ')}</div>
        </div>
      </div>
    );
  }
};

export default TrackItem;