import Loading from '@components/Loading';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import UserOrderListItem from '@pages/mypage/user/UserOrderListItem';
import { useQuery } from '@tanstack/react-query';
import useUserStore from '@zustand/store';
import { useEffect, useState } from 'react';
import styles from '@pages/mypage/user/UserMypage.module.css';

function UserOrderList() {
  const axios = useCustomAxios();
  const { user } = useUserStore();
  const [orderList, setOrderList] = useState([]);

  const { data, isLoading } = useQuery({
    queryKey: ['orders'],
    queryFn: () => axios.get('/orders'),
    select: (response) => response.data,
    suspense: true,
  });

  useEffect(() => {
    if (data) setOrderList(data.item);
  }, [data]);

  const renderOrderList = orderList && orderList.filter((item) => user._id === item.user_id).map((item) => <UserOrderListItem key={item._id} item={item} isLoading={isLoading} />);

  return (
    <>
      <div className={styles.itemWrapper}>
        <div className={styles.mainTitle}>
          <p className={styles.mainContentsTitle}>주문 내역 조회</p>
        </div>
        <div className={styles.mainContent}>{isLoading ? <Loading /> : <div className={styles.order}>{renderOrderList}</div>}</div>
      </div>
    </>
  );
}

export default UserOrderList;
