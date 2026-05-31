import type { Middleware } from "@reduxjs/toolkit";
import { reportError } from "./reporter";

export const errorReportingMiddleware: Middleware = () => (next) => (action) => {
  try {
    return next(action);
  } catch (error) {
    reportError(error, {
      metadata: { action },
      source: "redux-middleware",
    }, "fatal");

    throw error;
  }
};
