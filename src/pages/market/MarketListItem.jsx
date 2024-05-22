import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '@pages/market/Market.module.css';

MarketListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function MarketListItem({ item }) {
  return (
    <>
      <li>
        <Link className={styles.card} to={`/market/detail/${item._id}`}>
          <div className={styles.cardCover}>
            <img
              className={styles.cardCoverSrc}
              src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item?.mainImages[0]?.name}` || null}
              alt={`${item.name} 상품 사진`}
            />
          </div>
          <div className={styles.cardContents}>
            <div className={styles.cardContentsItem}>
              <span className={styles.cardBrand}>{item.extra?.brand}</span>
              <h4 className={styles.cardTitle}>{item.name}</h4>
            </div>
            <p className={styles.cardPrice}>{item.price.toLocaleString('ko-KR')}원</p>
            <div className={styles.cardState}>
              {item.extra?.isNew ? <p className={`${styles.cardStateItem} ${styles.new}`}>NEW</p> : null}
              {item.extra?.isBest ? <p className={`${styles.cardStateItem} ${styles.best}`}>BEST</p> : null}
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default MarketListItem;
