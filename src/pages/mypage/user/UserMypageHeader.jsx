import profile from '@public/profile.svg';
import useUserStore from '@zustand/store';
import { useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';

function UserMypageHeader() {
  const ulRef = useRef(null);
  const { user } = useUserStore();

  const menuClick = (e) => {
    ulRef.current.childNodes.forEach((item) => item.classList.remove('is_active'));
    e.target.parentNode.classList.add('is_active');
  };

  return (
    <>
      <div className="container">
        <div className="l_wrapper">
          <div className="main-container">
            <div className="sidebar">
              <ul className="menu-list" onClick={menuClick} ref={ulRef}>
                <li className="menu-item is_active">
                  <Link to="/mypage">주문 내역 조회</Link>
                </li>
                <li className="menu-item">
                  <Link to="/mypage/wishlist">위시리스트</Link>
                </li>
                <li className="menu-item">
                  <Link to="/mypage/review">내가 쓴 리뷰</Link>
                </li>
                <li className="menu-item">
                  <Link to="/mypage/userinfo">회원정보</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="inner">
            <div className="user-info">
              <div className="profile">
                <div className="profile-cover">
                  <img className="profile-cover-src" src={profile} alt="회원 프로필 사진" />
                </div>
              </div>
              <div className="profile-content">
                <div className="profile-left">
                  <p>
                    <strong>{user.name}</strong>님 안녕하세요 :)
                  </p>
                  <p>누적 판매 금액 : 0원</p>
                </div>
                <p className="profile-type">{user.type}</p>
              </div>

              {/* <div className="main-content is_empty">
              <p className="empty-content">저장된 위시리스트가 없습니다.</p>
            </div> */}
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserMypageHeader;
