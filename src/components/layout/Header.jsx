import logo from '@public/Logo.svg';
import search from '@public/search_icon.svg';
import useUserStore from '@zustand/store.js';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const { user } = useUserStore();
  const clearUserIdStorage = useUserStore.persist.clearStorage;
  const navigate = useNavigate();

  const onClickLogout = () => {
    if (user) {
      navigate('mainpage');
      window.location.reload();
      clearUserIdStorage();
    }
  };

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
              <Link to="/mainpage">
                <img src={logo} alt="로고" />
              </Link>
            </li>
            <li>{user ? <button onClick={onClickLogout}>Logout</button> : <Link to="/users/login">Login</Link>}</li>
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
