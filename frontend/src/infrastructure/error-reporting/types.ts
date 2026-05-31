export type ErrorSeverity = "info" | "warning" | "error" | "fatal";

export type ErrorContext = {
  componentStack?: string;
  feature?: string;
  metadata?: Record<string, unknown>;
  source?: string;
};

export type ErrorReport = {
  context?: ErrorContext;
  message: string;
  name?: string;
  severity: ErrorSeverity;
  stack?: string;
  timestamp: string;
  userAgent?: string;
};
