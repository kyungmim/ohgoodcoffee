import PropTypes from 'prop-types';
import { Link, useSearchParams } from 'react-router-dom';
import styles from '@components/Pagination.module.css';

Pagination.propTypes = {
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  page: PropTypes.number,
};

function Pagination({ totalCount, currentPage }) {
  const [searchParams] = useSearchParams();

  const pageList = [];

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  for (let page = 1; page <= totalCount; page++) {
    searchParams.set('page', page);
    let search = searchParams.toString();
    pageList.push(
      <li key={page} className={`${page === +currentPage ? 'is_active' : ''}`} onClick={handleClick}>
        <Link to={`/market?${search}`}>{page}</Link>
      </li>,
    );
  }

  return (
    <div>
      <ul className={styles.pagination}>{pageList}</ul>
    </div>
  );
}

export default Pagination;
