import PlusIcon from '@public/plus.svg';
import EqualIcon from '@public/equal_icon.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useUserStore from '@zustand/store';
import CartListItem from '@pages/cart/CartListItem';
import useCustomAxios from '@hooks/useCustomAxios.mjs';

function CartList() {
  const axios = useCustomAxios();
  const { user } = useUserStore();
  const [items, setItems] = useState([]);
  const [itemsCost, setItemsCost] = useState({ shippingFees: 3000 });
  // const [orderCartInfo, setOrderCartInfo] = useState();
  const [selectedCartItem, setSelectedCartItem] = useState([]);
  const [productDetails, setProductDetail] = useState([]);
  const [mainCheck, setMainCheck] = useState(false);

  const productTotalPrice = items.reduce((acc, item) => {
    const itemTotal = item.product.price * item.quantity;
    return acc + itemTotal;
  }, 0);

  function handleSetOrderItem() {
    if (selectedCartItem.indexOf(items._id > -1)) {
      let newCartArr = items
        .filter((item) => selectedCartItem.includes(item._id))
        .map((item) => ({
          _id: Number(item.product_id), // product_id 값을 새 객체에 저장
          quantity: item.quantity, // quantity 값을 새 객체에 저장
        }));
      console.log('newCartArr', newCartArr);
      setProductDetail(newCartArr);
    } else {
      let newCartArr = [];
      setProductDetail(newCartArr);
    }
  }

  useEffect(() => {
    handleSetOrderItem();
  }, [selectedCartItem]);

  const handleSubmitOrder = async () => {
    if (!user || !productDetails || productDetails.length === 0) {
      alert('구매할 상품을 선택해주세요');
      return;
    }

    const orderForm = {
      type: 'cart',
      products: productDetails,
      address: {
        name: user.name,
        value: user.address,
      },
    };

    try {
      const response = await axios.post('/orders', orderForm);
      console.log('Order Response:', response);
      alert('주문에 성공했습니다.');
      setSelectedCartItem([]);
      setProductDetail([]);
    } catch (error) {
      console.error('Order Submission Failed:', error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    console.log('SELECTT', selectedCartItem);
  }, [selectedCartItem]);

  const fetchData = async () => {
    try {
      const productsResponse = await axios.get('/carts');
      await setItemsCost(productsResponse.data.cost);
      await setItems(productsResponse.data.item);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  async function handleDeleteSelectedItems() {
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
  }

  async function handleCleanUp() {
    try {
      await axios.delete('/carts/cleanup');
      await fetchData();
    } catch (error) {
      console.error('Error cleaning up carts:', error);
    }
  }

  const handleSelectAll = () => {
    if (mainCheck) {
      setSelectedCartItem([]);
    } else {
      let allItem = items.map((item) => item._id);
      setSelectedCartItem(allItem);
    }

    setMainCheck((state) => !state);
  };

  useEffect(() => {
    console.log('checkAll', mainCheck);
  }, [mainCheck]);

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
    />
  ));

  return (
    <>
      <div className="contents-cart">
        <div className="l_wrapper">
          <div className="cart-button">
            <button className="btn-null button-small button type-small-btn " onClick={handleCleanUp}>
              전체 삭제
            </button>
            <button className="button btn-Fill button-small type-small-btn" onClick={handleDeleteSelectedItems}>
              선택 삭제
            </button>
          </div>
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
              {/* <h3 className="cart-layout cart-delivery">배송비</h3> */}
              <h3 className="cart-layout"></h3>
            </div>
            {/* <!-- cart-title --> */}

            {itemList}

            {/* <!-- cart-item 3 --> */}

            <div className="cart-total">
              <p className="cart-total-title">총 주문 상태 {items?.length > 0 ? <span className="cart-total-point">{items.length}개</span> : null}</p>

              <div className="cart-total-list">
                <div className="cart-tota-item">
                  <p className="cart-total-num">{productTotalPrice.toLocaleString('ko-KR')}원</p>
                  <p className="cart-total-txt">상품 금액</p>
                </div>

                <div className="cart-total-plus">
                  <img src={PlusIcon} alt="더하기" />
                </div>

                <div className="cart-tota-item">
                  <p className="cart-total-num">{itemsCost.shippingFees.toLocaleString('ko-KR')}원</p>
                  <p className="cart-total-txt">배송비</p>
                </div>

                <div className="cart-total-equal">
                  <img src={EqualIcon} alt="합계" />
                </div>

                <div className="cart-tota-item">
                  <p className="cart-total-num">{(productTotalPrice + (itemsCost.shippingFees || 0)).toLocaleString('ko-KR')}원</p>
                  <p className="cart-total-txt">총 주문 금액</p>
                </div>
              </div>
              {/* <!-- total --> */}
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
