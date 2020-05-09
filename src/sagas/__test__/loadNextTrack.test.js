import { runSaga, stdChannel } from 'redux-saga';
import loadNextTrack from '../loadNextTrack';
import { LOAD_NEXT_TRACK, PLAY_TRACK, SELECT_TRACK } from '../../actions';

const mockStore = (state) => {
  const channel = stdChannel();
  return {
    channel,
    dispatch: jest.fn(action => {
      channel.put(action);
      return action;
    }),
    getState: jest.fn(() => state)
  };
};

describe('loadNextTrack', () => {
  it('loads next track with present preview_url', () => {
    const tracks = [
      { id: 1, preview_url: 'audio_url' },
      { id: 2, preview_url: null },
      { id: 3, preview_url: 'audio_url' }
    ];
    const store = mockStore({ tracks, trackSelected: tracks[0] })
    const action = {
      type: LOAD_NEXT_TRACK,
      key: 'tracks'
    };

    runSaga(store, loadNextTrack);
    store.dispatch(action);

    expect(store.dispatch).toHaveBeenNthCalledWith(2, {
      type: SELECT_TRACK,
      track: tracks[2]
    });
    expect(store.dispatch).toHaveBeenNthCalledWith(3, {
      type: PLAY_TRACK,
      payload: true
    })
  });


  it('loads first track when selected track is last one', () => {
    const tracks = [
      { id: 1, preview_url: 'audio_url' },
      { id: 2, preview_url: 'audio_url' }
    ];
    const store = mockStore({ tracks, trackSelected: tracks[2] })
    const action = {
      type: LOAD_NEXT_TRACK,
      key: 'tracks'
    };

    runSaga(store, loadNextTrack);
    store.dispatch(action);

    expect(store.dispatch).toHaveBeenNthCalledWith(2, {
      type: SELECT_TRACK,
      track: tracks[0]
    });
    expect(store.dispatch).toHaveBeenNthCalledWith(3, {
      type: PLAY_TRACK,
      payload: true
    })
  });
});
