import TopLine from '@assets/ogc-top-line.svg';
import MarketListItem from './MarketListItem';
import { useQuery } from '@tanstack/react-query';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useEffect, useState } from 'react';
import Pagination from '@components/Pagination';
import Loading from '@components/Loading';
import { useSearchParams } from 'react-router-dom';

function MarketList() {
  const axios = useCustomAxios();
  const [sortType, setSortType] = useState('new');
  const [searchParams] = useSearchParams();

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

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['products', sortType, searchParams.get('page')],
    queryFn: () =>
      axios.get('/products', {
        params: getParams(sortType),
      }),
    select: (response) => response.data,
    suspense: true,
  });

  useEffect(() => {
    refetch();
    window.scrollTo(0, 0);
  }, [searchParams.toString()]);

  const handleSelectChange = (e) => {
    setSortType(e.target.value);
  };

  const itemList = data.item?.map((item) => <MarketListItem key={item._id} item={item} />);

  return (
    <>
      <section className="section type_market">
        <div className="l_wrapper">
          <div className="section-logo">
            <img className="market-logo" src={TopLine} alt="손 모양 이미지" />
            <span className="market-logo-slogan">COFFEE.HUMAN.LOVE LIFE</span>
          </div>

          <div className="section-filter">
            <p className="section-count">POSTING</p>
            <span className="section-count num">{itemList?.length}</span>
            <div className="section-aside">
              <select className="drop-menu" id="type" onChange={handleSelectChange}>
                <option value="registration">등록순</option>
                <option value="lowPrice">낮은가격순</option>
                <option value="highPrice">높은가격순</option>
                <option value="isNew">신상품순</option>
                <option value="isBest">판매순</option>
              </select>
            </div>
          </div>

          <div className="section-grid">{isLoading ? <Loading /> : <ul className="grid">{itemList}</ul>}</div>

          <Pagination totalCount={data?.pagination.totalPages} currentPage={data?.pagination.page} />
        </div>
      </section>
    </>
  );
}

export default MarketList;
