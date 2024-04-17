import PropTypes from 'prop-types';

UserOrderProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

function UserOrderProductItem({ product }) {
  console.log(product);
  return (
    <>
      <div className="order-item-container">
        <div className="order-header">
          <p className="order-number">주문번호</p>
          <p>20240404123456</p>
        </div>
        <div className="order-header">
          <p className="order-date">주문일자</p>
          <p>2024-04-04</p>
        </div>
      </div>
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
        </div>
      </div>
    </>
  );
}

export default UserOrderProductItem;
