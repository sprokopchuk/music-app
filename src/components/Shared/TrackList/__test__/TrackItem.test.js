import React from 'react';
import { shallow } from 'enzyme';
import TrackItem from '../TrackItem';


describe('<TrackItem />', () => {
  it('renders pause icon', () => {
    const props = {
      track: { id: 1, preview_url: 'audio_url', artists: [{ name: 'Bob' }, { name: 'Joe' }] },
      onTrackClick: jest.fn(),
      isPlaying: true,
      isSelected: true
    };

    const wrapper = shallow(<TrackItem {...props} />);

    expect(wrapper.find('.music').hasClass('pause')).toBe(true)
  });

  it('renders play icon', () => {
    const props = {
      track: { id: 1, preview_url: 'audio_url', artists: [{ name: 'Bob' }, { name: 'Joe' }] },
      onTrackClick: jest.fn(),
      isPlaying: false,
      isSelected: true
    };

    const wrapper = shallow(<TrackItem {...props} />);

    expect(wrapper.find('.music').hasClass('play')).toBe(true)
  });

  it('renders disabled icon', () => {
    const props = {
      track: { id: 1, preview_url: null, artists: [{ name: 'Bob' }, { name: 'Joe' }] },
      onTrackClick: jest.fn(),
      isPlaying: false,
      isSelected: false
    };

    const wrapper = shallow(<TrackItem {...props} />);

    expect(wrapper.find('.music').hasClass('disabled')).toBe(true)
  });
});
