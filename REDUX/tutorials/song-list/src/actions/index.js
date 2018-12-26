//action creator

export const selectSong = song => {
  //return an action
  return {
    type: "SONG_SELECTED",
    //PAYLOAD SPECIFIES WHAT SONG WE ARE GOING TO SELECT, PASS IN THE SONG WE ARE TRYING TO SELECT AS AN ARGUMENT TO THE ACTION CREATOR
    payload: song
  };
};

//named export which exports many functions from one file, defualt only exports one function
