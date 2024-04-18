import PropTypes from 'prop-types';

UserOrderProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

function UserOrderProductItem({ product }) {
  return (
    <>
      <div className="order-main">
        <div className="order-main-item-title">
          <img src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${product.image}`} alt="상품 사진" />
        </div>
        <div className="order-main-item-desc">
          <div className="order-main-item">
            <p>{product.name}</p>
            <p>
              {product.price}원 /{product.quantity}개
            </p>
          </div>
          <div className="order-main-item-status">주문완료</div>
        </div>
      </div>
    </>
  );
}

export default UserOrderProductItem;
