import useCustomAxios from '@hooks/useCustomAxios.mjs';
import UserReviewItem from '@pages/mypage/user/UserReviewItem';
import useUserStore from '@zustand/store';
import { useEffect, useState } from 'react';

function UserReviewList() {
  const axios = useCustomAxios();
  const { user } = useUserStore();
  const [data, setData] = useState();

  const list = async () => {
    const res = await axios.get(`/replies/all`);
    const id = res.data.item.filter((item) => item.user._id == user._id);
    setData(id);
  };

  useEffect(() => {
    list();
  }, []);

  const item = data?.map((item) => <UserReviewItem key={item._id} item={item} />);

  // return <UserReviewItem itemlist={itemlist} />;
  return (
    <div className="item-wrapper">
      <div className="main-title">
        <p className="main-contents-title">내가 쓴 리뷰</p>
      </div>
      <div className="main-content">
        <div className="review-list">{item}</div>
      </div>
    </div>
  );
}

export default UserReviewList;
