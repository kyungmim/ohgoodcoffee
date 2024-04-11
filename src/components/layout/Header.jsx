import logo from '@public/Logo.svg';
import search from '@public/search_icon.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="header">
        <div className="l_wrapper">
          <ul className="header-nav">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/magazine">Magazine</Link>
            </li>
            <li>
              <Link to="/market">Market</Link>
            </li>
            <li className="logo">
              <Link to="/home">
                <img src={logo} alt="로고" />
              </Link>
            </li>
            <li>
              <Link to="/users/login">Login</Link>
            </li>
            <li>
              <Link to="/mypage">My</Link>
            </li>
            <li>
              <Link to="/seller/mypage">Seller My</Link>
            </li>
            <li>
              <Link to="/carts">Cart</Link>
            </li>
            <li>
              <img className="search_icon" src={search} alt="돋보기 아이콘" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
