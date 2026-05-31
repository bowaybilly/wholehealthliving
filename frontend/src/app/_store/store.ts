import { configureStore } from "@reduxjs/toolkit";
import { practitionerSearchReducer } from "../_features/find-a-practitioner";
import { errorReportingMiddleware } from "@/infrastructure/error-reporting";

export const makeStore = () =>
  configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(errorReportingMiddleware),
    reducer: {
      practitionerSearch: practitionerSearchReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
