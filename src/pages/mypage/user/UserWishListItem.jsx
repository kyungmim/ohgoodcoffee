import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

UserWishListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function UserWishListItem({ item }) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/market/detail/${item.product._id}`);
  };
  return (
    <>
      <li>
        <button className="card type-info-card" onClick={onClick}>
          <div className="card-cover type-info-card-cover">
            <img className="card-cover-src" src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.product.image.name}`} alt="상품 사진" />
          </div>
          <div className="card-contents">
            <div className="card-contents-item">
              <span className="card-brand">{item.product.extra.brand}</span>
              <h4 className="card-product_name">{item.product.name}</h4>
            </div>
            <p className="card-price">{item.product.price.toLocaleString('ko-KR')} 원</p>
            <div className="card-state">
              <p className="card-state-item new">NEW</p>
            </div>
          </div>
        </button>
      </li>
    </>
  );
}

export default UserWishListItem;
