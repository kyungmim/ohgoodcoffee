import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';
import router from '@/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// react-query 사용
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;
