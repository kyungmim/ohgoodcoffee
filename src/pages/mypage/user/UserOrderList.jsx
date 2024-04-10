import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import UserMypageHeader from '@pages/mypage/user/UserMypageHeader';
import UserOrderListItem from '@pages/mypage/user/UserOrderListItem';

function UserOrderList() {
  return (
    <>
      <Header />
      <UserMypageHeader />
      <UserOrderListItem />
      <Footer />
    </>
  );
}

export default UserOrderList;
