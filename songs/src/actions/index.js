// Action crator
export const selectSong = song => {
  return {
    // Return and action
    type: 'SONG_SELECTED',
    payload: song
  };
};
