import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  submit: false,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    handleSubmit: (state) => {
      state.submit = true;
      setTimeout(() => {
        state.submit = false;
      }, 2000);
    },
  },
});

export const { handleSubmit } = contactSlice.actions;
export default contactSlice.reducer;
