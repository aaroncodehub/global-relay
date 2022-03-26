import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  tweets: null,
  savedTweets: null,
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
  },
});

export const { setTweets } = tweetSlice.actions;

export const selectCount = (state) => state.tweet.tweets;

export default tweetSlice.reducer;
