import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useUserStore from '@zustand/store';
import styles from '@pages/magazine/Magazine.module.css';

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
  const { setItemId } = useUserStore();
  const onclick = () => {
    setItemId(item._id, () => {
      item._id;
    });
  };

  const today = new Date();
  const date = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  return (
    <>
      <li>
        <Link className={styles.card} to="/magazine/detail" onClick={onclick}>
          <div className={styles.cardCover}>
            <img className={styles.cardCoverSrc} src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.extra.mainImages.name}`} alt="카페 전경 사진" />
          </div>
          <div className={styles.cardContents}>
            <div className={styles.cardContentsItem}>
              <span className={styles.cardType}>{item.extra.articleType}</span>
              <h4 className={styles.cardTitle}>{item.title}</h4>
            </div>
            <p className={styles.cardFooter}>
              {date} 조회 {item.views.toLocaleString('ko-KR')}
            </p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default MagazineListItem;
