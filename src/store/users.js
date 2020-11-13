import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "users",
  initialState: [{ name: "Bob" }],
  reducers: {
    usersReceived: (users, action) => {
      console.log(users, action);
      users = action.payload;
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
