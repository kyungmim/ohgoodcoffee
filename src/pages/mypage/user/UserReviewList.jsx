import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import UserMypageHeader from '@pages/mypage/user/UserMypageHeader';
import UserReviewItem from '@pages/mypage/user/UserReviewItem';

function UserReviewList() {
  return (
    <>
      <Header />
      <UserMypageHeader />
      <UserReviewItem />
      <Footer />
    </>
  );
}

export default UserReviewList;
