import Loading from '@components/Loading';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import UserWishListItem from '@pages/mypage/user/UserWishListItem';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

function UserWishList() {
  const axios = useCustomAxios();
  const [wishList, setWishList] = useState([]);

  const { data, isLoading } = useQuery({
    queryKey: ['bookmarks'],
    queryFn: () => axios.get('/bookmarks/product'),
    select: (response) => response.data,
    suspense: true,
  });

  useEffect(() => {
    if (data) setWishList(data.item);
  }, [data]);

  const renderWishList = wishList && wishList.map((item) => <UserWishListItem key={item._id} item={item} />);

  return (
    <>
      <div className="item-wrapper">
        <div className="main-title">
          <p className="main-contents-title">위시리스트</p>
        </div>
        <div className="main-content">
          <div className="card-container">{isLoading ? <Loading /> : <ul className="grid">{renderWishList}</ul>}</div>
        </div>
      </div>
    </>
  );
}

export default UserWishList;
