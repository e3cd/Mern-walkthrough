import { combineReducers } from "redux"; //named export

//no arguments expected in reducer therefore no need to pass in any arguments, dealing with a static array of songs
const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All star", duration: "3:15" },
    { title: "I want it that way", duration: "4:12" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

//combined both reducers
//keys will be the keys that show up in state object
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
