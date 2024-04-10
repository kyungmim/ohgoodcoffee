import Mug from '@public/GBH-mug.jpeg';

function UserWishListItem() {
  return (
    <div className="container">
      <div className="l_wrapper">
        <div className="item-wrapper">
          <div className="main-content">
            <div className="card-container">
              <ul className="grid">
                <li className="card">
                  <img className="card-cover" src={Mug} alt="머그컵" />
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
                  <img className="card-cover" src={Mug} alt="머그컵" />
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
                  <img className="card-cover" src={Mug} alt="머그컵" />
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
                  <img className="card-cover" src={Mug} alt="머그컵" />
                  <div className="card-contents">
                    <span className="card-brand">지비에이치</span>
                    <h4 className="card-title mini">GBH X NIKKO CUP & SAUCER</h4>
                  </div>
                  <p className="card-price">15,000 원</p>
                </li>

                <li className="card">
                  <img className="card-cover" src={Mug} alt="머그컵" />
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
                  <img className="card-cover" src={Mug} alt="머그컵" />
                  <div className="card-contents">
                    <span className="card-brand">지비에이치</span>
                    <h4 className="card-title mini">GBH X NIKKO CUP & SAUCER</h4>
                  </div>
                  <p className="card-price">15,000 원</p>
                </li>

                <li className="card">
                  <img className="card-cover" src={Mug} alt="머그컵" />
                  <div className="card-contents">
                    <span className="card-brand">지비에이치</span>
                    <h4 className="card-title mini">GBH X NIKKO CUP & SAUCER</h4>
                  </div>
                  <p className="card-price">15,000 원</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserWishListItem;
