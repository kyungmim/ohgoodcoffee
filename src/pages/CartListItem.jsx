import useCustomAxios from '@hooks/useCustomAxios.mjs';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

CartListItem.propTypes = {
  item: PropTypes.object.isRequired,
  allSelect: PropTypes.bool.isRequired,
  selectedCartItem: PropTypes.array.isRequired,
  setSelectedCartItem: PropTypes.func.isRequired,
  setAllSelect: PropTypes.func.isRequired,
};

function CartListItem({ item, allSelect, selectedCartItem, setSelectedCartItem, setAllSelect }) {
  const axios = useCustomAxios();
  const [productQuantity, setProductQuantity] = useState(item.quantity);

  useEffect(() => {
    console.log('productQuantity', productQuantity, 'id', item._id);

    let postQuantity = productQuantity - item.quantity;

    if (postQuantity != 0) {
      let cart = { product_id: Number(item.product_id), quantity: postQuantity };
      handleRequest(cart);
    }
  }, [productQuantity]);

  async function handleRequest(cart) {
    await axios.post('/carts', cart);
    await axios.get('/carts');
  }

  async function handleDeleteItem(id) {
    console.log(id, '삭제');
    await axios.delete(`/carts/${id}`);
  }

  const cartItemCheck = () => {
    // console.log("selextedCartItem", selectedCartItem, "kkk", item)
    if (selectedCartItem.indexOf(item._id) > -1) {
      return true;
    } else {
      return false;
    }
  };

  const handleCartCheck = () => {
    const arrCopy = [...selectedCartItem];
    const index = arrCopy.indexOf(item._id);
    console.log('handleCarrtCHeck', index);
    if (index > -1) {
      // console.log("fff", arrCopy.splice(index, 1))
      // let newArr = arrCopy.splice(index, 1);
      let newArr = arrCopy.filter((el) => el != item._id);
      // console.log("newArr", newArr)
      setSelectedCartItem(newArr);
    } else {
      setSelectedCartItem([...selectedCartItem, item._id]);
    }
    // setAllSelect(false)
  };

  return (
    <div className="cart-item">
      <div className="cart-layout cart-procuct">
        <div className="cart-item-info">
          <div className="cart-layout cart-check" onClick={() => handleCartCheck()}>
            <div className="form-input-radio">
              <input type="checkbox" checked={cartItemCheck()} />
            </div>
          </div>
          <div className="cart-item-cover">
            <img src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.product?.image?.fileName}`} alt="커피이미지" />
          </div>
          <p className="cart-item-title">
            PID{item._id} | {item.product?.name}
          </p>
        </div>
        {/* <!-- cart-item-info --> */}
      </div>
      <div className="quantity-button" onClick={() => setProductQuantity((prev) => prev - 1)}>
        -{/* <img className="selling-icon down" src={Minus} />  */}
      </div>
      <div>
        <p className="cart-layout cart-quantity">{productQuantity}</p>
      </div>
      <div className="quantity-button" onClick={() => setProductQuantity((prev) => prev + 1)}>
        +{/* <img className="selling-icon up" src={Plus} /> */}
      </div>
      <p className="cart-layout cart-price">{(item.product.price * productQuantity).toLocaleString('ko-KR')}</p>
      {/* <p className="cart-layout cart-delivery">배송비</p> */}
      <p className="btn-null button-small" onClick={() => handleDeleteItem(item._id)}>
        삭제
      </p>
    </div>
  );
}

export default CartListItem;
