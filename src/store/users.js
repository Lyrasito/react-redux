import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "users",
  initialState: { list: [] },
  reducers: {
    usersReceived: (users, action) => {
      //console.log(action.payload);
      users.list = action.payload;
    },
  },
});
const { usersReceived } = slice.actions;

export const loadUsers = () => (dispatch, getState) => {
  console.log(getState());

  dispatch(
    apiCallBegan({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "get",
      onSuccess: usersReceived.type,
    })
  );
};

export default slice.reducer;
