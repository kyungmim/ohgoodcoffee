import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useUserStore from '@zustand/store';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const { register, handleSubmit } = useForm({
    values: {
      email: 'u1@market.com',
      password: '11111111',
    },
  });
  const navigate = useNavigate();
  const axios = useCustomAxios();
  const { setToken } = useUserStore();

  const onSubmit = async (formData) => {
    try {
      const res = await axios.post('/users/login', formData);
      alert(res.data.item.name + '님 로그인되었습니다 :)');
      console.log(res);
      const token = res.data.item.token.accessToken;
      setToken(token);
      console.log(token);
      navigate(location.state?.from ? location.state?.from : '/');
    } catch (err) {
      alert(err.response?.data.message);
    }
  };

  return (
    <>
      <div className="contents-login">
        <div className="l_wrapper">
          <div className="login">
            <div className="contents-header">
              <h2 className="content-title">LOGIN</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="login_form">
              <div className="login-input-section">
                <div className="form-input">
                  <input
                    placeholder="이메일"
                    type="text"
                    id="email"
                    {...register('email', {
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: '이메일 형식이 아닙니다.',
                      },
                    })}
                  />
                </div>
                <div className="form-input">
                  <input
                    placeholder="비밀번호"
                    type="password"
                    id="password"
                    {...register('password', {
                      required: '비밀번호는 필수 입니다.',
                      minLength: 8,
                    })}
                  />
                </div>
              </div>
              <div className="login-find">
                <Link to="#">아이디/비밀번호 찾기</Link>
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
