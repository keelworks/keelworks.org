import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenAskedQuestions: [false, false, false, false, false],
};

const faqSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    askedQuestions: (state, action) => {
      state.isOpenAskedQuestions = state.isOpenAskedQuestions.map(
        (value, index) => (index === action.payload ? !value : false)
      );
    },
  },
});

export const { askedQuestions } = faqSlice.actions;
export default faqSlice.reducer;
