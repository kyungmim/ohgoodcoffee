import PlusIcon from '@public/plus.svg';
import EqualIcon from '@public/equal_icon.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useUserStore from '@zustand/store';
import CartListItem from '@pages/CartListItem';
import useCustomAxios from '@hooks/useCustomAxios.mjs';

function CartList() {
  const axios = useCustomAxios();
  const { user } = useUserStore();
  const [items, setItems] = useState([]);
  const [itemsCost, setItemsCost] = useState({ shippingFees: 3000 });
  // const [orderCartInfo, setOrderCartInfo] = useState();
  const [allSelect, setAllSelect] = useState(false);
  const [selectedCartItem, setSelectedCartItem] = useState([]);

  const productDetails = items.map((item) => ({
    _id: item.product_id,
    quantity: item.quantity,
  }));

  console.log('productDetails', productDetails);

  const productTotalPrice = items.reduce((acc, item) => {
    const itemTotal = item.product.price * item.quantity;
    return acc + itemTotal;
  }, 0); // 초기값 0으로 시작

  console.log('Total Price:', productTotalPrice); // 전체 가격 출력

  // async function handleSubmitCartBuy() {
  //   let userData = user;
  //   if (userData) {
  //     let order = {
  //       products: productDetails,
  //       address: {
  //         value: userData.address,
  //       },
  //     };
  //     try {
  //       const response = await axios.post('/orders', order);
  //       setOrderCartInfo(response.data);
  //     } catch (err) {
  //       alert(err.response?.data.message);
  //     }
  //   }
  // }

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    console.log(allSelect);

    if (allSelect) {
      const newSelected = items.map((item) => item._id);
      setSelectedCartItem(newSelected);
    } else {
      setSelectedCartItem([]);
    }
  }, [allSelect]);

  useEffect(() => {
    console.log('SELECTT', selectedCartItem);
  }, [selectedCartItem]);

  const fetchData = async () => {
    try {
      const productsResponse = await axios.get('/carts');
      await setItemsCost(productsResponse.data.cost);
      await setItems(productsResponse.data.item);
      // await handleSubmitCartBuy();
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  async function handleCleanUp() {
    try {
      await axios.delete('/carts/cleanup');
      await fetchData();
    } catch (error) {
      console.error('Error cleaning up carts:', error);
    }
  }

  const itemList = items.map((item) => (
    <CartListItem key={item._id} id={item._id} item={item} allSelect={allSelect} setAllSelect={setAllSelect} selectedCartItem={selectedCartItem} setSelectedCartItem={setSelectedCartItem} />
  ));

  const allSelectChecker = () => {
    let arr1 = [...selectedCartItem];
    let arr2 = items.map((item) => item._id);

    return checkElementsExist(arr1, arr2);
  };

  const handleClickAllCheck = () => {
    // let arr1 = [...selectedCartItem]
    // let arr2 = items.map((item)=> item._id)

    let isChecked = allSelectChecker();
    // console.log("isChecked", isChecked, "1", arr1, "2", arr2)
    if (isChecked) {
      setSelectedCartItem([]);
    } else {
      let allItem = items.map((item) => item._id);
      setSelectedCartItem(allItem);
    }
  };

  function checkElementsExist(array1, array2) {
    // Check if every element in array1 is included in array2
    return array1.length != 0 && array1.every((element) => array2.includes(element));
  }

  const allChecked = () => {
    console.log('ALLCHECKED :', selectedCartItem.length === items.length);
    console.log('selectedCartItem.length', selectedCartItem.length);
    if (selectedCartItem.length === items.length) {
      setAllSelect(true);
    } else {
      setAllSelect(false);
    }
  };

  useEffect(() => {
    allChecked();
  }, [allSelect]);

  return (
    <>
      <div className="contents-cart">
        <div className="l_wrapper">
          <div className="cart-button">
            <button className="btn-null button-small button type-small-btn " onClick={handleCleanUp}>
              전체 삭제
            </button>
            <button className="button btn-Fill button-small type-small-btn ">선택 삭제</button>
          </div>
          <div className="cart">
            <div className="cart-title">
              <div className="cart-layout cart-check" onClick={() => handleClickAllCheck()}>
                <div className="form-input-radio">
                  <input type="checkbox" checked={allSelectChecker()} />
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

            <button className="button button-large btn-null btn-layout">주문하기</button>

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
