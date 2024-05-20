import profile from '@assets/profile.svg';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useQuery } from '@tanstack/react-query';
import useUserStore from '@zustand/store';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

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
    <div className="container">
      <div className="l_wrapper">
        <div className="main-container">
          <div className="sidebar">
            <ul className="menu-list">
              <li className={`menu-item ${url === '/mypage' ? 'is_active' : ''}`} data-menu-id="/mypage">
                <Link to="/mypage">주문 내역 조회</Link>
              </li>
              <li className={`menu-item ${url === '/mypage/wishlist' ? 'is_active' : ''}`} data-menu-id="/mypage/wishlist">
                <Link to="/mypage/wishlist">위시리스트</Link>
              </li>
              <li className={`menu-item ${url === '/mypage/review' ? 'is_active' : ''}`} data-menu-id="/mypage/review">
                <Link to="/mypage/review">내가 쓴 리뷰</Link>
              </li>
              <li className={`menu-item ${url === '/mypage/userinfo' ? 'is_active' : ''}`} data-menu-id="/mypage/userinfo">
                <Link to="/mypage/userinfo">회원정보</Link>
              </li>
            </ul>
            <ul className="menu-list-mo">
              <li className={`menu-item ${url === '/mypage' ? 'is_active' : ''}`} data-menu-id="/mypage">
                <Link to="/mypage">주문 내역 조회</Link>
              </li>
              <li className={`menu-item ${url === '/mypage/wishlist' ? 'is_active' : ''}`} data-menu-id="/mypage/wishlist">
                <Link to="/mypage/wishlist">위시리스트</Link>
              </li>
              <li className={`menu-item ${url === '/mypage/review' ? 'is_active' : ''}`} data-menu-id="/mypage/review">
                <Link to="/mypage/review">내가 쓴 리뷰</Link>
              </li>
              <li className={`menu-item ${url === '/mypage/userinfo' ? 'is_active' : ''}`} data-menu-id="/mypage/userinfo">
                <Link to="/mypage/userinfo">회원정보</Link>
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
                  <input type="file" style={{ display: 'none' }} />
                </div>
              </div>
              <div className="profile-content">
                <div className="profile-left">
                  <p>
                    <strong>{user.name}</strong>님 안녕하세요 :)
                  </p>
                  <p>누적 구매 금액 : {totalMoney.toLocaleString('ko-KR')}원</p>
                </div>
                <p className="profile-type">{user.type}</p>
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
