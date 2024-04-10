// import Layout from '@components/layout/Index';
// import Login from '@pages/Login';
// import SignUp from '@pages/SignUp';
// import UserInfo from '@pages/UserInfo';
// import SellerInfo from '@pages/SellerInfo';
import SellerInfoEdit from '@pages/SellerInfoEdit';
// import UserInfoEdit from '@pages/UserInfoEdit';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SellerInfoEdit />,
  },
]);

export default router;
