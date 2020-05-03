import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import '../../../css/track_item.scss'

const TrackItem = ({ track, onTrackClick, isPlaying, isSelected }) => {
  return (
    <div className='item track-item'>
      <i
        className={cn('icon', {
          disabled: !track.preview_url,
          pause: isPlaying && isSelected,
          play: !isPlaying && isSelected
        })}
        onClick={onTrackClick}
      />
      <div className='content'>
        <div className='header'>{track.name}</div>
        <div className='description'>{track.artists.map(artist => artist.name).join(', ')}</div>
      </div>
    </div>
  );
};

TrackItem.propTypes = {
  track: PropTypes.object.isRequired,
  onTrackClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool
};

export default TrackItem;