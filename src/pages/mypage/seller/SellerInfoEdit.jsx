import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useUserStore from '@zustand/store';
import useModalStore from '@zustand/useModalStore.mjs';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function SellerInfoEdit() {
  const axios = useCustomAxios();
  const { user, setUser } = useUserStore();
  const openModal = useModalStore((state) => state.openModal);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      name: `${user.name}`,
      email: `${user.email}`,
      phone: `${user.phone}`,
      address: `${user.address}`,
    },
  });

  const onSubmit = async (formData) => {
    try {
      const res = await axios.patch(`/users/${user._id}`, formData);
      setUser({ ...user, ...res.data.updated });
      openModal({
        content: `${res.data.updated.name}님 회원정보가 수정되었습니다. :)`,
        callbackButton: {
          확인: () => {
            navigate(window.location.reload(), { state: { from: window.location.reload() } });
          },
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="item-wrapper">
        <div className="main-content">
          <form onSubmit={handleSubmit(onSubmit)} className="signup_form">
            <fieldset className="signup-layout">
              <label className="signup-sub-title" htmlFor="name">
                Name <span className="signup-required-point">*</span>
              </label>
              <div className="signup-input-box">
                <div className="form-input">
                  <input
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
              <label className="signup-sub-title" htmlFor="email">
                Email <span className="signup-required-point">*</span>
              </label>
              <div className="signup-input-box">
                <div className="form-input">
                  <input
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

            <fieldset className="signup-layout">
              <label className="signup-sub-title" htmlFor="phone">
                Phone Number
                <span className="signup-required-point">*</span>
              </label>
              <div className="signup-input-box">
                <div className="form-input">
                  <input
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
              수정하기
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SellerInfoEdit;
