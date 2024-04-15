import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Suspense, useEffect } from 'react';
import router from '@/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useUserStore from '@zustand/store';

// react-query 사용
const queryClient = new QueryClient();

function App() {
  const { setProducts, setCartProducts } = useUserStore();

  useEffect(() => {
    console.log('APP JS');
    setProducts();
    setCartProducts();
  }, []);

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
