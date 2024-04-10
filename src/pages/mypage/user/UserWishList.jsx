import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import UserMypageHeader from '@pages/mypage/user/UserMypageHeader';
import UserWishListItem from '@pages/mypage/user/UserWishListItem';

function UserWishList() {
  return (
    <>
      <Header />
      <UserMypageHeader />
      <UserWishListItem />
      <Footer />
    </>
  );
}

export default UserWishList;
