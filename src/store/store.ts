import { configureStore } from '@reduxjs/toolkit'
import questionReducer from './slices/questionsSlice'
import summaryReducer from './slices/summarySlice'

export const store = configureStore({
  reducer: {
    questions: questionReducer,
    summary: summaryReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch