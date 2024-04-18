import PropTypes from 'prop-types';

UserWishListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function UserWishListItem({ item }) {
  console.log(item);
  return (
    <>
      <ul className="grid">
        <li className="card type-info-card">
          <div className="card-cover">
            <img className="card-cover-src" src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.product.image.fileName}`} alt="상품 사진" />
          </div>
          <div className="card-contents">
            <div className="card-contents-item">
              <span className="card-brand">{item.product.extra.brand}</span>
              <h4 className="card-product_name">{item.product.name}</h4>
            </div>
            <p className="card-price">{item.product.price} 원</p>
            <div className="card-state">
              <p className="card-state-item new">NEW</p>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default UserWishListItem;
