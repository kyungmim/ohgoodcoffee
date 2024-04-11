function Mainpage() {
  return (
    <>
      <main className="main">
        <div className="main-header">
          <img className="main-cover" src="public/cover-1.jpg" alt="커피 커버 이미지" />
        </div>

        <div className="main-contents">
          <div className="l_wrapper">
            <div className="contents-header">
              <h2 className="content-title">COVER STORYE</h2>
            </div>

            <div className="main-coverstory">
              <section className="coverstory-list">
                <div className="coverstory-list-cover">
                  <img className="coverstory-list-cover-src" src="public/coffee-1.jpg" alt="커피이미지" />
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
                  <img className="coverstory-list-cover-src" src="public/coffee-2.jpg" alt="커피이미지" />
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
                  <img className="coverstory-list-cover-src" src="public/coffee-3.jpg" alt="커피이미지" />
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
                <li className="card">
                  <img className="card-cover" src="public/GBH-mug.jpeg" alt="머그컵" />
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
                  <img className="card-cover" src="public/GBH-mug.jpeg" alt="머그컵" />
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
                  <img className="card-cover" src="public/GBH-mug.jpeg" alt="머그컵" />
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
                  <img className="card-cover" src="public/GBH-mug.jpeg" alt="머그컵" />
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
