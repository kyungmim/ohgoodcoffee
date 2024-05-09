import PropTypes from 'prop-types';
import { Link, useSearchParams } from 'react-router-dom';

Pagination.propTypes = {
  totalPage: PropTypes.number,
  current: PropTypes.number,
};

function Pagination({ totalCount, currentPage, Link }) {
  const [searchParams] = useSearchParams();
  // const limit = ;

  const pageList = [];

  for (let page = 1; page <= totalCount; page++) {
    searchParams.set('page', page);
    let search = searchParams.toString();
    pageList.push(
      <li key={page}>
        <Link to={`${Link}?${search}`}>{page}</Link>
      </li>,
    );
  }

  return (
    <div>
      <ul>{pageList}</ul>
      {/* <ul>1</ul> */}
    </div>
  );
}

export default Pagination;
