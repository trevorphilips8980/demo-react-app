import NotFound from "@/pages/404/NotFound";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryCache = new QueryCache({
  onError: (error: any) => {
    if (error?.status === 401 || error?.status === 403) {
      localStorage.clear();
    }
  },
});

const mutationCache = new MutationCache({
  onError: (error: any) => {
    if (error?.status === 401) {
      localStorage.clear();
    }

    if (error?.status === 403) {
      <NotFound />;
    }
  },
});

const queryClient = new QueryClient({ queryCache, mutationCache });

const ClientProvider = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ClientProvider;
