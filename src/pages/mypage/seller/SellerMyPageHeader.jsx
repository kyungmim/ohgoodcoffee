import profile from '@assets/profile.svg';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useQuery } from '@tanstack/react-query';
import useUserStore from '@zustand/store';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from '@pages/mypage/seller/SellerMypage.module.css';

function SellerMyPageHeader() {
  const { user } = useUserStore();
  const url = useLocation().pathname;
  const axios = useCustomAxios();
  const [amount, setAmount] = useState([]);

  const { data } = useQuery({
    queryKey: ['orders'],
    queryFn: () => axios.get('/seller/orders'),
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
      <div className="l_wrapper">
        <div className={styles.mainContainer}>
          <div className={styles.sidebar}>
            <ul className={styles.menuList}>
              <li className={`${styles.menuItem} ${url == '/seller/mypage' ? `${styles.isActive}` : ''}`}>
                <Link to="/seller/mypage">상품 목록 조회</Link>
              </li>
              <li className={`${styles.menuItem} ${url == '/seller/mypage/upload' ? `${styles.isActive}` : ''}`}>
                <Link to="/seller/mypage/upload">상품 등록</Link>
              </li>
              <li className={`${styles.menuItem} ${url == '/seller/mypage/orderlist' ? `${styles.isActive}` : ''}`}>
                <Link to="/seller/mypage/orderlist">주문 내역 조회</Link>
              </li>
              <li className={`${styles.menuItem} ${url == '/seller/mypage/wishlist' ? `${styles.isActive}` : ''}`}>
                <Link to="/seller/mypage/wishlist">위시리스트</Link>
              </li>
              <li className={`${styles.menuItem} ${url == '/seller/mypage/sellerinfo' ? `${styles.isActive}` : ''}`}>
                <Link to="/seller/mypage/sellerinfo">회원 정보</Link>
              </li>
            </ul>
            <ul className={styles.menuListMo}>
              <li className={`${styles.menuItem} ${url == '/seller/mypage' ? `${styles.isActive}` : ''}`} data-menu-id="/seller/mypage">
                <Link to="/seller/mypage">상품 목록 조회</Link>
              </li>
              <li className={`${styles.menuItem} ${url === '/seller/mypage/upload' ? `${styles.isActive}` : ''}`} data-menu-id="/seller/mypage/upload">
                <Link to="/seller/mypage/upload">상품 등록</Link>
              </li>
              <li className={`${styles.menuItem}${url === '/seller/mypage/orderlist' ? `${styles.isActive}` : ''}`} data-menu-id="seller/mypage/orderlist">
                <Link to="/seller/mypage/orderlist">주문 내역 조회</Link>
              </li>
              <li className={`${styles.menuItem} ${url === '/seller/mypage/wishlist' ? `${styles.isActive}` : ''}`} data-menu-id="/seller/mypage/wishlist">
                <Link to="/seller/mypage/wishlist">위시리스트</Link>
              </li>
              <li className={`${styles.menuItem} ${url === '/seller/mypage/sellerinfo' ? `${styles.isActive}` : ''}`} data-menu-id="/seller/mypage/sellerinfo  ">
                <Link to="/seller/mypage/sellerinfo">회원 정보</Link>
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
                </div>
              </div>
              <div className={styles.profileContent}>
                <div className={styles.profileLeft}>
                  <p>
                    <strong>{user.name}</strong>님 안녕하세요 :)
                  </p>
                  <p>누적 판매 금액 : {totalMoney.toLocaleString('ko-KR')}원</p>
                </div>
                <p className={styles.profileType}>{user.type}</p>
              </div>
            </div>

            {/* <div className="main-content is_empty">
              <p className="empty-content">저장된 위시리스트가 없습니다.</p>
            </div> */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerMyPageHeader;
