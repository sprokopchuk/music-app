import loadNextTrackMiddleware from '../loadNextTrackMiddleware';
import { PLAY_NEXT_TRACK, PLAY_TRACK, SELECT_TRACK } from '../../actions';

const create = (store) => {

  const next = jest.fn();

  const invoke = action => loadNextTrackMiddleware(store)(next)(action);

  return { store, next, invoke }
};

describe('loadNextTrackMiddleware', () => {
  it('loads next track with present preview_url', () => {
    const tracks = [
      { id: 1, preview_url: 'audio_url' },
      { id: 2, preview_url: null },
      { id: 3, preview_url: 'audio_url' }
    ];
    const { invoke, store } = create({
      getState: jest.fn(() => ({
        trackSelected: tracks[0],
        tracks: tracks
      })),
      dispatch: jest.fn()
    });

    const action = { type: PLAY_NEXT_TRACK };
    invoke(action);
    expect(store.dispatch).toHaveBeenNthCalledWith(1, {
      type: SELECT_TRACK,
      track: tracks[2]
    });
    expect(store.dispatch).toHaveBeenNthCalledWith(2, {
      type: PLAY_TRACK,
      payload: true
    })
  });


  it('loads first track when selected track is last one', () => {
    const tracks = [
      { id: 1, preview_url: 'audio_url' },
      { id: 2, preview_url: 'audio_url' }
    ];
    const { invoke, store } = create({
      getState: jest.fn(() => ({
        trackSelected: tracks[1],
        tracks: tracks
      })),
      dispatch: jest.fn()
    });

    const action = { type: PLAY_NEXT_TRACK };
    invoke(action);
    expect(store.dispatch).toHaveBeenNthCalledWith(1, {
      type: SELECT_TRACK,
      track: tracks[0]
    });
    expect(store.dispatch).toHaveBeenNthCalledWith(2, {
      type: PLAY_TRACK,
      payload: true
    })
  });
});
