import profile from '@assets/profile.svg';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useQuery } from '@tanstack/react-query';
import useUserStore from '@zustand/store';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from '@pages/mypage/user/UserMypage.module.css';

function UserMypageHeader() {
  const { user } = useUserStore();
  const url = useLocation().pathname;
  const axios = useCustomAxios();
  const [amount, setAmount] = useState([]);

  const { data } = useQuery({
    queryKey: ['orders'],
    queryFn: () => axios.get('/orders'),
    select: (response) => response.data,
    suspense: true,
  });

  useEffect(() => {
    setAmount(data.item);
  }, [data]);

  const totalMoney =
    amount &&
    amount
      .map((item) => {
        return item?.cost?.total;
      })
      .reduce((acc, curr) => acc + curr, 0);

  return (
    <div className={styles.container}>
      <div className={styles.l_wrapper}>
        <div className={styles.mainContainer}>
          <div className={styles.sidebar}>
            <ul className={styles.menuList}>
              <li className={`${styles.menuItem} ${url === '/mypage' ? `${styles.isActive}` : ''}`} data-menu-id="/mypage">
                <Link to="/mypage">주문 내역 조회</Link>
              </li>
              <li className={`${styles.menuItem} ${url === '/mypage/wishlist' ? `${styles.isActive}` : ''}`} data-menu-id="/mypage/wishlist">
                <Link to="/mypage/wishlist">위시리스트</Link>
              </li>
              <li className={`${styles.menuItem} ${url === '/mypage/review' ? `${styles.isActive}` : ''}`} data-menu-id="/mypage/review">
                <Link to="/mypage/review">내가 쓴 리뷰</Link>
              </li>
              <li className={`${styles.menuItem} ${url === '/mypage/userinfo' ? `${styles.isActive}` : ''}`} data-menu-id="/mypage/userinfo">
                <Link to="/mypage/userinfo">회원정보</Link>
              </li>
            </ul>
            <ul className={styles.menuListMo}>
              <li className={`${styles.menuItem} ${url === '/mypage' ? `${styles.isActive}` : ''}`} data-menu-id="/mypage">
                <Link to="/mypage">주문 내역 조회</Link>
              </li>
              <li className={`${styles.menuItem} ${url === '/mypage/wishlist' ? `${styles.isActive}` : ''}`} data-menu-id="/mypage/wishlist">
                <Link to="/mypage/wishlist">위시리스트</Link>
              </li>
              <li className={`${styles.menuItem} ${url === '/mypage/review' ? `${styles.isActive}` : ''}`} data-menu-id="/mypage/review">
                <Link to="/mypage/review">내가 쓴 리뷰</Link>
              </li>
              <li className={`${styles.menuItem} ${url === '/mypage/userinfo' ? `${styles.isActive}` : ''}`} data-menu-id="/mypage/userinfo">
                <Link to="/mypage/userinfo">회원정보</Link>
              </li>
            </ul>
          </div>
          <div className={styles.inner}>
            <div className={styles.userInfo}>
              <div className={styles.profile}>
                <div className={styles.profileCover}>
                  <img
                    className={styles.profileCoverSrc}
                    src={user.profileImage ? `${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${user.profileImage}` : profile}
                    alt="회원 프로필 사진"
                  />
                  <input type="file" style={{ display: 'none' }} />
                </div>
              </div>
              <div className={styles.profileContent}>
                <div className={styles.profileLeft}>
                  <p>
                    <strong>{user.name}</strong>님 안녕하세요 :)
                  </p>
                  <p>누적 구매 금액 : {totalMoney.toLocaleString('ko-KR')}원</p>
                </div>
                <p className={styles.profileType}>{user.type}</p>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMypageHeader;
