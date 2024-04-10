// import Layout from '@components/layout/Index';
// import Login from '@pages/Login';
// import SignUp from '@pages/SignUp';
// import UserInfo from '@pages/UserInfo';
// import SellerInfo from '@pages/SellerInfo';
// import Cart from '@pages/Cart';
// import Mainpage from '@pages/Mainpage';
// import SellerInfoEdit from '@pages/SellerInfoEdit';
import UserInfoEdit from '@pages/UserInfoEdit';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserInfoEdit />,
  },
]);

export default router;
