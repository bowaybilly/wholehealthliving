import type { ErrorContext, ErrorReport, ErrorSeverity } from "./types";

function getMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;

  try {
    return JSON.stringify(error);
  } catch {
    return "Unknown error";
  }
}

export function createErrorReport(
  error: unknown,
  context?: ErrorContext,
  severity: ErrorSeverity = "error",
): ErrorReport {
  return {
    context,
    message: getMessage(error),
    name: error instanceof Error ? error.name : undefined,
    severity,
    stack: error instanceof Error ? error.stack : undefined,
    timestamp: new Date().toISOString(),
    userAgent: typeof navigator === "undefined" ? undefined : navigator.userAgent,
  };
}
