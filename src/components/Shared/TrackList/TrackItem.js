import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import '../../../css/track_item.scss'

const TrackItem = ({ track, onTrackClick, isPlaying, isSelected, onTrackClickToggle }) => {
  return (
    <div className='item track-item'>
      <i
        className={cn('music icon link middle aligned', {
          disabled: !track.preview_url,
          pause: isPlaying && isSelected,
          play: !isPlaying && isSelected
        })}
        onClick={onTrackClick}
      />
      <div className='content'>
        <div className='header'>{track.name}</div>
        {track.artists.map(artist => artist.name).join(', ')}
      </div>
      <i
        className={cn('star icon red link middle aligned', { 'outline': !track.isSaved } )}
        onClick={onTrackClickToggle}
      />
    </div>
  );
};

TrackItem.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artists:  PropTypes.arrayOf(PropTypes.object),
    isSaved: PropTypes.bool.isRequired,
    savedTrackId: PropTypes.number
  }),
  onTrackClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool,
  onTrackClickToggle: PropTypes.func.isRequired
};

export default TrackItem;
