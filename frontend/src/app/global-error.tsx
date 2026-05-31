"use client";

import { useEffect } from "react";
import { ErrorState } from "@/design-system";
import { reportError } from "@/infrastructure/error-reporting";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    reportError(error, {
      metadata: { digest: error.digest },
      source: "next-global-error",
    }, "fatal");
  }, [error]);

  return (
    <html lang="en">
      <body>
        <ErrorState
          title="Something went wrong"
          message="We could not load this page. Please try again."
          onAction={reset}
        />
      </body>
    </html>
  );
}
