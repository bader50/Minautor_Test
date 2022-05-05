import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserListModel, UserModel } from "../../../api/models/UserModel";
import type { RootState } from "../../store";

const initialState: UserListModel = [];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserModel>) => {
      const [oldUser] = state.filter((user) => user.id === action.payload.id);
      const index = state.indexOf(oldUser);
      if (index !== -1) {
        state[index] = action.payload;
      }
      return state;
    },
    updateAllUserList: (state, action: PayloadAction<UserListModel>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { updateUser, updateAllUserList } = usersSlice.actions;

//get all users
export const selectUsers = (state: RootState) => state.users;

//get a user by id
export const selectUser = (state: RootState, id: number) => {
  const [user] = state.users.filter((user) => user.id === id);
  return user;
};

export default usersSlice.reducer;
