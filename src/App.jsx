import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';
import router from '@/routes';

function App() {
  return (
    <>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
