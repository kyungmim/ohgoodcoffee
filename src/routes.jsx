import Layout from '@components/layout/Index';
import ErrorPage from '@pages/ErrorPage';
import Mainpage from '@pages/Mainpage';
import About from '@pages/About';
import MagazineList from '@pages/magazine/MagazineList';
import MagazineDetail from '@pages/magazine/MagazineDetail';
import MarketList from '@pages/market/MarketList';
import MarketDetail from '@pages/market/MarketDetail';
import Login from '@pages/Login';
import SignUp from '@pages/SignUp';
import Cart from '@pages/Cart';
import UserMypageHeader from '@pages/mypage/user/UserMypageHeader';
import UserOrderList from '@pages/mypage/user/UserOrderList';
import UserReviewList from '@pages/mypage/user/UserReviewList';
import UserWishList from '@pages/mypage/user/UserWishList';
import UserInfo from '@pages/mypage/user/UserInfo';
import SellerMyPageHeader from '@pages/mypage/seller/SellerMyPageHeader';
import SellerSalesList from '@pages/mypage/seller/SellerSalesList';
import SellerUploadProduct from '@pages/mypage/seller/SellerUploadProduct';
import SellerInfo from '@pages/mypage/seller/SellerInfo';

/* TODO: 만들어야하는 페이지 */
// import Search from '@pages/Search';
// import Search from '@pages/SearchList';

import { createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Mainpage />,
      },
      {
        path: 'mainpage',
        element: <Mainpage />,
      },
      {
        path: 'about',
        element: <About />,
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
        path: 'users/login',
        element: <Login />,
      },
      {
        path: 'users/signup',
        element: <SignUp />,
      },
      {
        path: 'carts',
        element: <Cart />,
      },
      {
        path: 'mypage',
        element: <UserMypageHeader />,
        children: [
          {
            index: true,
            element: <UserOrderList />,
          },
          {
            path: 'review',
            element: <UserReviewList />,
          },
          {
            path: 'wishlist',
            element: <UserWishList />,
          },
          {
            path: 'userinfo',
            element: <UserInfo />,
          },
        ],
      },
      {
        path: 'seller/mypage',
        element: <SellerMyPageHeader />,
        children: [
          {
            index: true,
            element: <SellerSalesList />,
          },
          {
            path: 'upload',
            element: <SellerUploadProduct />,
          },
          {
            path: 'sellerinfo',
            element: <SellerInfo />,
          },
        ],
      },
    ],
  },
]);

export default router;
