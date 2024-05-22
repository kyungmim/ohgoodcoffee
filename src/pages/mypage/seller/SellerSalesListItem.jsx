import useUserStore from '@zustand/store';
import PropTypes from 'prop-types';
import styles from '@pages/mypage/seller/SellerMypage.module.css';

SellerSalesListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function SellerSalesListItem({ item }) {
  const { setItemId } = useUserStore();
  console.log(item);

  const onClick = () => {
    setItemId(item._id, () => {
      item._id;
    });
  };

  return (
    <>
      <>
        <li className={styles.clickItem}>
          <button className={`${styles.button} ${styles.card} ${styles.typeInfoCard}`} onClick={onClick}>
            <div className={`${styles.cardCover} ${styles.typeInfoCardCover}`}>
              <img className={styles.cardCoverSrc} src={`${import.meta.env.VITE_API_SERVER}${item?.mainImages[0].path}`} alt={`${item.name} 상품 사진`} />
            </div>
            <div className={styles.cardContents}>
              <div className={styles.cardContentsItem}>
                <span className={styles.cardBrand}>{item?.extra.brand}</span>
                <h4 className={`${styles.cardTitle} ${styles.mini}`}>{item?.name}</h4>
              </div>
              <p className={styles.cardPrice}>{item?.price.toLocaleString('ko-KR')}원</p>
              <div className={styles.cardState}>
                {item?.extra.isBest ? <p className={`${styles.cardStateItem} ${styles.new}`}>NEW</p> : null}
                {item?.extra.isNew ? <p className={`${styles.cardStateItem} ${styles.best}`}>BEST</p> : null}
              </div>
            </div>
          </button>
        </li>
      </>
    </>
  );
}

export default SellerSalesListItem;
