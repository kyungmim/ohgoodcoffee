import useCustomAxios from '@hooks/useCustomAxios.mjs';
import TopLine from '@assets/ogc-top-line.svg';
import useModalStore from '@zustand/useModalStore.mjs';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      email: 'test@market.com',
      password: '11111111',
      name: '테스트',
      address: '경기도 어딘가 살고있음',
      phone: '01012345678',
      type: 'user',
    },
  });

  const axios = useCustomAxios();
  const openModal = useModalStore((state) => state.openModal);
  const navigate = useNavigate();

  const onSignup = async (formData) => {
    try {
      if (formData.profileImage.length > 0) {
        // 프로필 이미지를 추가한 경우
        const imageFormData = new FormData();
        imageFormData.append('attach', formData.profileImage[0]);

        const fileRes = await axios('/files', {
          method: 'post',
          headers: {
            // 파일 업로드시 필요한 설정
            'Content-Type': 'multipart/form-data',
          },
          data: imageFormData,
        });
        // console.log(fileRes);
        // 서버로부터 응답받은 이미지 이름을 회원 정보에 포함
        formData.profileImage = fileRes.data.item[0].name;
      } else {
        // profileImage 속성을 제거
        delete formData.profileImage;
      }
      const res = await axios.post('/users', formData);
      openModal({
        content: `${res.data.item.name}님 회원가입이 완료 되었습니다. <br /> 로그인 후 이용가능합니다. :)`,
        callbackButton: {
          확인: () => {
            navigate('/users/login', { state: { from: '/users/login' } });
          },
        },
      });
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
      <div className="contents-signup">
        <div className="l_wrapper">
          <div className="signup">
            <div className="contents-header">
              <h2 className="content-title">SIGN UP</h2>
              <div className="contents-header-line">
                <img src={TopLine} alt="긴 팔 모양" />
              </div>
            </div>

            <form onSubmit={handleSubmit(onSignup)} className="signup_form">
              <div className="signup-layout">
                <label className="signup-sub-title" htmlFor="profileImage">
                  Profile
                </label>
                <div className="form-input">
                  <input type="file" id="profileImage" {...register('profileImage')} />
                </div>
              </div>

              <fieldset className="signup-layout">
                <label className="signup-sub-title" htmlFor="type">
                  Type <span className="signup-required-point">*</span>
                </label>
                <div className="signup-select-box">
                  <div className="signup-select-box-item">
                    <select className="select" id="type" {...register('type')}>
                      <option value="user">User</option>
                      <option value="seller">Seller</option>
                    </select>
                  </div>
                </div>
              </fieldset>
              <fieldset className="signup-layout">
                <label className="signup-sub-title" htmlFor="email">
                  Email <span className="signup-required-point">*</span>
                </label>
                <div className="signup-input-box">
                  <div className="form-input">
                    <input
                      placeholder="이메일을 입력해주세요."
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
              </fieldset>

              <fieldset className="signup-layout type_start">
                <label className="signup-sub-title" htmlFor="password">
                  Password <span className="signup-required-point">*</span>
                </label>
                <div className="signup-input-box">
                  <div className="form-input">
                    <input
                      placeholder="비밀번호를 입력해주세요."
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
              </fieldset>

              <fieldset className="signup-layout">
                <label className="signup-sub-title" htmlFor="name">
                  Name <span className="signup-required-point">*</span>
                </label>
                <div className="signup-input-box">
                  <div className="form-input">
                    <input
                      placeholder="이름을 입력해주세요."
                      type="text"
                      id="name"
                      {...register('name', {
                        required: '이름을 입력하세요.',
                        minLength: {
                          value: 2,
                          message: '이름을 2글자 이상 입력하세요.',
                        },
                      })}
                    />
                  </div>
                  {errors.name && <p className="err-text">{errors.name.message}</p>}
                </div>
              </fieldset>

              <fieldset className="signup-layout">
                <label className="signup-sub-title" htmlFor="phone">
                  Phone Number
                  <span className="signup-required-point">*</span>
                </label>
                <div className="signup-input-box">
                  <div className="form-input">
                    <input
                      placeholder="전화번호를 입력해주세요."
                      type="text"
                      id="phone"
                      {...register('phone', {
                        required: '전화번호는 필수 입니다.',
                        minLength: {
                          value: 10,
                          message: '10자리 이상 입력하세요.',
                        },
                      })}
                    />
                  </div>
                  {errors.phone && <p className="err-text">{errors.phone.message}</p>}
                </div>
              </fieldset>

              <fieldset className="signup-layout">
                <label className="signup-sub-title" htmlFor="address">
                  Address <span className="signup-required-point">*</span>
                </label>
                <div className="signup-input-box">
                  <div className="form-input">
                    <input
                      placeholder="주소를 입력해주세요."
                      type="text"
                      id="address"
                      {...register('address', {
                        required: '주소는 필수 입니다.',
                        minLength: {
                          value: 10,
                          message: '10자리 이상 입력하세요.',
                        },
                      })}
                    />
                  </div>
                  {errors.address && <p className="err-text">{errors.address.message}</p>}
                </div>
              </fieldset>

              <button className="button button-large btn-Fill btn-layout" type="submit">
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
