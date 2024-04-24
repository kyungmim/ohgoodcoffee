import PlusIcon from '@assets/plus.svg';
import EqualIcon from '@assets/equal_icon.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useUserStore from '@zustand/store';
import CartListItem from '@pages/cart/CartListItem';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useModalStore from '@zustand/useModalStore.mjs';

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

  const handleSubmitOrder = async () => {
    if (!user || !productDetails || productDetails.length === 0) {
      openModal({
        content: '구매할 상품을 선택해주세요',
        callbackButton: {
          확인: '',
        },
      });
      return;
    }

    const orderForm = {
      type: 'cart',
      products: productDetails,
      address: {
        userName: user.name,
        phone: user.phone,
        address: user.address,
      },
    };

    try {
      openModal({
        content: `선택한 ${productDetails.length}개의 상품을 주문 하시겠습니까?`,
        callbackButton: {
          확인: async () => {
            const response = await axios.post('/orders', orderForm);
            navigate('/orders', {
              state: { from: location.pathname, orderResponse: response.data },
            });
            setSelectedCartItem([]);
            setProductDetail([]);
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
      <div className="contents-cart">
        <div className="l_wrapper">
          <div className="cart">
            <div className="cart-title">
              <div className="cart-layout cart-check check-width" onClick={handleSelectAll}>
                <div className="form-input-radio">
                  <input type="checkbox" checked={mainCheck} />
                </div>
                <p className="cart-text">전체선택</p>
              </div>
              <h3 className="cart-layout cart-procuct">상품 정보</h3>
              <h3 className="cart-layout cart-quantity">수량</h3>
              <h3 className="cart-layout cart-price">주문 금액</h3>
            </div>
            {itemList}

            <div className="cart-button">
              <button className="button button-small type-btn-cart" onClick={handleCleanUp}>
                전체 삭제
              </button>
              <button className="button button-small type-btn-cart" onClick={handleDeleteSelectedItems}>
                선택 삭제
              </button>
            </div>

            <div className="cart-total">
              {selectedCartItem.length > 0 ? (
                <p className="cart-total-title">
                  선택상품 : <span className="cart-total-point">{selectedCartItem.length}</span>개
                </p>
              ) : (
                <p className="cart-total-title">
                  전체상품 : <span className="cart-total-point">{items.length}</span>개
                </p>
              )}

              {/* <p className="cart-total-title">총 주문 상태 {items?.length > 0 ? <span className="cart-total-point">{items.length}</span> : null}개</p> */}

              <div className="cart-total-list">
                <div className="cart-tota-item">
                  <p className="cart-total-num">{orderPrice.toLocaleString('ko-KR')}원</p>
                  <p className="cart-total-txt">상품 금액</p>
                </div>

                <div className="cart-total-plus">
                  <img src={PlusIcon} alt="더하기" />
                </div>

                <div className="cart-tota-item">
                  <p className="cart-total-num">{items?.length > 0 ? shippingFees.toLocaleString('ko-KR') : 0}원</p>
                  <p className="cart-total-txt">배송비</p>
                </div>

                <div className="cart-total-equal">
                  <img src={EqualIcon} alt="합계" />
                </div>

                <div className="cart-tota-item">
                  <p className="cart-total-num">{items?.length > 0 ? (orderPrice + shippingFees).toLocaleString('ko-KR') : 0}원</p>
                  <p className="cart-total-txt">총 주문 금액</p>
                </div>
              </div>
            </div>

            <button className="button button-large btn-null btn-layout" onClick={handleSubmitOrder}>
              주문하기
            </button>

            <Link to="/mainpage" className="cart-more">
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
