import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from '@pages/mypage/user/UserMypage.module.css';

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
        <button className={`${styles.card} ${styles.typeInfoCard}`} onClick={onClick}>
          <div className={`${styles.cardCover} ${styles.typeInfoCardCover}`}>
            <img src={`${import.meta.env.VITE_API_SERVER}${item?.product.image.path}`} alt={item?.product.name} />
          </div>
          <div className={styles.cardContents}>
            <div className={styles.cardContentsItem}>
              <span className={styles.cardBrand}>{item?.product.extra.brand}</span>
              <h4 className={`${styles.cardTitle} ${styles.mini}`}>{item?.product.name}</h4>
            </div>
            <p className={styles.cardPrice}>{item?.product.price.toLocaleString('ko-KR')} 원</p>

            <div className={styles.cardState}>
              {item?.product.extra.isNew ? <p className={`${styles.cardStateItem} ${styles.new}`}>NEW</p> : ''}
              {item?.product.extra.isBest ? <p className={`${styles.cardStateItem} ${styles.best}`}>BEST</p> : ''}
            </div>
          </div>
        </button>
      </li>
    </>
  );
}

export default UserWishListItem;
