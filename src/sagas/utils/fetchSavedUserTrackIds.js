import server from '../../api/server';

export default (userId, trackIds = []) => {
  if(userId !== null) {
    return server.get('tracks', {
      params: {
        user_id: userId,
        track_id: trackIds
      }
    }).then(response => {
      return response.data.map(item => item.track_id)
    })
  } else {
    // load tracks from local storage
    return Promise.resolve([]);
  }
};
