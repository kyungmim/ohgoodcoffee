import TopLine from '@assets/ogc-top-line.svg';
import MarketListItem from './MarketListItem';
import { useQuery } from '@tanstack/react-query';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import Pagination from '@components/Pagination';
import Loading from '@components/Loading';
import { useSearchParams } from 'react-router-dom';

function MarketList() {
  const axios = useCustomAxios();
  const [sortProductList, setSortProductList] = useState([]);
  const [sortType, setSortType] = useState('new');
  const [searchParams] = useSearchParams();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: () => axios.get('/products', { params: { page: searchParams.get('page'), limit: 8 } }),
    select: (response) => response.data,
    suspense: true,
  });

  useEffect(() => {
    refetch();
    window.scrollTo(0, 0);
  }, [searchParams.toString()]);

  useEffect(() => {
    setSortProductList(data.item);
  }, [data]);

  const sortData = (data, sortType) => {
    switch (sortType) {
      case 'lowPrice':
        return [...data].sort((a, b) => a.price - b.price);
      case 'highPrice':
        return [...data].sort((a, b) => b.price - a.price);
      case 'new':
      case 'registration':
        return sortDateDescending(data);
      case 'sales':
        return [...data].sort((a, b) => b.buyQuantity - a.buyQuantity);
    }
  };

  const sortDateDescending = (data) => {
    let arr = [...data].map((item) => ({ ...item, createdAt: item.createdAt.substring(0, 16) }));
    return arr.sort((a, b) => {
      const dateA = moment(a.createdAt, 'YYYY.MM.DD HH:mm');
      const dateB = moment(b.createdAt, 'YYYY.MM.DD HH:mm');
      return dateA - dateB;
    });
  };

  // //data 나 sortType이 실제로 변경될 때만 정렬된 리스트를 다시 계산하도록 메모이제이션
  const sortedData = useMemo(() => {
    if (!data) return [];
    return sortData([...data.item], sortType);
  }, [data, sortType]);

  useEffect(() => {
    setSortProductList(sortedData);
  }, [sortedData]);

  useEffect(() => {
    if (!data) return;
    setSortProductList(() => {
      return sortData([...data.item], sortType);
    });
  }, [data, sortType]);

  const handleSelectChange = (e) => {
    setSortType(e.target.value);
  };

  const itemList = sortProductList?.map((item) => <MarketListItem key={item._id} item={item} />);

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
                <option value="new">신상품순</option>
                <option value="sales">판매순</option>
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
