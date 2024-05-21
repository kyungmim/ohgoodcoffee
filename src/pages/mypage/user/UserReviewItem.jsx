import PropTypes from 'prop-types';
import styles from '@pages/mypage/user/UserMypage.module.css';

UserReviewItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function UserReviewItem({ item }) {
  return (
    <>
      <div className={styles.review}>
        <div className={styles.reviewContents}>
          <p>{item.user.name}</p>
          <p className={styles.reviewContentTime}>{item.createdAt.split(' ')[0].replace(/\./g, '-')}</p>
        </div>
        <p className={styles.reviewContentDesc}>{item.content}</p>
      </div>
    </>
  );
}

export default UserReviewItem;
