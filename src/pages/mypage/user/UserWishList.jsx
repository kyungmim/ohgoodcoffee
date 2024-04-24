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
    const res = await axios.get('/bookmarks/product');
    const wishlist = res.data.item;
    setData(wishlist);
  };

  const wishList = data?.map((item) => <UserWishListItem key={item._id} item={item} />);

  return (
    <>
      <div className="item-wrapper">
        <div className="main-title">
          <p className="main-contents-title">위시리스트</p>
        </div>
        <div className="main-content">
          <div className="card-container">
            <ul className="grid">{wishList}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserWishList;
