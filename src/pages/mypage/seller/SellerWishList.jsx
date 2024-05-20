import Loading from '@components/Loading';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import SellerWishListItem from '@pages/mypage/seller/SellerWishListItem';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function SellerWishList() {
  const axios = useCustomAxios();
  const [searchParams] = useSearchParams();
  const [wishList, setWishList] = useState([]);

  const { data, isLoading } = useQuery({
    queryKey: ['bookmarks'],
    queryFn: () => axios.get('/bookmarks/product'),
    select: (response) => response.data,
    suspense: true,
  });

  useEffect(() => {
    if (data) setWishList(data.item);
  }, [searchParams.toString()]);

  if (isLoading) <Loading />;

  const renderWishList = wishList && wishList.map((item) => <SellerWishListItem key={item._id} item={item} />);

  return (
    <>
      <div className="item-wrapper">
        <div className="main-title">
          <p className="main-contents-title">위시리스트</p>
        </div>
        <div className="main-content">
          <div className="card-container">
            <ul className="grid">{renderWishList}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerWishList;
