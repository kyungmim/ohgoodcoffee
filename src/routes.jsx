import UserWishList from '@pages/mypage/user/UserWishList';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserWishList />,
  },
]);

export default router;
