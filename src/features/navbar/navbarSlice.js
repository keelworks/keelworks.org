import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenNavBar: false,
};

const navBarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleNavBar: (state) => {
      console.log("chegou");
      state.isOpenNavBar = !state.isOpenNavBar;
    },
  },
});

export const { toggleNavBar } = navBarSlice.actions;
export default navBarSlice.reducer;
