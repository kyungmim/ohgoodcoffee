import { Link } from 'react-router-dom';

function MarketListItem() {
  return (
    <>
      <li>
        <Link className="card" to="/market/detail">
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
        </Link>
      </li>
    </>
  );
}

export default MarketListItem;
