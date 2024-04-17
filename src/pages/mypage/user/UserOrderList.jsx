import useCustomAxios from '@hooks/useCustomAxios.mjs';
import UserOrderListItem from '@pages/mypage/user/UserOrderListItem';
import { useEffect, useState } from 'react';

function UserOrderList() {
  const axios = useCustomAxios();
  const [data, setData] = useState();

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const response = await axios.get('/orders');
    setData(response.data);
  };

  const orderList = data?.item.map((item) => <UserOrderListItem key={item._id} item={item} />);

  return (
    <>
      <div className="l_wrapper">
        <div className="item-wrapper">
          <div className="main-title">
            <p className="main-contents-title">주문 내역 조회</p>
          </div>
          <div className="main-content">
            <div className="order">{orderList}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserOrderList;
