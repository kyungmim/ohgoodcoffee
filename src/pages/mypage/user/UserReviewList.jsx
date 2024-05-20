import useCustomAxios from '@hooks/useCustomAxios.mjs';
import UserReviewItem from '@pages/mypage/user/UserReviewItem';
import { useQuery } from '@tanstack/react-query';
import useUserStore from '@zustand/store';
import { useEffect, useState } from 'react';

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
    <div className="item-wrapper">
      <div className="main-title">
        <p className="main-contents-title">내가 쓴 리뷰</p>
      </div>
      <div className="main-content">
        <div className="review-list">{items}</div>
      </div>
    </div>
  );
}

export default UserReviewList;
