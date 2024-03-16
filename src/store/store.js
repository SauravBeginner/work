import { configureStore } from "@reduxjs/toolkit";

import sidebarReducer from "../redux/sidebarSlice";
import authReducer from "../redux/authSlice";
import documentReducer from "../redux/documentSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    auth: authReducer,
    documents: documentReducer,
  },
});

export default store;
