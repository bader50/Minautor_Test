import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostListModel, PostModel } from "../../../api/models/PostModel";
import type { RootState } from "../../store";

// Define a type for the slice state

// Define the initial state using that type
const initialState: PostListModel = [];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    updatePosts: (state, action: PayloadAction<PostListModel>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { updatePosts } = postsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPosts = (state: RootState) => state.posts;

export default postsSlice.reducer;
