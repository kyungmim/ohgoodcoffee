import SellerUploadProduct from '@pages/mypage/seller/SellerUploadProduct';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SellerUploadProduct />,
  },
]);

export default router;
