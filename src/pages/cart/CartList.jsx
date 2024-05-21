import PlusIcon from '@assets/plus.svg';
import EqualIcon from '@assets/equal_icon.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useUserStore from '@zustand/store';
import CartListItem from '@pages/cart/CartListItem';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useModalStore from '@zustand/useModalStore.mjs';
import styles from '@pages/cart/Cart.module.css';

function CartList() {
  const axios = useCustomAxios();
  const { user } = useUserStore();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [selectedCartItem, setSelectedCartItem] = useState([]);
  const [productDetails, setProductDetail] = useState([]);
  const [mainCheck, setMainCheck] = useState(false);
  const openModal = useModalStore((state) => state.openModal);

  const calculateTotalPrice = (itemsToSum) => {
    return itemsToSum.reduce((acc, item) => {
      const itemTotal = item.product.price * item.quantity;
      return acc + itemTotal;
    }, 0);
  };

  const productTotalPrice = calculateTotalPrice(items);

  const [orderPrice, setOrderPrice] = useState(productTotalPrice);
  const [shippingFees, setShippingFees] = useState(3000);

  useEffect(() => {
    setOrderPrice(calculateTotalPrice(items));
  }, [items]);

  useEffect(() => {
    if (selectedCartItem.length > 0) {
      setOrderPrice(calculateTotalPrice(items.filter((item) => selectedCartItem.includes(item._id))));
    } else {
      setOrderPrice(productTotalPrice);
    }
    handleSetOrderItem();
  }, [selectedCartItem, items]);

  useEffect(() => {
    if (orderPrice >= 50000) {
      setShippingFees(0);
    } else {
      setShippingFees(3000);
    }
  }, [orderPrice]);

  const handleSetOrderItem = () => {
    let newCartArr = selectedCartItem
      .map((cartItemId) => {
        const item = items.find((item) => item._id === cartItemId);
        return item
          ? {
              _id: Number(item.product_id),
              quantity: item.quantity,
              price: item.product.price,
            }
          : null;
      })
      .filter((item) => item != null);
    setProductDetail(newCartArr);
  };

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const productsResponse = await axios.get('/carts');
      await setItems(productsResponse.data.item);
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

  const handleDeleteSelectedItems = async () => {
    if (selectedCartItem.length > 0) {
      let cartData = {
        carts: selectedCartItem,
      };
      openModal({
        content: '선택하신 상품들을 장바구니에서 삭제하시겠습니까?',
        callbackButton: {
          확인: async () => {
            await axios.delete('/carts', { data: cartData });
          },
          취소: '',
        },
      });

      const response = await axios.get('/carts');
      if (response.data.item) {
        setItems(response.data.item);
        setSelectedCartItem([]);
      }
    }
  };

  const handleCleanUp = async () => {
    try {
      if (selectedCartItem.length > 0) {
        openModal({
          content: '전체 상품들을 장바구니에서 모두 삭제하시겠습니까?',
          callbackButton: {
            확인: async () => {
              await axios.delete('/carts/cleanup');
            },
            취소: '',
          },
        });
        await fetchData();
      } else {
        openModal({
          content: '삭제할 상품을 선택해주세요 :)',
          callbackButton: {
            확인: '',
          },
        });
      }
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

  const handleSelectAll = () => {
    if (mainCheck) {
      setSelectedCartItem([]);
    } else {
      let allItem = items.map((item) => item._id);
      setSelectedCartItem(allItem);
    }
    setMainCheck((state) => !state);
  };

  const setTotalOrderPrice = () => {
    if (selectedCartItem.length === 0) {
      setOrderPrice(productTotalPrice);
    } else {
      let newCartArr = items
        .filter((item) => selectedCartItem.includes(item._id))
        .map((item) => ({
          _id: Number(item.product_id),
          quantity: item.quantity,
          price: item.product.price,
        }));
      let selectedOrderPrice = newCartArr.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      setOrderPrice(selectedOrderPrice);
    }
  };

  useEffect(() => {
    setTotalOrderPrice();
  }, [selectedCartItem]);

  const handleNavigate = () => {
    if (!user || !productDetails || productDetails.length === 0) {
      openModal({
        content: '구매할 상품을 선택해주세요',
        callbackButton: {
          확인: '',
        },
      });
      return;
    }
    navigate('/orders/confirm', { state: { from: 'cartlist', selectedCartItem, productDetails, orderPrice } });
  };

  const itemList = items.map((item) => (
    <CartListItem
      key={item._id}
      id={item._id}
      item={item}
      selectedCartItem={selectedCartItem}
      setSelectedCartItem={setSelectedCartItem}
      setMainCheck={setMainCheck}
      mainCheck={mainCheck}
      setItems={setItems}
      setTotalOrderPrice={setTotalOrderPrice}
    />
  ));

  return (
    <>
      <div className={styles.contentsCart}>
        <div className={styles.l_wrapper}>
          <div className={styles.cart}>
            <div className={styles.cartTitle}>
              <div className={`${styles.cartTitle} ${styles.cartLayout} ${styles.cartCheck} ${styles.checkWidth}`} onClick={handleSelectAll}>
                <div>
                  <input type="checkbox" checked={mainCheck} />
                </div>
                <p>전체선택</p>
              </div>
              <h3 className={`${styles.cartLayout} ${styles.cartProcuct}`}>상품 정보</h3>
              <h3 className={`${styles.cartLayout} ${styles.cartQuantity}`}>수량</h3>
              <h3 className={`${styles.cartLayout} ${styles.cartPrice}`}>주문 금액</h3>
            </div>
            {itemList}

            <div className={styles.cartButton}>
              <button className={`${styles.button} ${styles.buttonSmall} ${styles.typeBtnCart}`} onClick={handleCleanUp}>
                전체 삭제
              </button>
              <button className={`${styles.button} ${styles.buttonSmall} ${styles.typeBtnCart}`} onClick={handleDeleteSelectedItems}>
                선택 삭제
              </button>
            </div>

            <div className={styles.cartTotal}>
              {selectedCartItem.length > 0 ? (
                <p className={styles.cartTotalTitle}>
                  선택상품 : <span className={styles.cartTotalPoint}>{selectedCartItem.length}</span>개
                </p>
              ) : (
                <p className={styles.cartTotalTitle}>
                  전체상품 : <span className={styles.cartTotalPoint}>{items.length}</span>개
                </p>
              )}

              <div className={styles.cartTotalList}>
                <div className={styles.cartTotalItem}>
                  <p className={styles.cartTotalNum}>{orderPrice.toLocaleString('ko-KR')}원</p>
                  <p className={styles.cartTotalTxt}>상품 금액</p>
                </div>

                <div>
                  <img src={PlusIcon} alt="더하기" />
                </div>

                <div className={styles.cartTotalItem}>
                  <p className={styles.cartTotalNum}>{items?.length > 0 ? shippingFees.toLocaleString('ko-KR') : 0}원</p>
                  <p className={styles.cartTotalTxt}>배송비</p>
                </div>

                <div>
                  <img src={EqualIcon} alt="합계" />
                </div>

                <div className={styles.cartTotalItem}>
                  <p className={styles.cartTotalNum}>{items?.length > 0 ? (orderPrice + shippingFees).toLocaleString('ko-KR') : 0}원</p>
                  <p className={styles.cartTotalTxt}>총 주문 금액</p>
                </div>
              </div>
            </div>
            <button className={`${styles.button} ${styles.buttonLarge} ${styles.btnNull} ${styles.btnNull} ${styles.btnLayout}`} onClick={handleNavigate}>
              주문하기
            </button>

            <Link to="/mainpage" className={styles.cartMore}>
              계속 쇼핑하기
            </Link>
          </div>
        </div>
        {/* <!-- l_wrapper --> */}
      </div>
    </>
  );
}

export default CartList;
