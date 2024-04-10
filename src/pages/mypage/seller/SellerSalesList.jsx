import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import SellerMyPageHeader from '@pages/mypage/seller/SellerMyPageHeader';
import SellerSalesListItem from '@pages/mypage/seller/SellerSalesListItem';

function SellerSalesList() {
  return (
    <>
      <Header />
      <SellerMyPageHeader />
      <SellerSalesListItem />
      <Footer />
    </>
  );
}

export default SellerSalesList;
