import { useCallback, useInsertionEffect, useRef } from "react";

/** Returns a stable function identity that always calls the latest callback. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useCallbackRef<T extends (...args: any[]) => any>(cb: T): T {
  const ref = useRef(cb);
  useInsertionEffect(() => {
    ref.current = cb;
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(((...args) => ref.current(...args)) as T, []);
}
