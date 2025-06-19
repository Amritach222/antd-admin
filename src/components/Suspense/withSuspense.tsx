import { type ComponentType } from "react";
import SuspenseWrapper from "./SuspenseWrapper";
import LoadingFallback from "./LoadingFallback";

interface WithSuspenseOptions {
  loadingMessage?: string;
  fullHeight?: boolean;
  size?: "small" | "default" | "large";
}

/**
 * Higher-order component that wraps a lazy-loaded component with SuspenseWrapper
 *
 * @param Component - The lazy-loaded component to wrap
 * @param options - Configuration options for the loading state
 * @returns A component wrapped with Suspense and a loading fallback
 */
const withSuspense = <P extends object>(
  Component: ComponentType<P>,
  options: WithSuspenseOptions = {}
) => {
  const {
    loadingMessage = "Loading...",
    fullHeight = true,
    size = "default",
  } = options;

  const WithSuspenseComponent = (props: P) => (
    <SuspenseWrapper
      fallback={
        <LoadingFallback
          message={loadingMessage}
          fullHeight={fullHeight}
          size={size}
        />
      }
    >
      <Component {...props} />
    </SuspenseWrapper>
  );

  // Set displayName for better debugging
  const displayName = Component.displayName || Component.name || "Component";
  WithSuspenseComponent.displayName = `withSuspense(${displayName})`;

  return WithSuspenseComponent;
};

export default withSuspense;
