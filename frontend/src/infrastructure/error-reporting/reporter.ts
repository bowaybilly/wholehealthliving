import { createErrorReport } from "./normalize-error";
import type { ErrorContext, ErrorReport, ErrorSeverity } from "./types";

const reportingEndpoint = process.env.NEXT_PUBLIC_ERROR_REPORTING_ENDPOINT;

function sendWithBeacon(report: ErrorReport): boolean {
  if (typeof navigator === "undefined" || !navigator.sendBeacon || !reportingEndpoint) {
    return false;
  }

  return navigator.sendBeacon(
    reportingEndpoint,
    new Blob([JSON.stringify(report)], { type: "application/json" }),
  );
}

async function sendWithFetch(report: ErrorReport) {
  if (!reportingEndpoint) return;

  await fetch(reportingEndpoint, {
    body: JSON.stringify(report),
    headers: { "Content-Type": "application/json" },
    keepalive: true,
    method: "POST",
  });
}

export function reportError(error: unknown, context?: ErrorContext, severity: ErrorSeverity = "error") {
  const report = createErrorReport(error, context, severity);

  if (process.env.NODE_ENV !== "production") {
    console.error("[error-reporting]", report);
  }

  if (sendWithBeacon(report)) return;

  void sendWithFetch(report).catch((reportingError) => {
    if (process.env.NODE_ENV !== "production") {
      console.error("[error-reporting] failed to send report", reportingError);
    }
  });
}
