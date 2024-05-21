import PropTypes from 'prop-types';
import UserOrderProductItem from '@pages/mypage/user/UserOrderProductItem';
import { generateOrderNumber } from '@utils/date';
import Loading from '@components/Loading';
import styles from '@pages/mypage/user/UserMypage.module.css';

UserOrderListItem.propTypes = {
  item: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function UserOrderListItem({ item, isLoading }) {
  const orderNumber = generateOrderNumber(item);

  return (
    <>
      <div className={styles.accordionItem}>
        <div className={styles.accordionHeader}>
          <div className={styles.orderItemContainer}>
            <div className={styles.orderHeader}>
              <p>주문번호</p>
              <p className={styles.orderNumber}>{orderNumber}</p>
            </div>
            <div className={styles.orderHeader}>
              <p className={styles.orderDate}>주문일자 {item.createdAt.split(' ')[0].replace(/\./g, '-')}</p>
            </div>
          </div>
          <div className={styles.orderList}>{isLoading ? <Loading /> : <UserOrderProductItem item={item} isLoading={isLoading} />}</div>
          {/* 아코디언이 펼쳐진 상태일 때만 아래 내용을 렌더링 */}
        </div>
      </div>
    </>
  );
}

export default UserOrderListItem;
