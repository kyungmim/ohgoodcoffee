function Login() {
  return (
    <>
      <div className="contents-login">
        <div className="l_wrapper">
          <div className="login">
            <div className="contents-header">
              <h2 className="content-title">LOGIN</h2>
            </div>

            <form className="login_form">
              <div className="login-input-section">
                <div className="form-input">
                  <input id="email" placeholder="이메일" type="text" />
                </div>
                <div className="form-input">
                  <input id="password" placeholder="비밀번호" type="password" />
                </div>
              </div>
              <div className="login-find">
                <a href="#">아이디/비밀번호 찾기</a>
              </div>
              <button className="button button-large btn-Fill" type="submit">
                LOGIN
              </button>
              <button className="button button-large btn-null" type="button">
                SIGN UP
              </button>
            </form>

            <div className="login-line">
              <p className="or">OR</p>
            </div>

            <div className="social-btn">
              <button className="button-large btn-naver">네이버 로그인</button>
              <button className="button-large btn-kakao">카카오 로그인</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
