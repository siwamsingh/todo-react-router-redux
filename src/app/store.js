import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/counter/todoSlice";

  const store =  configureStore({
    reducer: {
      todo: todoReducer,
    },
});

export default store;