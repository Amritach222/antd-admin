import { Suspense, type ReactNode } from "react";
import { Spin } from "antd";
import "./suspense.css";

interface SuspenseWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * SuspenseWrapper component that provides loading feedback when navigating between routes
 * or when lazy-loaded components are being loaded.
 */
const SuspenseWrapper = ({ children, fallback }: SuspenseWrapperProps) => {
  // Default loading spinner with customization
  const defaultFallback = (
    <div className="suspense-loading-container">
      <Spin tip="Loading..." />
    </div>
  );

  return <Suspense fallback={fallback || defaultFallback}>{children}</Suspense>;
};

export default SuspenseWrapper;
