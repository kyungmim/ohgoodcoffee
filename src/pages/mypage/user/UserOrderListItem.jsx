import PropTypes from 'prop-types';
import UserOrderProductItem from '@pages/mypage/user/UserOrderProductItem';
import { generateOrderNumber } from '@utils/date';

UserOrderListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function UserOrderListItem({ item }) {
  const productsList = item.products.map((product) => <UserOrderProductItem key={product._id} product={item.products[0]} item={item} />);

  const orderNumber = generateOrderNumber(item);

  return (
    <>
      <div className="accordion-item">
        <div className="accordion-header">
          <div className="order-item-container">
            <div className="order-header">
              <p>주문번호</p>
              <p className="order-number">{orderNumber}</p>
            </div>
            <div className="order-header">
              <p className="order-date">주문일자 {item.createdAt.split(' ')[0].replace(/\./g, '-')}</p>
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
