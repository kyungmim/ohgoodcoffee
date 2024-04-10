import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import ogcLine from '@/assets/ogc-line.svg';

function SignUp() {
  return (
    <>
      <Header />
      <div className="contents-signup">
        <div className="l_wrapper">
          <div className="signup">
            <div className="contents-header">
              <h2 className="content-title">SIGN UP</h2>
              <div className="contents-header-line">
                <img src={ogcLine} alt="긴 팔 모양" />
              </div>
            </div>

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
                <label className="signup-sub-title" htmlFor="type">
                  Type <span className="signup-required-point">*</span>
                </label>

                <div className="signup-type">
                  <div className="signup-type-item">
                    <div className="form-input-radio">
                      <input type="radio" name="type" id="type" />
                    </div>
                    <span className="radio-title">User</span>
                  </div>
                  <div className="signup-type-item">
                    <div className="form-input-radio">
                      <input type="radio" name="type" id="type" />
                    </div>
                    <span className="radio-title">Seller</span>
                  </div>
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
                  Phone Number
                  <span className="signup-required-point">*</span>
                </label>
                <div className="form-input">
                  <input id="phonenum" placeholder="연락처를 입력해주세요" type="text" />
                </div>
              </fieldset>

              <fieldset className="signup-layout">
                <label className="signup-sub-title" htmlFor="phonenum">
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

              <fieldset className="signup-layout type_start">
                <label className="signup-sub-title" htmlFor="password">
                  Password <span className="signup-required-point">*</span>
                </label>
                <div className="signup-password-box">
                  <div className="form-input">
                    <input name="password" id="password" placeholder="비밀번호를 입력해주세요" type="password" />
                  </div>
                  <div className="form-input">
                    <input name="password" id="password" placeholder="비밀번호 확인" type="password" />
                  </div>
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

              <button className="button button-large btn-Fill btn-layout" type="submit">
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
