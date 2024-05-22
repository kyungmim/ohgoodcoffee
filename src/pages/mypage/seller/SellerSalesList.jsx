import useCustomAxios from '@hooks/useCustomAxios.mjs';
import SellerSalesListItem from '@pages/mypage/seller/SellerSalesListItem';
import { useEffect, useState } from 'react';
import SellerSalesListEdit from './SellerSalesListEdit';
import { useQuery } from '@tanstack/react-query';
import Loading from '@components/Loading';
import styles from '@pages/mypage/seller/SellerMypage.module.css';

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
          <div className={styles.itemWrapper}>
            <div className={styles.mainTitle}>
              <p className={styles.mainContentsTitle}>상품 목록 조회</p>
              <div className={styles.salesButton}>
                <button className={`${styles.button} ${styles.buttonSmall} ${styles.typeBtnCart}`} onClick={clickEdit}>
                  상품 수정
                </button>
              </div>
            </div>
          </div>
          <div className={styles.mainContent}>
            <div className={styles.cardContainer}>
              {isLoading ? (
                <Loading />
              ) : (
                <ul className={styles.grid} onClick={menuClick}>
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
