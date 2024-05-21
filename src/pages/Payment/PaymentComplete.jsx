import { useLocation, useNavigate } from 'react-router-dom';
import { generateOrderNumber, formatPhoneNumber } from '@utils/date';
import styles from '@pages/payment/Payment.module.css';

function PaymentComplete() {
  const location = useLocation();
  const navigate = useNavigate();
  const orderResponse = location.state?.orderResponse.item;

  const orderNumber = generateOrderNumber(orderResponse);
  const orderdateParser = orderResponse.createdAt.split(' ')[0].replace(/\./g, '-');

  return (
    <>
      <div className={styles.container}>
        <div className={styles.l_wrapper}>
          <div className={styles.completeContainer}>
            <div className={styles.completeHeader}>
              <h1 className={styles.completeTitle}>주문완료</h1>
              <p className={styles.completeDesc}>주문해주셔서 감사합니다. :)</p>
            </div>
            <div className={styles.completeMain}>
              <div className={styles.paymentForm}>
                <div className={styles.paymentTitle}>총 결제 금액</div>
                <div>
                  <p className={`${styles.paymentFormInner} ${styles.with_paddingbottom}`}>카드결제</p>
                  <p className={`${styles.paymentFormInner} ${styles.typeGray} ${styles.with_paddingbottom}`}>결제 일시 - {orderdateParser}</p>
                  <p className={styles.paymentFormInner}>{orderResponse.cost.total.toLocaleString('ko-KR')}원</p>
                </div>
              </div>
              <div className={styles.paymentForm}>
                <p className={styles.paymentTitle}>주문번호</p>
                <p>{orderNumber}</p>
              </div>
              <div className={styles.paymentForm}>
                <div className={styles.paymentTitle}>배송지</div>
                <div>
                  <p className={`${styles.paymentFormInner} ${styles.with_paddingbottom}`}>{orderResponse.address.userName}</p>
                  <p className={`${styles.paymentFormInner} ${styles.with_paddingbottom}`}>{formatPhoneNumber(orderResponse.address.phone)}</p>
                  <p className={`${styles.paymentFormInner} ${styles.with_paddingbottom}`}>{orderResponse.address.address}</p>
                  <p className={`${styles.paymentFormInner} ${styles.with_paddingbottom}`}>조심히 배달해주세요!</p>
                </div>
              </div>
              <div className={styles.paymentForm}>
                <p className={styles.paymentTitle}>배송 방법</p>
                <p>택배</p>
              </div>
            </div>
            <div className={styles.paymentFormBottom}>
              <button className={`${styles.button} ${styles.buttonLarge} ${styles.btnFill}`} type="submit" onClick={() => navigate('/mypage')}>
                주문 상세 보기
              </button>
              <button className={`${styles.button} ${styles.buttonLarge} ${styles.btnNull}`} type="button" onClick={() => navigate('/')}>
                홈페이지
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentComplete;
