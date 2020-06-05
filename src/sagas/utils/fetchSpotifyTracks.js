import spotify from '../../api/spotify';

export default async (userSavedTracks = [])  => {
  let spotifyTracks = [];
  if(userSavedTracks.length === 0) return spotifyTracks;

  const response = await spotify.get('/tracks', {
    params: {
      ids: userSavedTracks.map(item => item.track_id).join(',')
    }
  });
  if(response.status === 200) {
    spotifyTracks = response.data.tracks;
  } else {
    console.warn('Can not fetch user tracks from spotify!');
  }
  return spotifyTracks;
};
