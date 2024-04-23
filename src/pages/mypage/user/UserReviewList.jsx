import useCustomAxios from '@hooks/useCustomAxios.mjs';
import UserReviewItem from '@pages/mypage/user/UserReviewItem';
import { useEffect, useState } from 'react';

function UserReviewList() {
  const axios = useCustomAxios();
  const [data, setData] = useState();
  console.log(data);

  const list = async () => {
    const response = await axios.get('/replies');
    setData(response.data);
  };

  useEffect(() => {
    list();
  }, []);

  const item = data?.item?.map((item) => <UserReviewItem key={item._id} item={item} />);

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
