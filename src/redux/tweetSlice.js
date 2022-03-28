import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tweets: [],
  savedTweets: [],
};

export const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    // Use the PayloadAction type to declare the contents of `action.payload`
    setTweets: (state, action) => {
      state.tweets = action.payload;
    },
    setSavedTweets: (state, action) => {
      state.savedTweets = action.payload;
    },
  },
});

export const { setTweets, setSavedTweets } = tweetSlice.actions;

export const selectTweet = (state) => state.tweet.tweets;
export const selectSavedTweet = (state) => state.tweet.savedTweets;

export const searchTweet = (query) => async (dispatch) => {
  if(query) {
    const url = `http://localhost:8000/${query}`;
  try {
    const response = await axios.get(url);
    dispatch(setTweets(response.data));
  } catch (err) {
    console.log(err);
  }
  }
};

export default tweetSlice.reducer;
