import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

UserWishListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function UserWishListItem({ item }) {
  const navigate = useNavigate();

  const onClick = () => {
    if (item) navigate(`/market/detail/${item.product._id}`);
  };

  return (
    <>
      <li>
        <button className="card type-info-card" onClick={onClick}>
          <div className="card-cover type-info-card-cover">
            <img src={`${import.meta.env.VITE_API_SERVER}${item?.product.image.path}`} alt={item?.product.name} />
          </div>
          <div className="card-contents">
            <div className="card-contents-item">
              <span className="card-brand">{item?.product.extra.brand}</span>
              <h4 className="card-title mini">{item?.product.name}</h4>
            </div>
            <p className="card-price">{item?.product.price.toLocaleString('ko-KR')} 원</p>

            <div className="card-state">
              {item?.product.extra.isNew ? <p className="card-state-item new">NEW</p> : ''}
              {item?.product.extra.isBest ? <p className="card-state-item best">BEST</p> : ''}
            </div>
          </div>
        </button>
      </li>
    </>
  );
}

export default UserWishListItem;
