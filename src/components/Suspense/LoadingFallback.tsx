import { Spin } from "antd";
import "./suspense.css";

interface LoadingFallbackProps {
  message?: string;
  size?: "small" | "default" | "large";
  fullHeight?: boolean;
}

/**
 * A customizable loading fallback component for use with Suspense
 */
const LoadingFallback = ({
  message = "Loading...",
  size = "default",
  fullHeight = true,
}: LoadingFallbackProps) => {
  return (
    <div
      className="suspense-loading-container"
      style={{ minHeight: fullHeight ? "100vh" : "300px" }}
    >
      <Spin tip={message} size={size} />
    </div>
  );
};

export default LoadingFallback;
