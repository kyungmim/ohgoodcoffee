import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

MagazineListItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.number,
    title: PropTypes.string,
    createdAt: PropTypes.string,
    views: PropTypes.number,
    extra: PropTypes.object,
  }),
};

function MagazineListItem({ item }) {
  return (
    <>
      <li>
        <Link className="card" to="/magazine/detail">
          <div className="card-cover">
            <img className="card-cover-src" src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.extra.detailImages[0].name}`} alt="카페 전경 사진" />
          </div>
          <div className="card-contents">
            <div className="card-contents-item">
              <span className="card-type yellow">{item.extra.articleType}</span>
              <h4 className="card-title mini">{item.title}</h4>
            </div>
            <p className="card-footer">
              {item.createdAt} 조회 {item.views}
            </p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default MagazineListItem;
