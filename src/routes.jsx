import Layout from '@components/layout/Index';
import Mainpage from '@pages/Mainpage';
// import About from '@pages/About'; <--- TODO: 만들어야하는 페이지
import MagazineList from '@pages/magazine/MagazineList';
import MagazineDetail from '@pages/magazine/MagazineDetail';
import MarketList from '@pages/market/MarketList';
import MarketDetail from '@pages/market/MarketDetail';
import Login from '@pages/Login';
import SignUp from '@pages/SignUp';
// import UserInfo from '@pages/UserInfo';
// import SellerInfo from '@pages/SellerInfo';
import Cart from '@pages/Cart';
import UserMypageHeader from '@pages/mypage/user/UserMypageHeader';
import UserOrderList from '@pages/mypage/user/UserOrderList';
import UserOrderListItem from '@pages/mypage/user/UserOrderListItem';

// import SellerInfoEdit from '@pages/SellerInfoEdit';

/* TODO: 만들어야하는 페이지 */
// import ErrorPage from '@pages/ErrorPage';
// import Search from '@pages/Search';

import UserInfoEdit from '@pages/UserInfoEdit';
import { createBrowserRouter } from 'react-router-dom';
import UserWishList from '@pages/mypage/user/UserWishList';

const router = createBrowserRouter([
  {
    path: '/',
    // errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Mainpage />,
      },
      {
        // path: "about",
        // element: <About />
      },
      {
        path: 'magazine',
        element: <MagazineList />,
      },
      {
        path: 'magazine/detail',
        element: <MagazineDetail />,
      },
      {
        path: 'market',
        element: <MarketList />,
      },
      {
        path: 'market/detail',
        element: <MarketDetail />,
      },
      {
        path: 'user/login',
        element: <Login />,
      },
      {
        path: 'user/signup',
        element: <SignUp />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'mapage',
        element: <UserMypageHeader />,
        children: [
          {
            index: true,
            element: <UserOrderList />,
          },
          {
            index: false,
            path: 'wishlist',
            element: <UserWishList />,
          },
        ],
      },
    ],
  },
]);

export default router;
