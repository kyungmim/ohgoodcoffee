import profile from '@public/profile.svg';
import useUserStore from '@zustand/store';
import { useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';

function SellerMyPageHeader() {
  const ulRef = useRef(null);
  const { user } = useUserStore();

  const menuClick = (e) => {
    ulRef.current.childNodes.forEach((item) => item.classList.remove('is_active'));
    e.target.parentNode.classList.add('is_active');
  };

  return (
    <div className="container">
      <div className="l_wrapper">
        <div className="main-container">
          <div className="sidebar">
            <ul className="menu-list" onClick={menuClick} ref={ulRef}>
              <li className="menu-item is_active">
                <Link to="/seller/mypage">상품 목록 조회</Link>
              </li>
              <li className="menu-item">
                <Link to="/seller/mypage/upload">상품 등록</Link>
              </li>
              <li className="menu-item">
                <Link to="/seller/mypage/sellerinfo">회원 정보</Link>
              </li>
            </ul>
          </div>
          <div className="inner">
            <div className="user-info">
              <img className="profile" src={profile} alt="회원 프로필 사진" />
              <div className="profile-content">
                <p>
                  <strong>{user.name}</strong> 안녕하세요 :)
                </p>
                <p>누적 판매 금액 : 0원</p>
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
