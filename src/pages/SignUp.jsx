import useCustomAxios from '@hooks/useCustomAxios.mjs';
import TopLine from '@public/ogc-top-line.svg';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';

function SignUp() {
  const { register, handleSubmit, setError } = useForm({
    values: {
      email: 'gg@market.com',
      name: '마라탕',
      password: '11111111',
      type: 'user',
      phone: '1234567890',
      address: '서울시 강남구 역삼동 123',
    },
  });
  const axios = useCustomAxios();
  // const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit = async (formData) => {
    try {
      const res = await axios.post('/users', formData);
      alert(res.data.item.name + '님 회원가입이 완료 되었습니다.\n로그인 후에 이용하세요.');
      console.log(formData);
      // navigate('/users/login');
    } catch (err) {
      if (err.response?.data.errors) {
        // API 서버가 응답한 에러
        err.response?.data.errors.forEach((error) => setError(error.path, { message: error.msg }));
      } else if (err.response?.data.message) {
        alert(err.response?.data.message);
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

            <form onSubmit={handleSubmit(onSubmit)} className="signup_form">
              {/* <fieldset className="signup-layout">
                <label className="signup-sub-title" htmlFor="profile">
                  Profile
                </label>
                <div className="form-input">
                  <input type="file" name="profile" id="profile" />
                </div>
              </fieldset> */}

              <fieldset className="signup-layout">
                <label className="signup-sub-title" htmlFor="type">
                  Type <span className="signup-required-point">*</span>
                </label>

                <div className="signup-type">
                  <div className="signup-type-item">
                    <div className="form-input-radio">
                      <input type="radio" name="type" id="user" onChange={handleChange} />
                    </div>
                    <label htmlFor="user" className="radio-title">
                      User
                    </label>
                  </div>
                  <div className="signup-type-item">
                    <div className="form-input-radio">
                      <input type="radio" name="type" id="seller" />
                    </div>
                    <label htmlFor="seller" className="radio-title">
                      Seller
                    </label>
                  </div>
                </div>
              </fieldset>

              <fieldset className="signup-layout">
                <label className="signup-sub-title" htmlFor="name">
                  Name <span className="signup-required-point">*</span>
                </label>
                <div className="form-input">
                  <input
                    placeholder="이름을 입력해주세요."
                    type="text"
                    id="name"
                    {...register('name', {
                      required: '이름은 필수 입니다.',
                      minLength: 2,
                    })}
                  />
                </div>
              </fieldset>

              <fieldset className="signup-layout">
                <label className="signup-sub-title" htmlFor="phone">
                  Phone Number
                  <span className="signup-required-point">*</span>
                </label>
                <div className="form-input">
                  <input
                    placeholder="전화번호를 입력해주세요."
                    type="text"
                    id="phone"
                    {...register('phone', {
                      required: '전화번호는 필수 입니다.',
                      minLength: 11,
                    })}
                  />
                </div>
              </fieldset>

              {/* <fieldset className="signup-layout">
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
              </fieldset> */}

              <fieldset className="signup-layout">
                <label className="signup-sub-title" htmlFor="email">
                  Email <span className="signup-required-point">*</span>
                </label>
                <div className="form-input">
                  <input
                    placeholder="이메일을 입력해주세요."
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
              </fieldset>

              <fieldset className="signup-layout type_start">
                <label className="signup-sub-title" htmlFor="password">
                  Password <span className="signup-required-point">*</span>
                </label>
                <div className="signup-password-box">
                  <div className="form-input">
                    <input
                      placeholder="비밀번호를 입력해주세요."
                      type="password"
                      id="password"
                      {...register('password', {
                        required: '비밀번호는 필수 입니다.',
                        minLength: 8,
                      })}
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset className="signup-layout">
                <label className="signup-sub-title" htmlFor="address">
                  Address <span className="signup-required-point">*</span>
                </label>
                <div className="form-input">
                  <input
                    placeholder="주소를 입력해주세요."
                    type="text"
                    id="address"
                    {...register('address', {
                      required: '주소는 필수 입니다.',
                      minLength: 11,
                    })}
                  />
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
