import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import IndexRoute from "./routes";

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
            // borderRadius: 5,

            // Alias Token
            colorBgContainer: "#f5f3ff", // Light purple background
          },
        }}
      >
        <IndexRoute />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
