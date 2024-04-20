import PlusIcon from '@public/plus.svg';
import EqualIcon from '@public/equal_icon.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useUserStore from '@zustand/store';
import CartListItem from '@pages/cart/CartListItem';
import useCustomAxios from '@hooks/useCustomAxios.mjs';

function CartList() {
  const axios = useCustomAxios();
  const { user } = useUserStore();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [selectedCartItem, setSelectedCartItem] = useState([]);
  const [productDetails, setProductDetail] = useState([]);
  const [mainCheck, setMainCheck] = useState(false);

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
    handleSetOrderItem();
  }, [selectedCartItem, items]);

  const handleSubmitOrder = async () => {
    if (!user || !productDetails || productDetails.length === 0) {
      alert('구매할 상품을 선택해주세요');
      return;
    }

    const orderForm = {
      type: 'cart',
      products: productDetails,
      address: {
        user: user,
      },
    };

    try {
      const gotoPaymentComplete = confirm(`선택한 ${productDetails.length}개의 상품을 주문 하시겠습니까?`);
      if (gotoPaymentComplete) {
        const response = await axios.post('/orders', orderForm);
        console.log('Order Response:', response);
        navigate('/orders', { state: { from: location.pathname, orderResponse: response.data } });
        setSelectedCartItem([]);
        setProductDetail([]);
      }
    } catch (error) {
      console.error('Order Submission Failed:', error);
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
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const handleDeleteSelectedItems = async () => {
    if (selectedCartItem.length > 0) {
      let cartData = {
        carts: selectedCartItem,
      };
      await axios.delete('/carts', { data: cartData });
      const response = await axios.get('/carts');
      if (response.data.item) {
        setItems(response.data.item);
        setSelectedCartItem([]);
      }
    }
  };

  const handleCleanUp = async () => {
    try {
      await axios.delete('/carts/cleanup');
      await fetchData();
    } catch (error) {
      console.error('Error cleaning up carts:', error);
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
    console.log(typeof setTotalOrderPrice);
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
              <div className="cart-layout cart-check" onClick={handleSelectAll}>
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
              <p className="cart-total-title">총 주문 상태 {items?.length > 0 ? <span className="cart-total-point">{items.length}</span> : null}개</p>

              <div className="cart-total-list">
                <div className="cart-tota-item">
                  <p className="cart-total-num">{orderPrice.toLocaleString('ko-KR')}원</p>
                  <p className="cart-total-txt">상품 금액</p>
                </div>

                <div className="cart-total-plus">
                  <img src={PlusIcon} alt="더하기" />
                </div>

                <div className="cart-tota-item">
                  <p className="cart-total-num">{shippingFees.toLocaleString('ko-KR')}원</p>
                  <p className="cart-total-txt">배송비</p>
                </div>

                <div className="cart-total-equal">
                  <img src={EqualIcon} alt="합계" />
                </div>

                <div className="cart-tota-item">
                  <p className="cart-total-num">{(orderPrice + shippingFees).toLocaleString('ko-KR')}원</p>
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
