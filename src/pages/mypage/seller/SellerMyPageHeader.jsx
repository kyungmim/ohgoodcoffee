import { Link, Outlet } from 'react-router-dom';
import profile from '@public/profile.svg';

function SellerMyPageHeader() {
  return (
    <div className="container">
      <div className="l_wrapper">
        <div className="main-container">
          <div className="sidebar">
            <ul className="menu-list">
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
                  <strong>보람3조님</strong> 안녕하세요 :)
                </p>
                <p>누적 판매 금액 : 0원</p>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerMyPageHeader;
