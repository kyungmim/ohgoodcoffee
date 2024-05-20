import useCustomAxios from '@hooks/useCustomAxios.mjs';
import SellerOrderListItem from '@pages/mypage/seller/SellerOrderListItem';
import { useQuery } from '@tanstack/react-query';
import useUserStore from '@zustand/store';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function SellerOrderList() {
  const axios = useCustomAxios();
  const [searchParams] = useSearchParams();
  const { user } = useUserStore();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['orders'],
    queryFn: () => axios.get('/orders'),
    select: (response) => response.data,
    suspense: true,
  });

  const orderList = data?.item.filter((item) => user._id === item.user_id).map((item) => <SellerOrderListItem key={item._id} item={item} isLoading={isLoading} />);

  useEffect(() => {
    refetch();
  }, [searchParams.toString()]);

  return (
    <>
      <div className="item-wrapper">
        <div className="main-title">
          <p className="main-contents-title">주문 내역 조회</p>
        </div>
        <div className="main-content">
          <div className="order">{orderList}</div>
        </div>
      </div>
    </>
  );
}

export default SellerOrderList;
