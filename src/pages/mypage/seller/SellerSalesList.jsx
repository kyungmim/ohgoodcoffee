import useCustomAxios from '@hooks/useCustomAxios.mjs';
import SellerSalesListItem from '@pages/mypage/seller/SellerSalesListItem';
import { useEffect, useState } from 'react';
import SellerSalesListEdit from './SellerSalesListEdit';
import { useQuery } from '@tanstack/react-query';
import Loading from '@components/Loading';

function SellerSalesList() {
  const axios = useCustomAxios();
  const [edit, setEdit] = useState(true);
  const [salesList, setSalesList] = useState([]);

  const clickEdit = () => {
    setEdit(!edit);
  };

  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => axios.get('/seller/products'),
    select: (response) => response.data,
    suspense: true,
  });

  useEffect(() => {
    if (data) setSalesList(data.item);
  }, [data]);

  const menuClick = (e) => {
    const clickedListItem = e.target.closest('.click-item');
    if (!clickedListItem) return;

    const listItemContainer = clickedListItem.parentNode;
    listItemContainer.childNodes.forEach((item) => {
      if (item.nodeType === 1) {
        item.classList.remove('click-cover');
      }
    });
    clickedListItem.classList.add('click-cover');
  };

  const renderedSalesList = salesList.map((item) => <SellerSalesListItem item={item} key={item._id} />);

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
              {isLoading ? (
                <Loading />
              ) : (
                <ul className="grid" onClick={menuClick}>
                  {renderedSalesList}
                </ul>
              )}
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
