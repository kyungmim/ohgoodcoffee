import useCustomAxios from '@hooks/useCustomAxios.mjs';
import UserReviewItem from '@pages/mypage/user/UserReviewItem';
import { useQuery } from '@tanstack/react-query';
import useUserStore from '@zustand/store';
import { useEffect, useState } from 'react';
import styles from '@pages/mypage/user/UserMypage.module.css';

function UserReviewList() {
  const axios = useCustomAxios();
  const { user } = useUserStore();
  const [reviewList, setReviewList] = useState([]);

  const { data } = useQuery({
    queryKey: ['replies'],
    queryFn: () => axios.get('/replies/all'),
    select: (response) => response.data,
    suspense: true,
  });

  useEffect(() => {
    if (data) setReviewList(data.item);
  }, [data]);

  const items = reviewList.filter((item) => user._id === item.user._id).map((item) => <UserReviewItem key={item._id} item={item} />);

  return (
    <div className={styles.itemWrapper}>
      <div className={styles.mainTitle}>
        <p className={styles.mainContentsTitle}>내가 쓴 리뷰</p>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.reviewList}>{items}</div>
      </div>
    </div>
  );
}

export default UserReviewList;
