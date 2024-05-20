import profile from '@assets/profile.svg';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useQuery } from '@tanstack/react-query';
import useUserStore from '@zustand/store';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

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
    <div className="container">
      <div className="l_wrapper">
        <div className="main-container">
          <div className="sidebar">
            <ul className="menu-list">
              <li className={`menu-item ${url == '/seller/mypage' ? 'is_active' : ''}`}>
                <Link to="/seller/mypage">상품 목록 조회</Link>
              </li>
              <li className={`menu-item ${url == '/seller/mypage/upload' ? 'is_active' : ''}`}>
                <Link to="/seller/mypage/upload">상품 등록</Link>
              </li>
              <li className={`menu-item ${url == '/seller/mypage/orderlist' ? 'is_active' : ''}`}>
                <Link to="/seller/mypage/orderlist">주문 내역 조회</Link>
              </li>
              <li className={`menu-item ${url == '/seller/mypage/wishlist' ? 'is_active' : ''}`}>
                <Link to="/seller/mypage/wishlist">위시리스트</Link>
              </li>
              <li className={`menu-item ${url == '/seller/mypage/sellerinfo' ? 'is_active' : ''}`}>
                <Link to="/seller/mypage/sellerinfo">회원 정보</Link>
              </li>
            </ul>
            <ul className="menu-list-mo">
              <li className={`menu-item ${url == '/seller/mypage' ? 'is_active' : ''}`} data-menu-id="/seller/mypage">
                <Link to="/seller/mypage">상품 목록 조회</Link>
              </li>
              <li className={`menu-item ${url === '/seller/mypage/upload' ? 'is_active' : ''}`} data-menu-id="/seller/mypage/upload">
                <Link to="/seller/mypage/upload">상품 등록</Link>
              </li>
              <li className={`menu-item ${url === '/seller/mypage/orderlist' ? 'is_active' : ''}`} data-menu-id="seller/mypage/orderlist">
                <Link to="/seller/mypage/orderlist">주문 내역 조회</Link>
              </li>
              <li className={`menu-item ${url === '/seller/mypage/wishlist' ? 'is_active' : ''}`} data-menu-id="/seller/mypage/wishlist">
                <Link to="/seller/mypage/wishlist">위시리스트</Link>
              </li>
              <li className={`menu-item ${url === '/seller/mypage/sellerinfo' ? 'is_active' : ''}`} data-menu-id="/seller/mypage/sellerinfo  ">
                <Link to="/seller/mypage/sellerinfo">회원 정보</Link>
              </li>
            </ul>
          </div>
          <div className="inner">
            <div className="user-info">
              <div className="profile">
                <div className="profile-cover">
                  <img
                    className="profile-cover-src"
                    src={user.profileImage ? `${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${user.profileImage}` : profile}
                    alt="회원 프로필 사진"
                  />
                </div>
              </div>
              <div className="profile-content">
                <div className="profile-left">
                  <p>
                    <strong>{user.name}</strong>님 안녕하세요 :)
                  </p>
                  <p>누적 판매 금액 : {totalMoney.toLocaleString('ko-KR')}원</p>
                </div>
                <p className="profile-type">{user.type}</p>
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
