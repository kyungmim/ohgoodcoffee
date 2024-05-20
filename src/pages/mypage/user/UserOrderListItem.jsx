import PropTypes from 'prop-types';
import UserOrderProductItem from '@pages/mypage/user/UserOrderProductItem';
import { generateOrderNumber } from '@utils/date';
import Loading from '@components/Loading';

UserOrderListItem.propTypes = {
  item: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function UserOrderListItem({ item, isLoading }) {
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
          <div className="order-list">{isLoading ? <Loading /> : <UserOrderProductItem item={item} isLoading={isLoading} />}</div>
          {/* 아코디언이 펼쳐진 상태일 때만 아래 내용을 렌더링 */}
        </div>
      </div>
    </>
  );
}

export default UserOrderListItem;
