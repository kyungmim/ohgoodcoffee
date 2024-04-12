import cover from '@public/cover-1.jpg';
import coffee_1 from '@public/coffee-1.jpg';
import coffee_2 from '@public/coffee-2.jpg';
import coffee_3 from '@public/coffee-3.jpg';
import MarketListItem from '@pages/market/MarketListItem';

function Mainpage() {
  return (
    <>
      <main className="main">
        <div className="main-header">
          <img className="main-cover" src={cover} alt="커피 커버 이미지" />
        </div>

        <div className="main-contents">
          <div className="l_wrapper">
            <div className="contents-header">
              <h2 className="content-title">COVER STORYE</h2>
            </div>

            <div className="main-coverstory">
              <section className="coverstory-list">
                <div className="coverstory-list-cover">
                  <img className="coverstory-list-cover-src" src={coffee_1} alt="커피이미지" />
                </div>

                <div className="coverstory-list-item">
                  <h2 className="coverstory-list-title"># Title</h2>
                  <p className="coverstorylist-list-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                  <button className="button button-small btn-null" type="button">
                    MORE
                  </button>
                </div>
              </section>

              <section className="coverstory-list">
                <div className="coverstory-list-cover">
                  <img className="coverstory-list-cover-src" src={coffee_2} alt="커피이미지" />
                </div>

                <div className="coverstory-list-item">
                  <h2 className="coverstory-list-title"># Title</h2>
                  <p className="coverstorylist-list-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                  <button className="button button-small btn-null" type="button">
                    MORE
                  </button>
                </div>
              </section>

              <section className="coverstory-list">
                <div className="coverstory-list-cover">
                  <img className="coverstory-list-cover-src" src={coffee_3} alt="커피이미지" />
                </div>

                <div className="coverstory-list-item">
                  <h2 className="coverstory-list-title"># Title</h2>
                  <p className="coverstorylist-list-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                  <button className="button button-small btn-null" type="button">
                    MORE
                  </button>
                </div>
              </section>
            </div>

            <div className="section-grid">
              <div className="contents-header">
                <h2 className="content-title">NEW PRODUCT</h2>
              </div>
              <ul className="grid">
                <MarketListItem />
                <MarketListItem />
                <MarketListItem />
                <MarketListItem />
              </ul>
            </div>
          </div>
          {/* <!-- l wrapper --> */}
        </div>
      </main>
    </>
  );
}

export default Mainpage;
