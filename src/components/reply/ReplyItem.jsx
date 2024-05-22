import styles from '@components/reply/Reply.module.css';
import PropTypes from 'prop-types';

ReplyItem.propTypes = {
  item: PropTypes.object,
};

function ReplyItem({ item }) {
  const date = (a) => {
    const milliSeconds = new Date() - a;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };

  const nowDate = date(new Date(item?.createdAt));

  return (
    <div className={styles.commentItem}>
      <div className={styles.commentInfo}>
        <p className={styles.commentUser}>{item?.user.name}</p>
        <p className={styles.commentTime}>{nowDate}</p>
      </div>
      <p className={styles.commentDetail}>{item?.content}</p>
    </div>
  );
}

export default ReplyItem;
