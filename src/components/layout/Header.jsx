import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useUserStore from '@zustand/store.js';
import useModalStore from '@zustand/useModalStore.mjs';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '@components/layout/Header.module.css';

function Header() {
  const axios = useCustomAxios();
  const { user, cartCount, setCartCount } = useUserStore();
  const openModal = useModalStore((state) => state.openModal);
  const clearUserIdStorage = useUserStore.persist.clearStorage;
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (user) {
      fetchCartCount();
    } else {
      setCartCount(null);
    }
  }, [user]);

  const fetchCartCount = async () => {
    try {
      const response = await axios.get('/carts');
      if (response.data && response.data.item && Array.isArray(response.data.item)) {
        const totalQuantity = response.data.item.reduce((acc, item) => acc + item.quantity, 0);
        setCartCount(totalQuantity);
      } else {
        throw new Error('Invalid data structure or empty data');
      }
    } catch (error) {
      console.error('Error fetching cart count:', error);
    }
  };

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

  const clickCart = (e) => {
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
    } else {
      navigate('/carts');
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
      <header className={styles.header}>
        <div className="l_wrapper">
          <div>
            <ul className={styles.pcNav}>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/magazine">Magazine</Link>
              </li>
              <li>
                <Link to="/market">Market</Link>
              </li>
              <li className={`${styles.logo} ${styles.pc}`}>
                <Link to="/mainpage">Oh Good Coffee</Link>
              </li>
              <li>{user ? <button onClick={onClickLogout}>Logout</button> : <Link to="/users/login">Login</Link>}</li>
              <li>
                <Link onClick={(e) => clickLogin(e)} to="/mypage">
                  My
                </Link>
              </li>
              <li className={styles.cartIcon}>
                <Link onClick={(e) => clickCart(e)} to="/carts">
                  Cart
                </Link>
                <span className={styles.cartCount}>{cartCount === 0 ? null : cartCount}</span>
              </li>
            </ul>
            <div className={styles.hamburgerMenu}>
              <div className={styles.hamburgerNomal}>
                <Link to="/mainpage" className={`${styles.logo} ${styles.mo}`}>
                  Oh Good Coffee
                </Link>
                <button className={styles.menuOpen} onClick={hadlemenu}>
                  <span className="hidden">버튼</span>
                </button>
              </div>
              {menu && (
                <ul className={styles.moNav} onClick={hadlemenu}>
                  <li>
                    <button className={styles.menuClose} onClick={hadlemenu}>
                      <span className="hidden">닫기</span>
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
                  <div className={styles.hamburgerFooter}>
                    <li>
                      {user ? (
                        <button className={styles.logout} onClick={onClickLogout}>
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
