import TopLine from '@public/ogc-top-line.svg';
import MarketListItem from './MarketListItem';
import Api from '@utils/Api';
import { useEffect } from 'react';
import useUserStore from '@zustand/store';

function MarketList() {
  const { products, setProducts } = useUserStore();
  const { useGetProducts } = Api();
  // const { data } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: () => axios.get('/products'),
  //   select: (response) => response.data,
  // });
  const { data } = useGetProducts();

  useEffect(() => {
    console.log('DAtA', data);
    setProducts(data);
  }, [data]);
  // useGetProducts()

  const itemList = products?.map((item) => <MarketListItem key={item._id} item={item} />);

  // // const itemList = data?.item.map((item) => <MarketListItem key={item._id} item={item} />);

  // console.log('itemList', itemList);

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
              <select className="drop-menu" id="type">
                <option selected>등록순</option>
                <option>신상품순</option>
                <option>추천순</option>
                <option>판매순</option>
              </select>
            </div>
          </div>

          <div className="section-grid">
            <ul className="grid">{itemList}</ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default MarketList;
