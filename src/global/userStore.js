import { createSlice } from "@reduxjs/toolkit";

export const userWorks = createSlice({
  name: "user",
  initialState: {
    authSuccess: false,
    firstName: "",
    lastName: "",
    email: "",
    id: "",
  },
  reducers: {
    changeUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.authSuccess = action.payload.authSuccess;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeUser } = userWorks.actions;

export default userWorks.reducer;
