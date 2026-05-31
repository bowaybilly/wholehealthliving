"use client";

import { useEffect, type ReactNode } from "react";
import { ErrorBoundary } from "./error-boundary";
import { reportError } from "./reporter";

type ErrorReportingProviderProps = {
  children: ReactNode;
};

export function ErrorReportingProvider({ children }: ErrorReportingProviderProps) {
  useEffect(() => {
    function onError(event: ErrorEvent) {
      reportError(event.error ?? event.message, { source: "window.error" }, "fatal");
    }

    function onUnhandledRejection(event: PromiseRejectionEvent) {
      reportError(event.reason, { source: "window.unhandledrejection" }, "error");
    }

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onUnhandledRejection);

    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
    };
  }, []);

  return <ErrorBoundary>{children}</ErrorBoundary>;
}
