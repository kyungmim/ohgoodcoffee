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
              <Link to="#">About</Link>
            </li>
            <li>
              <a href="/magazine">Magazine</a>
            </li>
            <li>
              <a href="#">Market</a>
            </li>
            <li className="logo">
              <a href="#">
                <img src={logo} alt="로고" />
              </a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">My</a>
            </li>
            <li>
              <a href="#">Cart</a>
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
