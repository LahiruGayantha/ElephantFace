import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  authSuccess: false,
  firstName: "",
  lastName: "",
  email: "",
  id: "",
  type: "",
};

export const userWorks = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    changeUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.authSuccess = action.payload.authSuccess;
      state.type = action.payload.type;
      localStorage.setItem("firstName", action.payload.firstName);
      localStorage.setItem("lastName", action.payload.lastName);
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("id", action.payload.id);
      localStorage.setItem("authSuccess", action.payload.authSuccess);
      localStorage.setItem("type", action.payload.type);
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeUser } = userWorks.actions;

export default userWorks.reducer;
