import useUserStore from '@zustand/store.js';
import useModalStore from '@zustand/useModalStore.mjs';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const { user } = useUserStore();
  const openModal = useModalStore((state) => state.openModal);
  const clearUserIdStorage = useUserStore.persist.clearStorage;
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const clickLogin = (e) => {
    e.preventDefault();
    if (user == null) {
      openModal({
        content: '로그인 후 이용 가능합니다.<br/>로그인 페이지로 이동하시겠습니까?',
        callbackButton: {
          확인: () => {
            navigate('/users/login', { state: { from: '/' } });
          },
          취소: '',
        },
      });
    } else if (user.type == 'user') {
      navigate('/mypage');
    } else if (user.type == 'seller') {
      navigate('/seller/mypage');
    }
  };

  const onClickLogout = () => {
    if (user) {
      openModal({
        content: `${user.name} 님 로그아웃되었습니다 <br /> 이용해주셔서 감사합니다. :)`,
        callbackButton: {
          확인: () => {
            navigate('/', { state: { from: '/' } });
            window.location.reload();
          },
        },
      });
    }
    clearUserIdStorage();
  };

  const hadlemenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header className="header">
        <div className="l_wrapper">
          <div className="header-nav nav-box">
            <ul className="pc-nav">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/magazine">Magazine</Link>
              </li>
              <li>
                <Link to="/market">Market</Link>
              </li>
              <li className="logo pc">
                <Link to="/mainpage">Oh Good Coffee</Link>
              </li>
              <li>{user ? <button onClick={onClickLogout}>Logout</button> : <Link to="/users/login">Login</Link>}</li>
              <li>
                <Link onClick={(e) => clickLogin(e)} to="/mypage">
                  My
                </Link>
              </li>
              <li>
                <Link to="/carts">Cart</Link>
              </li>
            </ul>
            <div className="hamburgerMenu">
              <div className="hamburger-nomal">
                <Link to="/mainpage" className="logo mo">
                  Oh Good Coffee
                </Link>
                <button className="menuopen" onClick={hadlemenu}>
                  버튼
                </button>
              </div>
              {menu && (
                <ul className="mo-nav" onClick={hadlemenu}>
                  <li>
                    <button className="menuclose" onClick={hadlemenu}>
                      닫기
                    </button>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/magazine">Magazine</Link>
                  </li>
                  <li>
                    <Link to="/market">Market</Link>
                  </li>
                  <li>
                    <Link to="/carts">Cart</Link>
                  </li>
                  <div className="hamburger-footer">
                    <li>
                      {user ? (
                        <button className="logout" onClick={onClickLogout}>
                          Logout
                        </button>
                      ) : (
                        <Link to="/users/login">Login</Link>
                      )}
                    </li>
                    <li>
                      <Link onClick={(e) => clickLogin(e)} to="/mypage">
                        My
                      </Link>
                    </li>
                  </div>
                </ul>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
