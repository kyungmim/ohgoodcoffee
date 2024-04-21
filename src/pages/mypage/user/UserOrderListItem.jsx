import PropTypes from 'prop-types';
import UserOrderProductItem from '@pages/mypage/user/UserOrderProductItem';

UserOrderListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function UserOrderListItem({ item }) {
  const productsList = item.products.map((product) => <UserOrderProductItem key={product._id} product={item.products[0]} item={item} />);

  return (
    <>
      <div className="accordion-item">
        <div className="accordion-header">
          <div className="order-item-container">
            <div className="order-header">
              <p>주문번호</p>
              <p className="order-number">20240404123456</p>
            </div>
            <div className="order-header">
              <p className="order-date">주문일자 2024-04-04</p>
            </div>
          </div>
          <div className="order-list">{productsList}</div>
          {/* 아코디언이 펼쳐진 상태일 때만 아래 내용을 렌더링 */}
        </div>
      </div>
    </>
  );
}

export default UserOrderListItem;
