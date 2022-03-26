import { configureStore } from '@reduxjs/toolkit'
import tweetReducer from './tweetSlice'

export const store = configureStore({
  reducer: {
      tweet: tweetReducer
  },
})