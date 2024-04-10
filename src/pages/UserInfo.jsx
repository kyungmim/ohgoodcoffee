import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';

function UserInfo() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="l_wrapper">
          <div className="main-container">
            <div className="sidebar">
              <ul className="menu-list">
                <li className="menu-item">
                  <a>주문 내역 조회</a>
                </li>
                <li className="menu-item">
                  <a>위시리스트</a>
                </li>
                <li className="menu-item">
                  <a>내가 쓴 리뷰</a>
                </li>
                <li className="menu-item is_active">
                  <a>회원정보</a>
                </li>
              </ul>
            </div>
            <div className="inner">
              <div className="main">
                <img className="profile" src="/ohgoodcoffee/assets/profile.svg" alt="회원 프로필 사진" />
                <div className="profile-content">
                  <p className="profile-content-title">
                    <strong>보람3조님</strong> 안녕하세요 :)
                  </p>
                  <p className="profile-content-desc">누적금액 : 0원</p>
                </div>
              </div>
              <div className="main-title">
                <p className="main-contents-title">회원 정보</p>
              </div>
              <div className="main-content">
                <div className="profile-settings">
                  <div className="profile-setting">
                    <div className="profile-item">
                      <h1 className="profile-item-title">Type</h1>
                      <p>User</p>
                    </div>
                    <div className="profile-item">
                      <h1 className="profile-item-title">Name</h1>
                      <p>보람3조</p>
                    </div>
                    <div className="profile-item">
                      <h1 className="profile-item-title">Email</h1>
                      <p>u1@market.com</p>
                    </div>
                    <div className="profile-item">
                      <h1 className="profile-item-title">Phone Number</h1>
                      <p>010-1234-1234</p>
                    </div>
                    <div className="profile-item">
                      <h1 className="profile-item-title">Address</h1>
                      <p>서울시 강남구 역삼동 123</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-area with_margin">
                <button className="button button-large btn-Fill btn-layout" type="submit">
                  수정하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserInfo;
