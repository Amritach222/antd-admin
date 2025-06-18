import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashboardLayout from "./layouts/DashboardLayout";
import { ConfigProvider } from "antd";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 1000 * 60 * 5, // 5 minutes
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#6b21a8", // Changed to purple
            borderRadius: 2,

            // Alias Token
            colorBgContainer: "#f5f3ff", // Light purple background
          },
        }}
      >
        <DashboardLayout />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
