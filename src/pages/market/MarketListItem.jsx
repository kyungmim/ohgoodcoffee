import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

MarketListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function MarketListItem({ item }) {
  return (
    <>
      <li>
        <Link className="card" to={`/market/detail/${item._id}`}>
          <div className="card-cover">
            <img
              className="card-cover-src"
              src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item?.mainImages[0]?.fileName}` || null}
              alt={`${item.name} 상품 사진`}
            />
          </div>
          <div className="card-contents">
            <div className="card-contents-item">
              <span className="card-brand">{item.extra?.brand}</span>
              <h4 className="card-title mini">{item.name}</h4>
            </div>
            <p className="card-price">{item.price.toLocaleString('ko-KR')}원</p>
            <div className="card-state">
              {item.extra?.isBest ? <p className="card-state-item new">NEW</p> : null}
              {item.extra?.isNew ? <p className="card-state-item best">BEST</p> : null}
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default MarketListItem;
