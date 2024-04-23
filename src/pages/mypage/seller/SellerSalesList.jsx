import useCustomAxios from '@hooks/useCustomAxios.mjs';
import SellerSalesListItem from '@pages/mypage/seller/SellerSalesListItem';
import { useEffect, useRef, useState } from 'react';
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

  const ulRef = useRef(null);

  const menuClick = (e) => {
    ulRef.current.childNodes.forEach((item) => item.classList.remove('test'));
    e.target.parentNode.classList.add('test');
  };

  const salesList = data?.item.map((item) => <SellerSalesListItem item={item} key={item._id} menuClick={menuClick} />);

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
              <ul className="grid" onClick={menuClick} ref={ulRef}>
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
