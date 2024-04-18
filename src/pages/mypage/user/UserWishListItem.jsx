import PropTypes from 'prop-types';

UserWishListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function UserWishListItem({ item }) {
  console.log(item);
  return (
    <>
      <ul className="grid">
        <li className="card">
          <img className="card-cover" src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.product.image.fileName}`} alt="상품 사진" />
          <div className="card-contents">
            <span className="card-brand">{item.product.extra.brand}</span>
            <h4 className="card-product_name">{item.product.name}</h4>
          </div>
          <p className="card-price">{item.product.price} 원</p>
          <div className="card-state">
            <p className="card-state new">NEW</p>
          </div>
        </li>
      </ul>
    </>
  );
}

export default UserWishListItem;
