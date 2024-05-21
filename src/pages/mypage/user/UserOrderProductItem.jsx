import PropTypes from 'prop-types';
import arrow from '@assets/dropup_icon.svg';
import { useState } from 'react';
import styles from '@pages/mypage/user/UserMypage.module.css';

UserOrderProductItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function UserOrderProductItem({ item }) {
  const [itemInfo, setItemInfo] = useState(false);
  const products = item?.products[0];
  const cost = item?.cost;
  const info = item?.address;

  const handleClick = () => {
    setItemInfo(!itemInfo);
  };

  return (
    <>
      <button className={styles.orderMain} onClick={handleClick}>
        <div className={styles.orderMainItemTitle}>
          <img src={`${import.meta.env.VITE_API_SERVER}${products.image.path}`} alt={item.products.name} />
        </div>
        <div className={styles.orderMainItemDesc}>
          <div className={styles.orderMainItem}>
            <p>{item.products[0].name}</p>
            <p>
              {products.price.toLocaleString('ko-KR')}원 / {products.quantity}개
            </p>
          </div>
          <div className={styles.orderMainItemStatus}>주문완료</div>
        </div>
      </button>
      {itemInfo && (
        <div className={styles.accordionContents}>
          <div className={styles.orderDetail}>
            <div className={styles.orderDetailTitle}>구매자 정보</div>
            <div className={styles.orderDetailList}>
              <div className={styles.orderDetailItems}>
                <p className={styles.orderDetailItem}>주문자</p>
                <p>{info.userName}</p>
              </div>
              <div className={styles.orderDetailItems}>
                <p className={styles.orderDetailItem}>연락처</p>
                <p>{info.phone}</p>
              </div>
            </div>
            <div className={styles.orderDetailTitle}>배송지 정보</div>
            <div className={styles.orderDetailList}>
              <div className={styles.orderDetailItems}>
                <p className={styles.orderDetailItem}>수령인</p>
                <p>{info.userName}</p>
              </div>
              <div className={styles.orderDetailItems}>
                <p className={styles.orderDetailItem}>연락처</p>
                <p>{info.phone}</p>
              </div>
              <div className={styles.orderDetailItems}>
                <p className={styles.orderDetailItem}>배송지</p>
                <p>
                  {info.value} / {info.address}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.orderFooter}>
            <div className={styles.orderFooterTitle}>주문 금액 상세</div>
            <div className={styles.orderDetailList}>
              <div className={styles.orderFooterItems}>
                <p className={styles.orderFooterItem}>주문 금액</p>
                <p className={`${styles.orderFooterItem} ${styles.typeBig}`}>{cost.total.toLocaleString('ko-KR')}원</p>
              </div>
              <div className={styles.orderFooterItems}>
                <p className={`${styles.orderDetailItem} ${styles.typeGray}`}>상품 금액</p>
                <p>{cost.products.toLocaleString('ko-KR')}원</p>
              </div>
              <div className={styles.orderFooterItems}>
                <p className={`${styles.orderDetailItem} ${styles.typeGray}`}>배송비</p>
                <p>{cost.shippingFees.toLocaleString('ko-KR')}원</p>
              </div>
            </div>
          </div>
          <button className={styles.orderDetailClose} onClick={handleClick}>
            <img src={arrow} alt="디테일 페이지 접기 화살표" />
          </button>
        </div>
      )}
    </>
  );
}

export default UserOrderProductItem;
