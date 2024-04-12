function SellerInfoEdit() {
  return (
    <>
      <div className="l_wrapper">
        <div className="item-wrapper">
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
    </>
  );
}

export default SellerInfoEdit;
