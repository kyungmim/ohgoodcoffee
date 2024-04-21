import TopLine from '@public/ogc-top-line.svg';
import MarketListItem from './MarketListItem';
import { useQuery } from '@tanstack/react-query';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useEffect, useState } from 'react';
import moment from 'moment';

function MarketList() {
  const axios = useCustomAxios();
  const [sortProductList, setSortProductList] = useState([]);
  const [sortType, setSortType] = useState('new');

  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: () => axios.get('/products'),
    select: (response) => response.data.item,
  });

  useEffect(() => {
    console.log('DATAAA', data);
    setSortProductList(data);
  }, [data]);

  useEffect(() => {
    if (data == undefined) {
      return;
    }

    let sortedArr;
    if (sortType == 'lowPrice') {
      sortedArr = data.sort((a, b) => b.price - a.price);
    } else if (sortType == 'highPrice') {
      sortedArr = data.sort((a, b) => a.price - b.price);
    } else if (sortType == 'new') {
      console.log('qqqqq', data);
      let arr = data.map((item) => ({ ...item, createdAt: item.createdAt.substring(0, 16) }));
      sortedArr = arr.sort((a, b) => {
        const dateA = moment(a, 'YYYY.MM.DD HH:mm');
        const dateB = moment(b, 'YYYY.MM.DD HH:mm');
        return dateA - dateB;
      });
    } else if (sortType == 'sales') {
      sortedArr = data.sort((a, b) => b.buyQuantity - a.buyQuantity);
    } else if (sortType == 'registration') {
      let arr = data.map((item) => ({ ...item, createdAt: item.createdAt.substring(0, 16) }));
      sortedArr = arr.sort((a, b) => {
        const dateA = moment(a, 'YYYY.MM.DD HH:mm');
        const dateB = moment(b, 'YYYY.MM.DD HH:mm');
        return dateA - dateB;
      });
    }
    console.log('GG', sortedArr);
    setSortProductList(sortedArr);
  }, [sortType]);

  const handleSelectChange = (e) => {
    console.log('e.target', e.target.value);
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

          <div className="section-grid">
            <ul className="grid">
              {sortProductList?.map((item) => (
                <MarketListItem key={item._id} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default MarketList;
