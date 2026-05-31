"use client";

import { useMemo } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./store";

type ReduxProviderProps = {
  children: React.ReactNode;
};

export function ReduxProvider({ children }: ReduxProviderProps) {
  const store = useMemo(() => makeStore(), []);

  return <Provider store={store}>{children}</Provider>;
}
