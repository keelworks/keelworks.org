import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenText1: false,
  isOpenText2: false,
  isOpenText3: false,
  isOpenYoutube: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    text1: (state) => {
      state.isOpenText1 = !state.isOpenText1;
    },
    text2: (state) => {
      state.isOpenText2 = !state.isOpenText2;
    },
    text3: (state) => {
      state.isOpenText3 = !state.isOpenText3;
    },
    taggleYoutube: (state, { payload }) => {
      state.isOpenYoutube = payload;
    },
  },
});

export const { text1, text2, text3, taggleYoutube } = homeSlice.actions;
export default homeSlice.reducer;
