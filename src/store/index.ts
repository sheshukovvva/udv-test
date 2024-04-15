import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reduser";
import { createApi } from "../services/api";

const api = createApi();

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument:api,
      }
    })
})