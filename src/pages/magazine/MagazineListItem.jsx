import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

MagazineListItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.number,
    title: PropTypes.string,
  }),
};

function MagazineListItem({ item }) {
  return (
    <>
      <li>
        <Link className="card" to="/magazine/detail">
          <img className="card-cover" src="public/cafe_coeo.jpeg" alt="" />
          <div className="card-contents">
            <span className="card-type yellow">USEFUL</span>
            <h4 className="card-title mini">Achim 스폿 서른 네 번째 파트너, 코에오 커피</h4>
          </div>
          <p className="card-footer">1일전 조회 72</p>
        </Link>
      </li>
    </>
  );
}

export default MagazineListItem;
