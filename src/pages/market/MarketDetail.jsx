import Plus from '@public/plus.svg';
import Minus from '@public/dash_icon.svg';

function MarketDetail() {
  return (
    <>
      <section className="section type_market-desc">
        <div className="l_wrapper">
          <div className="market-overview-top">
            <img className="market-overview-cover" src="public/yozm.png" alt="요즘 그릭요거트" />
            <div className="market-overview-desc">
              <div className="overview-header">
                <p className="overview-title">카카오그래놀라 그릭요거트 120g X 3개</p>
                <div className="overview-row">
                  <p className="overview-price">35,000 원</p>
                  <div className="overview-wishlist">
                    <img className="wishlist-icon" src="src/assets/wishlist.png" />
                    <p className="wishlist-count">0</p>
                  </div>
                </div>
              </div>

              <div className="overview-contents">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>

              <div className="overview-selling-count">
                <p className="overview-selling-title">수량</p>
                <div>
                  <div className="selling-row">
                    <div className="selling-icon">
                      <img className="selling-icon down" src={Minus} />
                      <p className="selling-pick">1</p>
                      <img className="selling-icon up" src={Plus} />
                    </div>
                    <p className="selling-price">35,000 원</p>
                  </div>
                </div>
              </div>
              <div className="selling-btns">
                <button className="button button-large btn-Fill" type="submit">
                  구매하기
                </button>
                <button className="button button-large btn-null" type="submit">
                  장바구니
                </button>
              </div>
            </div>
          </div>
          <div className="market-overview-bottom">
            <img src="public/yozm-descs.png" alt="yozm 상세정보" />
          </div>
        </div>
      </section>
    </>
  );
}

export default MarketDetail;
