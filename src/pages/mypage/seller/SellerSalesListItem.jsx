import PropTypes from 'prop-types';

SellerSalesListItem.propTypes = {
  item: PropTypes.object.isRequired,
  menuClick: PropTypes.func,
};

function SellerSalesListItem({ item }) {
  return (
    <>
      <>
        <li className="card">
          <img className="card-cover" src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item?.mainImages?.fileName}` || null} alt={`${item.name} 상품 사진`} />
          <div className="card-contents">
            <span className="card-brand">{item.extra.brand}</span>
            <h4 className="card-title mini">{item.name}</h4>
          </div>
          <p className="card-price">{item.price.toLocaleString('ko-KR')}원</p>
          <div className="card-state">
            {item.extra?.isBest ? <p className="card-state new">NEW</p> : null}
            {item.extra?.isNew ? <p className="card-state best">BEST</p> : null}
          </div>
        </li>
      </>
    </>
  );
}

export default SellerSalesListItem;
