import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useUserStore from '@zustand/store.js';
import useModalStore from '@zustand/useModalStore.mjs';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import styles from '@pages/LoginSignUp.module.css';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
      if (err.response?.data.message) {
        openModal({
          content: err.response?.data.message,
          callbackButton: {
            확인: '',
          },
        });
      }
    }
  };

  return (
    <>
      <div className={styles.contentsLogin}>
        <div className="l_wrapper">
          <div className={styles.login}>
            <div className={styles.contentsHeader}>
              <h2 className={styles.contentTitle}>LOGIN</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
              <div className={styles.loginInputSection}>
                <div className={styles.loginInputBox}>
                  <div className={styles.formInput}>
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
                  {errors.email && <p className={styles.errText}>{errors.email.message}</p>}
                </div>
                <div className={styles.signupInputBox}>
                  <div className={styles.formInput}>
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
                  {errors.password && <p className={styles.errText}>{errors.password.message}</p>}
                </div>
              </div>
              {/* <div className="login-find">
                <Link to="#">아이디/비밀번호 찾기</Link>
              </div> */}
              <button className={`${styles.button} ${styles.buttonLarge} ${styles.btnFill} ${styles.typeMargin}`} type="submit">
                LOGIN
              </button>
              <Link to="/users/signup" className={`${styles.button} ${styles.buttonLarge} ${styles.btnNull}`} type="button">
                SIGN UP
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
