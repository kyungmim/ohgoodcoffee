import profile from '@public/profile.svg';

function SellerMyPageHeader() {
  return (
    <div className="container">
      <div className="l_wrapper">
        <div className="main-container">
          <div className="sidebar">
            <ul className="menu-list">
              <li className="menu-item is_active">
                <a>상품 목록 조회</a>
              </li>
              <li className="menu-item">
                <a>위시리스트</a>
              </li>
              <li className="menu-item">
                <a>상품 등록</a>
              </li>
              <li className="menu-item">
                <a>회원 정보</a>
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
            <div className="main-title">
              <p className="main-contents-title">상품 목록 조회</p>
            </div>
            {/* <div className="main-content is_empty">
              <p>등록된 상품이 없습니다.</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerMyPageHeader;
