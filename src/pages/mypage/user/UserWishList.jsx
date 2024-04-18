import useCustomAxios from '@hooks/useCustomAxios.mjs';
import UserWishListItem from '@pages/mypage/user/UserWishListItem';
import { useEffect, useState } from 'react';

function UserWishList() {
  const axios = useCustomAxios();
  const [data, setData] = useState();

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const response = await axios.get('/bookmarks/product');
    setData(response.data);
  };

  const wishList = data?.item.map((item) => <UserWishListItem key={item._id} item={item} />);

  return (
    <>
      <div className="l_wrapper">
        <div className="item-wrapper">
          <div className="main-title">
            <p className="main-contents-title">위시리스트</p>
          </div>
          <div className="main-content">
            <div className="card-container">{wishList}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserWishList;
