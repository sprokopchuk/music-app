import audioMiddleware from '../audioMiddleware';
import { PAUSE_TRACK, PLAY_TRACK } from '../../actions';

const mockStore = {
  getState: jest.fn(() => ({ trackSelected: { preview_url: 'audio_url' } })),
  dispatch: jest.fn()
};

const create = (store) => {

  const next = jest.fn();

  const invoke = action => audioMiddleware(store)(next)(action);

  return { store, next, invoke }
};

describe('audioMiddleware', () => {
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
});
