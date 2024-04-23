import useCustomAxios from '@hooks/useCustomAxios.mjs';
import SellerSalesListItem from '@pages/mypage/seller/SellerSalesListItem';
import { useEffect, useState } from 'react';
import SellerSalesListEdit from './SellerSalesListEdit';

function SellerSalesList() {
  const axios = useCustomAxios();
  const [data, setData] = useState();
  const [edit, setEdit] = useState(true);

  const clickEdit = () => {
    setEdit(!edit);
  };

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const response = await axios.get('/seller/products');
    setData(response.data);
  };

  // const menuClick = (e) => {
  //   if (e.target.tagName === 'LI') return;
  //   e.target.closest('.click-item').forEach((item) => item.classList.remove('click-cover'));
  //   e.target.closest('.click-item').classList.add('click-cover');
  // };
  const menuClick = (e) => {
    const clickedListItem = e.target.closest('.click-item');
    if (!clickedListItem) return; // LI 요소가 아닌 다른 요소를 클릭한 경우 처리하지 않음

    const listItemContainer = clickedListItem.parentNode; // LI 요소를 감싸고 있는 컨테이너
    listItemContainer.childNodes.forEach((item) => {
      if (item.nodeType === 1) {
        // 엘리먼트 노드인 경우에만 처리
        item.classList.remove('click-cover');
      }
    });
    clickedListItem.classList.add('click-cover');
  };

  const salesList = data?.item.map((item) => <SellerSalesListItem item={item} key={item._id} />);

  return (
    <>
      {edit ? (
        <>
          <div className="item-wrapper">
            <div className="main-title">
              <p className="main-contents-title">상품 목록 조회</p>
              <div className="sales-button">
                <button className="button button-small type-btn-cart" onClick={clickEdit}>
                  상품 수정
                </button>
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="card-container">
              <ul className="grid" onClick={menuClick}>
                {salesList}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <SellerSalesListEdit />
      )}
    </>
  );
}

export default SellerSalesList;
