import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashboardLayout from "./layouts/DashboardLayout";

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
      <DashboardLayout />
    </QueryClientProvider>
  );
}

export default App;
