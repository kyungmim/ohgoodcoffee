import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useModalStore from '@zustand/useModalStore.mjs';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

CartListItem.propTypes = {
  item: PropTypes.object.isRequired,
  selectedCartItem: PropTypes.array.isRequired,
  setSelectedCartItem: PropTypes.func.isRequired,
  setMainCheck: PropTypes.func.isRequired,
  mainCheck: PropTypes.bool.isRequired,
  setItems: PropTypes.func.isRequired,
  setTotalOrderPrice: PropTypes.func.isRequired,
};

function CartListItem({ item, selectedCartItem, setSelectedCartItem, setMainCheck, mainCheck, setItems, setTotalOrderPrice }) {
  const axios = useCustomAxios();
  const navigate = useNavigate();
  const [productQuantity, setProductQuantity] = useState(item.quantity);
  const [isProcessing, setIsProcessing] = useState(false);
  const openModal = useModalStore((state) => state.openModal);

  useEffect(() => {
    let postQuantity = productQuantity - item.quantity;

    if (postQuantity != 0) {
      let cart = { product_id: Number(item.product_id), quantity: postQuantity };

      handleRequest(cart);
    }
  }, [productQuantity]);

  useEffect(() => {
    setTotalOrderPrice();
  }, [selectedCartItem, productQuantity]);

  const handleAddQuantity = () => {
    let realQuantity = item.product.quantity - item.product.buyQuantity;
    if (!isProcessing && productQuantity < realQuantity) {
      setProductQuantity((prev) => prev + 1);
    } else if (!isProcessing && productQuantity == 0) {
      openModal({
        content: '해당 상품을 장바구니에서 삭제하시겠습니까?',
        callbackButton: {
          확인: async () => {
            await handleDeleteItem(item._id);
          },
          취소: '',
        },
      });
    } else {
      alert(`현재 구매 가능한 재고 수량은 ${realQuantity} 개 입니다.`);
      return;
    }
  };

  const handleReduceQuantity = () => {
    // isProcessing일 경우 handleRequest 함수의 사이클을 온전히 실행한 후 수량 조정을 위해
    if (!isProcessing && productQuantity > 0) {
      //카트에서 제품의 갯수가 1개일 때, 마이너스 버튼을 누르면 delete 요청
      if (productQuantity == 1) {
        openModal({
          content: '해당 상품을 장바구니에서 삭제하시겠습니까?',
          callbackButton: {
            확인: async () => {
              await handleDeleteItem(item._id);
            },
            취소: '',
          },
        });
      } else {
        setProductQuantity((prev) => prev - 1);
      }
    }
  };

  const handleRequest = async (cart) => {
    setIsProcessing(true);
    await axios.post('/carts', cart);
    const response = await axios.get('/carts');
    if (response.data.item) {
      setItems(response.data.item);
      setIsProcessing(false);
    }
  };

  const handleDeleteItem = async (id) => {
    openModal({
      content: '해당 상품을 장바구니에서 삭제하시겠습니까?',
      callbackButton: {
        확인: async () => {
          await axios.delete(`/carts/${id}`);
        },
        취소: '',
      },
    });
    const response = await axios.get('/carts');
    if (response.data.item) {
      setItems(response.data.item);
    }
  };

  const cartItemCheck = () => {
    if (selectedCartItem.indexOf(item._id) > -1) {
      return true;
    } else {
      return false;
    }
  };

  const handleCartCheck = () => {
    let arrCopy = [...selectedCartItem];
    const index = arrCopy.indexOf(item._id);
    if (index > -1) {
      let newArr = arrCopy.filter((el) => el != item._id);
      setSelectedCartItem(newArr);
    } else {
      setSelectedCartItem([...selectedCartItem, item._id]);
    }

    if (mainCheck) {
      setMainCheck(false);
    }
  };

  const handleChange = (e) => {
    //inputdml onChange를 위해 생성된 함수
    console.log('E value', e);
  };

  return (
    <div className="cart-item">
      <div className="cart-check" onClick={() => handleCartCheck()}>
        <div className="form-input-radio">
          <input type="checkbox" checked={cartItemCheck()} onChange={(e) => handleChange(e)} />
        </div>
      </div>
      <div className="cart-layout type-cart-mo">
        <div className="cart-item-info">
          <div className="cart-item-cover" onClick={() => navigate(`/market/detail/${item.product_id}`)}>
            <img src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.product?.image.name}`} alt="커피이미지" />
          </div>
          <p className="cart-item-title">{item.product?.name}</p>
        </div>
      </div>
      <div className="cart-price-number">
        <div className="cart-layout cart-quantity">
          <div className="quantity-button" onClick={handleReduceQuantity}>
            -
          </div>
          <div>
            <p>{productQuantity}</p>
          </div>
          <div className="quantity-button" onClick={handleAddQuantity}>
            +
          </div>
        </div>
        <p className="cart-layout cart-price">{(item.product.price * productQuantity).toLocaleString('ko-KR')}</p>
      </div>
      <p className="button type-btn-cart button-small type-cart-btn" onClick={() => handleDeleteItem(item._id)}>
        삭제
      </p>
    </div>
  );
}

export default CartListItem;
