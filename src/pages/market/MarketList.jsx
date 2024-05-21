import TopLine from '@assets/ogc-top-line.svg';
import MarketListItem from './MarketListItem';
import { useQuery } from '@tanstack/react-query';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useEffect, useState } from 'react';
import Pagination from '@components/Pagination';
import { useSearchParams } from 'react-router-dom';
import styles from '@pages/market/Market.module.css';

function MarketList() {
  const axios = useCustomAxios();
  const [sortType, setSortType] = useState('new');
  const [searchParams] = useSearchParams();
  const [marketList, setMarketList] = useState([]);

  const getParams = (sortType) => {
    const params = {
      page: searchParams.get('page') || 1, // 페이지 파라미터가 없는 경우 기본값 1
      limit: 8,
    };

    if (sortType === 'lowPrice' || sortType === 'highPrice') {
      params.sort = JSON.stringify({ price: sortType === 'lowPrice' ? 1 : -1 });
    } else if (sortType === 'isNew') {
      params.custom = JSON.stringify({ 'extra.isNew': true });
    } else if (sortType === 'isBest') {
      params.custom = JSON.stringify({ 'extra.isBest': true });
    }
    return params;
  };

  const { data } = useQuery({
    queryKey: ['products', sortType, searchParams.get('page')],
    queryFn: () =>
      axios.get('/products', {
        params: getParams(sortType),
      }),
    select: (response) => response.data,
    suspense: true,
  });

  useEffect(() => {
    if (data) setMarketList(data.item);
  }, [data]);

  const handleSelectChange = (e) => {
    setSortType(e.target.value);
  };

  const itemList = marketList?.map((item) => <MarketListItem key={item._id} item={item} />);

  return (
    <>
      <section className={`${styles.section} ${styles.typeMarket}`}>
        <div className={styles.l_wrapper}>
          <div className={styles.sectionLogo}>
            <img className={styles.marketLogo} src={TopLine} alt="손 모양 이미지" />
            <span className={styles.marketLogoSlogan}>COFFEE.HUMAN.LOVE LIFE</span>
          </div>

          <div className={styles.sectionFilter}>
            <p className={styles.sectionCount}>POSTING</p>
            <span className={`${styles.sectionCount} ${styles.num}`}>{itemList?.length}</span>
            <div className={styles.sectionAside}>
              <select className={styles.dropMenu} id="type" onChange={handleSelectChange}>
                <option value="registration">등록순</option>
                <option value="lowPrice">낮은가격순</option>
                <option value="highPrice">높은가격순</option>
                <option value="isNew">신상품순</option>
                <option value="isBest">판매순</option>
              </select>
            </div>
          </div>
          <div className={styles.sectionGrid}>
            <ul className="grid">{itemList}</ul>
          </div>


          <Pagination totalCount={data?.pagination.totalPages} currentPage={data?.pagination.page} />
        </div>
      </section>
    </>
  );
}

export default MarketList;
