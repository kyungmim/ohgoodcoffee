import Api from '@utils/Api';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

CartListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function CartListItem({ item }) {
  const [productQuantity, setProductQuantity] = useState(item.quantity);
  const { postCart, getCartProducts } = Api();

  console.log("cartListItem", item)

  useEffect(() => {
    console.log('productQuantity', productQuantity, 'id', item._id);

    let postQuantity = productQuantity - item.quantity;

    if (postQuantity != 0) {
      let cart = { product_id: Number(item.product_id), quantity: postQuantity };
      handleRequest(cart);
    }
  }, [productQuantity]);

  async function handleRequest(cart) {
    await postCart(cart);
    await getCartProducts();
  }

  return (
    <div className="cart-item">
      <div className="cart-layout cart-procuct">
        <div className="cart-item-info">
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
      <p className="cart-layout cart-price">{item.product.price}</p>
      <p className="cart-layout cart-delivery">배송비</p>
      <div className="cart-layout cart-check">
        <div className="form-input-radio">
          <input type="checkbox" name="type" id="type" checked />
        </div>
      </div>
    </div>
  );
}

export default CartListItem;
