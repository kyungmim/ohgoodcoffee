import profile from '@assets/profile.svg';
import useUserStore from '@zustand/store';
import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function SellerMyPageHeader() {
  const { user } = useUserStore();
  const [activeMenu, setActiveMenu] = useState('상품 목록 조회'); // 초기값으로 '/mypage'를 설정
  const navigate = useNavigate();

  // 클릭된 요소의 데이터 속성을 통해 활성화된 메뉴 항목을 식별하고 상태 업데이트
  const handleMenuClick = (e) => {
    const targetMenu = e.target.innerText;
    if (targetMenu) {
      setActiveMenu(targetMenu);
    }
  };

  useEffect(() => {
    if (activeMenu === '주문 내역 조회') {
      navigate('/seller/mypage/orderlist');
    } else if (activeMenu === '위시리스트') {
      navigate('/seller/mypage/wishlist');
    } else if (activeMenu === '상품 목록 조회') {
      navigate('/seller/mypage');
    } else if (activeMenu === '상품 등록') {
      navigate('/seller/mypage/upload');
    } else if (activeMenu === '회원 정보') {
      navigate('/seller/mypage/sellerinfo');
    }
  }, [activeMenu, navigate]);

  return (
    <div className="container">
      <div className="l_wrapper">
        <div className="main-container">
          <div className="sidebar">
            <ul className="menu-list" onClick={handleMenuClick}>
              <li className={`menu-item ${activeMenu === '상품 목록 조회' ? 'is_active' : ''}`} data-menu-id="/seller/mypage">
                <Link to="/seller/mypage">상품 목록 조회</Link>
              </li>
              <li className={`menu-item ${activeMenu === '상품 등록' ? 'is_active' : ''}`} data-menu-id="/seller/mypage/upload">
                <Link to="/seller/mypage/upload">상품 등록</Link>
              </li>
              <li className={`menu-item ${activeMenu === '주문 내역 조회' ? 'is_active' : ''}`} data-menu-id="seller/mypage/orderlist">
                <Link to="/seller/mypage/orderlist">주문 내역 조회</Link>
              </li>
              <li className={`menu-item ${activeMenu === '위시리스트' ? 'is_active' : ''}`} data-menu-id="/seller/mypage/wishlist">
                <Link to="/seller/mypage/wishlist">위시리스트</Link>
              </li>
              <li className={`menu-item ${activeMenu === '회원 정보' ? 'is_active' : ''}`} data-menu-id="/seller/mypage/sellerinfo">
                <Link to="/seller/mypage/sellerinfo">회원 정보</Link>
              </li>
            </ul>
            <ul className="menu-list-mo" onClick={handleMenuClick}>
              <li className={`menu-item ${activeMenu === '주문 내역 조회' ? 'is_active' : ''}`} data-menu-id="seller/mypage/orderlist">
                <Link to="/seller/mypage/orderlist">주문 내역 조회</Link>
              </li>
              <li className={`menu-item ${activeMenu === '위시리스트' ? 'is_active' : ''}`} data-menu-id="/seller/mypage/wishlist">
                <Link to="/seller/mypage/wishlist">위시리스트</Link>
              </li>
              <li className={`menu-item ${activeMenu === '상품 목록 조회' ? 'is_active' : ''}`} data-menu-id="/seller/mypage">
                <Link to="/seller/mypage">상품 목록 조회</Link>
              </li>
              <li className={`menu-item ${activeMenu === '상품 등록' ? 'is_active' : ''}`} data-menu-id="/seller/mypage/upload">
                <Link to="/seller/mypage/upload">상품 등록</Link>
              </li>
              <li className={`menu-item ${activeMenu === '회원 정보' ? 'is_active' : ''}`} data-menu-id="/seller/mypage/sellerinfo  ">
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
                  <p>누적 판매 금액 : 0원</p>
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
