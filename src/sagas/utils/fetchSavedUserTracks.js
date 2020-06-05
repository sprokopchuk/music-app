import server from '../../api/server';

export default (userId, trackIds = []) => {
  if(userId !== null) {
    return server.get('tracks', {
      params: {
        user_id: userId,
        track_id: trackIds
      }
    }).then(response => response.data)
  } else {
    return Promise.resolve([]);
  }
};
