import arrow from '@public/dropup_icon.svg';
import PropTypes from 'prop-types';
import useUserStore from '@zustand/store';
import UserOrderProductItem from '@pages/mypage/user/UserOrderProductItem';

UserOrderListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function UserOrderListItem({ item }) {
  console.log(item);
  const { user } = useUserStore();

  const productsList = item.products.map((product) => <UserOrderProductItem key={product._id} product={item.products[0]} />);

  return (
    <>
      <div className="order-list">
        {productsList}
        {/* <!-- 아래부터 아코디언으로 오픈 예정 --> */}
        {/* <div className="order-main-item-price">{item.cost.shippingFees}원</div>
        <div className="order-main-item-status">주문완료</div> */}
        <div className="Accordion_wrap">
          <div className="order-detail">
            <div className="order-detail-title">구매자 정보</div>
            <div className="order-detail-list">
              <div className="order-detail-items">
                <p className="order-detail-item">주문자</p>
                <p>{user.name}</p>
              </div>
              <div className="order-detail-items">
                <p className="order-detail-item">연락처</p>
                <p>{user.phone}</p>
              </div>
              <div className="order-detail-items">
                <p className="order-detail-item">이메일</p>
                <p>{user.email}</p>
              </div>
            </div>
            <div className="order-detail-title">배송지 정보</div>
            <div className="order-detail-list">
              <div className="order-detail-items">
                <p className="order-detail-item">수령인</p>
                <p>{item.address.name}</p>
              </div>
              <div className="order-detail-items">
                <p className="order-detail-item">연락처</p>
                <p>{item.address.phone}</p>
              </div>
              <div className="order-detail-items">
                <p className="order-detail-item">배송지</p>
                <p>{item.address.value}</p>
              </div>
            </div>
          </div>
          <div className="order-footer">
            <div className="order-footer-title">주문 금액 상세</div>
            <div className="order-detail-list">
              <div className="order-footer-items">
                <p className="order-footer-item">주문 금액</p>
                <p className="order-footer-item type_big">{item.cost.total}원</p>
              </div>
              <div className="order-footer-items">
                <p className="order-detail-item type_gray">상품 금액</p>
                <p>{item.cost.products}원</p>
              </div>
              <div className="order-footer-items">
                <p className="order-detail-item type_gray">배송비</p>
                <p>{item.cost.shippingFees}원</p>
              </div>
            </div>
          </div>
          <div className="order-detail-close">
            <img src={arrow} alt="디테일 페이지 접기 화살표" />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserOrderListItem;
