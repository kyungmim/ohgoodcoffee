import marketTopLogo from '@/assets/market-top-logo.svg';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';

function MarketList() {
  return (
    <>
      <Header />
      <section className="section type_market">
        <div className="l_wrapper">
          <div className="section-logo">
            <img className="market-logo" src={marketTopLogo} alt="마켓 손 모양 이미지" />
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
              <li className="card">
                <img className="card-cover" src="src/assets/GBH-mug.jpeg" alt="머그컵" />
                <div className="card-contents">
                  <span className="card-brand">지비에이치</span>
                  <h4 className="card-title mini">GBH X NIKKO CUP & SAUCER</h4>
                </div>
                <p className="card-price">15,000 원</p>
                <div className="card-state">
                  <p className="card-state new">NEW</p>
                  <p className="card-state best">BEST</p>
                </div>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/GBH-mug.jpeg" alt="머그컵" />
                <div className="card-contents">
                  <span className="card-brand">지비에이치</span>
                  <h4 className="card-title mini">GBH X NIKKO CUP & SAUCER</h4>
                </div>
                <p className="card-price">15,000 원</p>
                <div className="card-state">
                  <p className="card-state new">NEW</p>
                </div>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/GBH-mug.jpeg" alt="머그컵" />
                <div className="card-contents">
                  <span className="card-brand">지비에이치</span>
                  <h4 className="card-title mini">GBH X NIKKO CUP & SAUCER</h4>
                </div>
                <p className="card-price">15,000 원</p>
                <div className="card-state">
                  <p className="card-state new">NEW</p>
                </div>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/GBH-mug.jpeg" alt="머그컵" />
                <div className="card-contents">
                  <span className="card-brand">지비에이치</span>
                  <h4 className="card-title mini">GBH X NIKKO CUP & SAUCER</h4>
                </div>
                <p className="card-price">15,000 원</p>
                <div className="card-state">
                  <p className="card-state new">NEW</p>
                  <p className="card-state best">BEST</p>
                </div>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/GBH-mug.jpeg" alt="머그컵" />
                <div className="card-contents">
                  <span className="card-brand">지비에이치</span>
                  <h4 className="card-title mini">GBH X NIKKO CUP & SAUCER</h4>
                </div>
                <p className="card-price">15,000 원</p>
                <div className="card-state">
                  <p className="card-state new">NEW</p>
                  <p className="card-state best">BEST</p>
                </div>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/GBH-mug.jpeg" alt="머그컵" />
                <div className="card-contents">
                  <span className="card-brand">지비에이치</span>
                  <h4 className="card-title mini">GBH X NIKKO CUP & SAUCER</h4>
                </div>
                <p className="card-price">15,000 원</p>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/GBH-mug.jpeg" alt="머그컵" />
                <div className="card-contents">
                  <span className="card-brand">지비에이치</span>
                  <h4 className="card-title mini">GBH X NIKKO CUP & SAUCER</h4>
                </div>
                <p className="card-price">15,000 원</p>
                <div className="card-state">
                  <p className="card-state best">BEST</p>
                </div>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/GBH-mug.jpeg" alt="머그컵" />
                <div className="card-contents">
                  <span className="card-brand">지비에이치</span>
                  <h4 className="card-title mini">GBH X NIKKO CUP & SAUCER</h4>
                </div>
                <p className="card-price">15,000 원</p>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/GBH-mug.jpeg" alt="머그컵" />
                <div className="card-contents">
                  <span className="card-brand">지비에이치</span>
                  <h4 className="card-title mini">GBH X NIKKO CUP & SAUCER</h4>
                </div>
                <p className="card-price">15,000 원</p>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/GBH-mug.jpeg" alt="머그컵" />
                <div className="card-contents">
                  <span className="card-brand">지비에이치</span>
                  <h4 className="card-title mini">GBH X NIKKO CUP & SAUCER</h4>
                </div>
                <p className="card-price">15,000 원</p>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/GBH-mug.jpeg" alt="머그컵" />
                <div className="card-contents">
                  <span className="card-brand">지비에이치</span>
                  <h4 className="card-title mini">GBH X NIKKO CUP & SAUCER</h4>
                </div>
                <p className="card-price">15,000 원</p>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/GBH-mug.jpeg" alt="머그컵" />
                <div className="card-contents">
                  <span className="card-brand">지비에이치</span>
                  <h4 className="card-title mini">GBH X NIKKO CUP & SAUCER</h4>
                </div>
                <p className="card-price">15,000 원</p>
                <div className="card-state">
                  <p className="card-state best">BEST</p>
                </div>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/GBH-mug.jpeg" alt="머그컵" />
                <div className="card-contents">
                  <span className="card-brand">지비에이치</span>
                  <h4 className="card-title mini">GBH X NIKKO CUP & SAUCER</h4>
                </div>
                <p className="card-price">15,000 원</p>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/GBH-mug.jpeg" alt="머그컵" />
                <div className="card-contents">
                  <span className="card-brand">지비에이치</span>
                  <h4 className="card-title mini">GBH X NIKKO CUP & SAUCER</h4>
                </div>
                <p className="card-price">15,000 원</p>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/GBH-mug.jpeg" alt="머그컵" />
                <div className="card-contents">
                  <span className="card-brand">지비에이치</span>
                  <h4 className="card-title mini">GBH X NIKKO CUP & SAUCER</h4>
                </div>
                <p className="card-price">15,000 원</p>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/GBH-mug.jpeg" alt="머그컵" />
                <div className="card-contents">
                  <span className="card-brand">지비에이치</span>
                  <h4 className="card-title mini">GBH X NIKKO CUP & SAUCER</h4>
                </div>
                <p className="card-price">15,000 원</p>
                <div className="card-state">
                  <p className="card-state best">BEST</p>
                  <p className="card-state soldout">SOLD OUT</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default MarketList;
