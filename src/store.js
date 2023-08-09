import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./features/home/homeSlice";
import faqReducer from "./features/faq/faqSlice";
import navbarReducer from "./features/navbar/navbarSlice";
import contactReducer from "./features/contact/contactSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    faq: faqReducer,
    navbar: navbarReducer,
    contact: contactReducer,
  },
});
