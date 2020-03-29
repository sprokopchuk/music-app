import audioMiddleware from '../audioMiddleware';
import { PAUSE_TRACK, PLAY_NEXT_TRACK, PLAY_TRACK, SELECT_TRACK } from '../../actions';

const mockStore = {
  getState: jest.fn(() => ({ trackSelected: { preview_url: 'audio_url' } })),
  dispatch: jest.fn()
};

const create = (store) => {

  const next = jest.fn();

  const invoke = action => audioMiddleware(store)(next)(action);

  return { store, next, invoke }
};

it('plays audio when PLAY_TRACK action is dispatched', () => {
  const spy = jest.spyOn(global.Audio.prototype, 'play').mockImplementation(() => {});
  const { invoke } = create(mockStore);
  const action = { type: PLAY_TRACK, payload: true };
  invoke(action);
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});

it('pauses audio when PAUSE_TRACK action is dispatched', () => {
  const spy = jest.spyOn(global.Audio.prototype, 'pause').mockImplementation(() => {});
  const { invoke } = create(mockStore);
  const action = { type: PAUSE_TRACK, payload: false };
  invoke(action);
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});

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


it('plays first track when selected track is last one', () => {
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
