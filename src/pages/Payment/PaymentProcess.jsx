import masterIcon from '@assets/mastercard.webp';
import plus from '@assets/plus.svg';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useUserStore from '@zustand/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatPhoneNumber } from '@utils/date';
import { useEffect, useState } from 'react';
import useModalStore from '@zustand/useModalStore.mjs';
import CardModal from '@pages/payment/CardModal';
import styles from '@pages/payment/Payment.module.css';

function PaymentProcess() {
  const axios = useCustomAxios();
  const { user, setCartCount } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();
  const { from, selectedCartItem, productDetails, orderPrice, _id, productQuantity, item } = location.state || {};
  const [items, setItems] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [productPrice, setProductPrice] = useState(0);
  const [shippingFees, setShippingFees] = useState(3000);
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = useModalStore((state) => state.openModal);

  const handleAddNewCard = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCardSubmit = (cardData) => {
    // 카드 데이터 처리 로직 (예: 서버에 저장)
    console.log('Card Data:', cardData);
  };

  useEffect(() => {
    if (orderPrice >= 50000) {
      setShippingFees(0);
    } else {
      setShippingFees(3000);
    }
  }, [productPrice]);

  useEffect(() => {
    if (from === 'cartlist' && selectedCartItem) {
      const result = items.reduce((acc, obj) => {
        if (selectedCartItem.includes(obj._id)) {
          acc.push(obj);
        }
        return acc;
      }, []);
      setOrderItems(result);
    } else if (from === 'marketdetail' && item) {
      setOrderItems([
        {
          product: {
            ...item,
            image: { name: item.mainImages[0].name },
          },
          quantity: productQuantity,
        },
      ]);
    }
  }, [items, selectedCartItem, from, _id, productQuantity]);

  useEffect(() => {
    if (from === 'marketdetail' && item) {
      setProductPrice(item.price * productQuantity);
    } else if (from === 'cartlist' && orderItems.length > 0) {
      const totalPrice = orderItems.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);
      setProductPrice(totalPrice);
    }
  }, [orderItems, from, item, productQuantity]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const cartResponse = await axios.get('/carts');
      await setItems(cartResponse.data.item);
    } catch (err) {
      console.log(err.response?.data.message);
    }
  };

  const fetchCartCountAndUpdate = async () => {
    try {
      const response = await axios.get('/carts');
      const totalQuantity = response.data.item.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(totalQuantity);
    } catch (error) {
      console.error('Error fetching cart count:', error);
    }
  };

  const handleSubmitOrder = async () => {
    const orderForm =
      from === 'cartlist'
        ? {
            type: 'cart',
            products: productDetails,
            address: {
              userName: user.name,
              phone: user.phone,
              address: user.address,
            },
          }
        : {
            products: [{ _id: Number(_id), quantity: productQuantity }],
            address: {
              userName: user.name,
              phone: user.phone,
              address: user.address,
            },
          };

    try {
      openModal({
        content: `선택한 결제방법으로 결제 진행하시겠습니까?`,
        callbackButton: {
          확인: async () => {
            const response = await axios.post('/orders', orderForm);
            navigate('/orders', {
              state: { from: location.pathname, orderResponse: response.data },
            });
            fetchCartCountAndUpdate();
          },
          취소: '',
        },
      });
    } catch (err) {
      if (err.response?.data.message) {
        openModal({
          content: err.response?.data.message,
          callbackButton: {
            확인: '',
          },
        });
      }
    }
  };

  return (
    <>
      <div className="l_wrapper">
        <div className={styles.processContainer}>
          <div className={styles.userInfoSection}>
            <div className={styles.userInfo}>
              <p className={styles.infoTitle}>배송지 정보</p>
              <div className={styles.infoDetail}>
                <p>{user.name}</p>
                <p>{formatPhoneNumber(user.phone)}</p>
                <p>{user.address}</p>
              </div>
            </div>
            <div className={styles.userInfo}>
              <p className={styles.infoTitle}>결제 방법</p>
              <div className={styles.paymentInfoCard}>
                <div className={styles.cardInfo}>
                  <label>
                    <input type="radio" id="option1" value="option1" checked={selectedOption === 'option1'} />
                  </label>
                  <div className={styles.cardIcon}>
                    <img src={masterIcon} />
                  </div>
                  <div>5409 4700 **** 2000</div>
                </div>
                <div className={styles.addNewCard} onClick={handleAddNewCard}>
                  <div className={styles.plusIcon}>
                    <img src={plus} />
                  </div>
                  <div>카드 추가</div>
                </div>
              </div>
            </div>
            <div className={styles.userInfo}>
              <p className={styles.infoTitle}>상품 리스트</p>
              <div>
                {orderItems.length > 0 ? (
                  <div className={styles.orderItemList}>
                    {orderItems.map((item) => (
                      <div key={item._id} className={styles.orderItem}>
                        <div className={styles.orderItemImg}>
                          <img src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.product.image.name}`} />
                        </div>
                        <div>
                          <p className={styles.orderItemInfo}>{item.product.name}</p>
                          <p className={styles.orderItemInfo}>수량 : {item.quantity} 개</p>
                          <p className={styles.orderItemInfo}>금액 : {(item.product.price * item.quantity).toLocaleString('ko-KR')}원</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className={styles.paymentInfoSection}>
            <div>
              <p className={styles.infoTitle}>결제내역</p>
              <div>
                <div className={styles.orderpriceItem}>
                  <p className={styles.orderpriceItemTitle}>총 상품 금액</p>
                  <p>{productPrice ? productPrice.toLocaleString('ko-KR') : '0'}원</p>
                </div>
                <div className={styles.orderpriceItem}>
                  <p className={styles.orderpriceItemTitle}>배송비</p>
                  <p>{shippingFees > 0 ? shippingFees.toLocaleString('ko-KR') + '원' : 0 + '원'}</p>
                </div>
              </div>
            </div>
            <div className={styles.orderpriceTotal}>
              <p className={styles.orderpriceItemTitle}>총 합계</p>
              <p>{(productPrice + shippingFees).toLocaleString('ko-KR')}원</p>
            </div>
            <button className={`${styles.button} ${styles.buttonLarge} ${styles.btnFill} ${styles.btnLayout}`} onClick={handleSubmitOrder}>
              결제하기
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && <CardModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleCardSubmit} />}
    </>
  );
}

export default PaymentProcess;
