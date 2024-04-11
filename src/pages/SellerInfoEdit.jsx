import profile from '@public/profile.svg';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';

function SellerInfoEdit() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="l_wrapper">
          <div className="main-container">
            <div className="sidebar">
              <ul className="menu-list">
                <li className="menu-item">
                  <a>상품 목록 조회</a>
                </li>
                <li className="menu-item">
                  <a>위시리스트</a>
                </li>
                <li className="menu-item">
                  <a>상품 등록</a>
                </li>
                <li className="menu-item is_active">
                  <a>회원 정보</a>
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
                  <p className="profile-content-desc">누적 판매 금액 : 0원</p>
                </div>
              </div>
              <div className="main-title">
                <p className="main-contents-title">회원 정보</p>
              </div>
              {/* <!-- <div class="main-content is_empty">
				<p class="empty-content">등록된 리뷰가 없습니다.</p>
			</div> --> */}
              <div className="main-content">
                <form className="signup_form">
                  <fieldset className="signup-layout">
                    <label className="signup-sub-title" htmlFor="profile">
                      Profile
                    </label>
                    <div className="form-input">
                      <input type="file" name="profile" id="profile" />
                    </div>
                  </fieldset>

                  <fieldset className="signup-layout">
                    <label className="signup-sub-title" htmlFor="name">
                      Name <span className="signup-required-point">*</span>
                    </label>
                    <div className="form-input">
                      <input name="name" id="name" placeholder="이름을 입력해주세요" type="text" />
                    </div>
                  </fieldset>

                  <fieldset className="signup-layout">
                    <label className="signup-sub-title" htmlFor="phonenum">
                      Phone Number <span className="signup-required-point">*</span>
                    </label>
                    <div className="form-input">
                      <input id="phonenum" placeholder="연락처를 입력해주세요" type="text" />
                    </div>
                  </fieldset>

                  <fieldset className="signup-layout">
                    <label className="signup-sub-title" htmlFor="birth">
                      Birth <span className="signup-required-point">*</span>
                    </label>
                    <div className="signup-select-box">
                      <div className="signup-select-box-item">
                        <select className="select">
                          <option value="1992">1992</option>
                          <option value="1993">1993</option>
                          <option value="1994">1994</option>
                          <option value="1995">1995</option>
                          <option value="1996">1996</option>
                          <option value="1997">1997</option>
                          <option value="1998">1998</option>
                          <option value="1999">1999</option>
                        </select>
                      </div>

                      <div className="signup-select-box-item">
                        <select className="select">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>

                      <div className="signup-select-box-item">
                        <select className="select">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="signup-layout">
                    <label className="signup-sub-title" htmlFor="email">
                      Email <span className="signup-required-point">*</span>
                    </label>
                    <div className="form-input">
                      <input name="email" id="email" placeholder="이메일을 입력해주세요" type="text" />
                    </div>
                  </fieldset>

                  <fieldset className="signup-layout">
                    <label className="signup-sub-title" htmlFor="address">
                      Address <span className="signup-required-point">*</span>
                    </label>
                    <div className="form-input">
                      <input name="address" id="address" placeholder="주소를 입력해주세요" type="text" />
                    </div>
                  </fieldset>
                </form>
                <div className="button-area with_margin">
                  <button className="button button-large btn-Fill btn-layout" type="submit">
                    수정하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SellerInfoEdit;
