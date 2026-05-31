"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";
import { ErrorState } from "@/design-system";
import { reportError } from "./reporter";

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    reportError(error, {
      componentStack: info.componentStack ?? undefined,
      source: "react-error-boundary",
    }, "fatal");
  }

  reset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <ErrorState onAction={this.reset} />;
    }

    return this.props.children;
  }
}
