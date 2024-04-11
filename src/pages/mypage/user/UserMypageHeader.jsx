import profile from '@public/profile.svg';
import { Outlet } from 'react-router-dom';

function UserMypageHeader() {
  return (
    <div className="container">
      <div className="l_wrapper">
        <div className="main-container">
          <div className="sidebar">
            <ul className="menu-list">
              <li className="menu-item is_active">
                <a>주문 내역 조회</a>
              </li>
              <li className="menu-item">
                <a>위시리스트</a>
              </li>
              <li className="menu-item">
                <a>내가 쓴 리뷰</a>
              </li>
              <li className="menu-item">
                <a>회원정보</a>
              </li>
            </ul>
          </div>
          <div className="inner">
            <div className="user-info">
              <img className="profile" src={profile} alt="회원 프로필 사진" />
              <div className="profile-content">
                <p className="profile-content-title">
                  <strong>보람3조님</strong> 안녕하세요 :)
                </p>
                <p className="profile-content-desc">누적금액 : 0원</p>
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
