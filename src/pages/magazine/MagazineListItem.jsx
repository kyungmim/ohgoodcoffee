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
  console.log(item);
  return (
    <>
      <li>
        <Link className="card" to="/magazine/detail">
          <img className="card-cover" src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.extra.images[0]}`} alt="카페 전경 사진" />
          <div className="card-contents">
            <span className="card-type yellow">{item.extra.articleType}</span>
            <h4 className="card-title mini">{item.title}</h4>
          </div>
          <p className="card-footer">
            {item.createdAt} 조회 {item.views}
          </p>
        </Link>
      </li>
    </>
  );
}

export default MagazineListItem;
