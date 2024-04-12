import TopLine from '@public/ogc-top-line.svg';
import MarketListItem from './MarketListItem';

function MarketList() {
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
            <span className="section-count num">16</span>
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
            <ul className="grid">
              <MarketListItem />
              <MarketListItem />
              <MarketListItem />
              <MarketListItem />
              <MarketListItem />
              <MarketListItem />
              <MarketListItem />
              <MarketListItem />
              <MarketListItem />
              <MarketListItem />
              <MarketListItem />
              <MarketListItem />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default MarketList;
