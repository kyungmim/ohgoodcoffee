import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useUserStore from '@zustand/store.js';
import useModalStore from '@zustand/useModalStore.mjs';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      email: '',
      password: '',
    },
  });

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   values: {
  //     email: 'u1@market.com',
  //     password: '11111111',
  //   },
  // });
  
  const navigate = useNavigate();
  const openModal = useModalStore((state) => state.openModal);
  const axios = useCustomAxios();
  const { setUser } = useUserStore();

  const onSubmit = async (formData) => {
    try {
      const res = await axios.post('/users/login', formData);
      openModal({
        content: `${res.data.item.name}님 로그인되었습니다 :)`,
        callbackButton: {
          확인: () => {
            navigate('/', { state: { from: '/' } });
          },
        },
      });
      const user = res.data.item;
      setUser(user);
    } catch (err) {
      openModal({
        content: `${err.response?.data.message}`,
        callbackButton: {
          확인: () => {
            navigate('/users/login', { state: { from: '/users/login' } });
          },
        },
      });
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
                <div className="signup-input-box">
                  <div className="form-input">
                    <input
                      placeholder="이메일"
                      type="text"
                      id="email"
                      {...register('email', {
                        required: '이메일은 필수 입니다.',
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: '이메일 형식이 아닙니다.',
                        },
                      })}
                    />
                  </div>
                  {errors.email && <p className="err-text">{errors.email.message}</p>}
                </div>
                <div className="signup-input-box">
                  <div className="form-input">
                    <input
                      placeholder="비밀번호"
                      type="password"
                      id="password"
                      {...register('password', {
                        required: '비밀번호는 필수 입니다.',
                        minLength: {
                          value: 8,
                          message: '8자리 이상 입력하세요.',
                        },
                      })}
                    />
                  </div>
                  {errors.password && <p className="err-text">{errors.password.message}</p>}
                </div>
              </div>
              <div className="login-find">
                <Link to="#">아이디/비밀번호 찾기</Link>
              </div>
              <button className="button button-large btn-Fill" type="submit">
                LOGIN
              </button>
              <Link to="/users/signup" className="button button-large btn-null" type="button">
                SIGN UP
              </Link>
            </form>

            <div className="login-line">
              <p className="or">OR</p>
            </div>

            <div className="social-btn">
              <button className="button-large btn-kakao">카카오 로그인</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
