import React from 'react';
import { render } from 'enzyme';
import TrackItem from '../TrackItem';


describe('<TrackItem />', () => {
  it('renders pause icon', () => {
    const props = {
      track: { id: 1, preview_url: 'audio_url', artists: ['Bob', 'Joe'] },
      onTrackClick: jest.fn(),
      isPlaying: true,
      isSelected: true
    };

    const wrapper = render(<TrackItem {...props} />);

    expect(wrapper.find('.pause')).to.have.lengthOf(1);
  });

  it('renders play icon', () => {
    const props = {
      track: { id: 1, preview_url: 'audio_url', artists: ['Bob', 'Joe'] },
      onTrackClick: jest.fn(),
      isPlaying: false,
      isSelected: true
    };

    const wrapper = render(<TrackItem {...props} />);

    expect(wrapper.find('.pause')).to.have.lengthOf(1);
  });

  it('renders disabled icon', () => {
    const props = {
      track: { id: 1, preview_url: null, artists: ['Bob', 'Joe'] },
      onTrackClick: jest.fn(),
      isPlaying: false,
      isSelected: false
    };

    const wrapper = render(<TrackItem {...props} />);

    expect(wrapper.find('.pause')).to.have.lengthOf(1);
  });
});
