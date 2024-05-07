import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useModalStore from '@zustand/useModalStore.mjs';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function SellerUploadProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      name: 'test',
      price: '111111',
      quantity: '10',
      shippingFees: '3000',
      type: 'new',
      content: 'dfsdfsdfsdfsdfsdf',
    },
  });
  const axios = useCustomAxios();
  const openModal = useModalStore((state) => state.openModal);
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      if (formData.mainImages.length > 0) {
        // 프로필 이미지를 추가한 경우
        const imageFormData = new FormData();
        for (let i = 0; i < formData.mainImages.length; i++) {
          imageFormData.append('attach', formData.mainImages[i]);
        }

        const fileRes = await axios('/files', {
          method: 'post',
          headers: {
            // 파일 업로드시 필요한 설정
            'Content-Type': 'multipart/form-data',
          },
          data: imageFormData,
        });

        // 서버로부터 응답받은 이미지 이름을 formData에 반영
        const imageNames = fileRes.data?.item.map((item) => ({ name: item.name, path: `/files/03-OGC/${item.name}` }));
        // console.log('imageNames', imageNames);
        formData.mainImages = imageNames;
      } else {
        // mainImages 속성을 제거
        delete formData.mainImages;
      }

      const { content, ...rest } = formData;
      const newFormData = {
        content: [content, content, content],
        ...rest,
      };
      const res = await axios.post('seller/products', newFormData);
      console.log(res);
      openModal({
        content: `${res.data.item.name}상품이 등록되었습니다. <br /> 상품 목록을 확인하시겠습니까? :)`,
        callbackButton: {
          확인: () => {
            navigate('/seller/mypage', { state: { from: window.location.replace('/seller/mypage') } });
          },
          취소: '',
        },
      });
    } catch (err) {
      console.log(err);
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
      <div className="item-wrapper">
        <div className="main-title">
          <p className="main-contents-title">상품 등록</p>
        </div>
        <div className="main-content">
          <form className="signup_form" onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="signup-layout">
              <label className="signup-sub-title" htmlFor="name">
                Product Name<span className="signup-required-point">*</span>
              </label>
              <div className="signup-input-box">
                <div className="form-input">
                  <input
                    placeholder="상품 이름을 입력해주세요."
                    id="name"
                    type="text"
                    {...register('name', {
                      required: '상품이름은 필수 입니다.',
                      minLength: {
                        value: 2,
                        message: '2자리 이상 입력하세요.',
                      },
                    })}
                  />
                </div>
                {errors.name && <p className="err-text">{errors.name.message}</p>}
              </div>
            </fieldset>

            <fieldset className="signup-layout">
              <label className="signup-sub-title" htmlFor="price">
                Price<span className="signup-required-point">*</span>
              </label>
              <div className="signup-input-box">
                <div className="form-input">
                  <input
                    placeholder="가격을 입력해주세요."
                    id="price"
                    type="text"
                    {...register('price', {
                      required: '가격은 필수 입니다.',
                      minLength: {
                        value: 4,
                        message: '숫자를 입력해주세요.',
                      },
                    })}
                  />
                </div>
                {errors.price && <p className="err-text">{errors.price.message}</p>}
              </div>
            </fieldset>

            <fieldset className="signup-layout">
              <label className="signup-sub-title" htmlFor="quantity">
                Quantity <span className="signup-required-point">*</span>
              </label>
              <div className="signup-input-box">
                <div className="form-input">
                  <input
                    placeholder="수량을 입력해주세요."
                    id="quantity"
                    type="text"
                    {...register('quantity', {
                      required: '수량은 필수 입니다.',
                      minLength: {
                        value: 1,
                        message: '숫자를 입력해주세요.',
                      },
                    })}
                  />
                </div>
                {errors.quantity && <p className="err-text">{errors.quantity.message}</p>}
              </div>
            </fieldset>

            <fieldset className="signup-layout">
              <label className="signup-sub-title" htmlFor="shippingFees">
                ShippingFees <span className="signup-required-point">*</span>
              </label>
              <div className="signup-input-box">
                <div className="form-input">
                  <input
                    placeholder="배송비를 입력해주세요."
                    id="shippingFees"
                    type="text"
                    {...register('shippingFees', {
                      required: '배송비는 필수 입니다.',
                      minLength: {
                        value: 4,
                        message: '숫자를 입력해주세요.',
                      },
                    })}
                  />
                </div>
                {errors.shippingFees && <p className="err-text">{errors.shippingFees.message}</p>}
              </div>
            </fieldset>

            <fieldset className="signup-layout">
              <label className="signup-sub-title" htmlFor="type">
                Category
              </label>

              <div className="signup-select-box">
                <div className="signup-select-box-item">
                  <select className="select" id="type" {...register('type')}>
                    <option value="new">New</option>
                    <option value="best">Best</option>
                  </select>
                </div>
              </div>
            </fieldset>

            <fieldset className="signup-layout">
              <label className="signup-sub-title" htmlFor="content">
                Product Content<span className="signup-required-point">*</span>
              </label>
              <div className="product-layout">
                <p className="product-main-content-text">Main Contents</p>

                <div className="signup-input-box">
                  <div className="form-input">
                    <input
                      multiple
                      id="mainImages"
                      type="file"
                      {...register('mainImages', {
                        required: '상품사진은 필수 입니다.',
                      })}
                    />
                  </div>
                  {errors.mainImages && <p className="err-text">{errors.mainImages.message}</p>}
                </div>

                <div className="signup-input-box">
                  <div className="form-input ">
                    <textarea
                      className="type-textarea"
                      placeholder="상품 설명을 입력해주세요."
                      id="content"
                      type="text"
                      {...register('content', {
                        required: '상품설명은 필수 입니다.',
                        minLength: {
                          value: 10,
                          message: '10자리 이상 입력하세요.',
                        },
                      })}
                    />
                  </div>
                  {errors.content && <p className="err-text">{errors.content.message}</p>}
                </div>

                <div className="product-sub-layout">
                  <div className="product-layout">
                    <p className="product-main-content-text">Sub Contents</p>

                    {/* <div className="signup-input-box">
                      <div className="form-input">
                        <input
                          id="mainImages"
                          type="file"
                          {...register('mainImages', {
                            required: '상품사진은 필수 입니다.',
                          })}
                        />
                      </div>
                      {errors.mainImages && <p className="err-text">{errors.mainImages.message}</p>}
                    </div> */}

                    <div className="signup-input-box">
                      <div className="form-input ">
                        <textarea
                          className="type-textarea"
                          placeholder="상품 설명을 입력해주세요."
                          id="content"
                          type="text"
                          {...register('content', {
                            required: '상품설명은 필수 입니다.',
                            minLength: {
                              value: 10,
                              message: '10자리 이상 입력하세요.',
                            },
                          })}
                        />
                      </div>
                      {errors.content && <p className="err-text">{errors.content.message}</p>}
                    </div>
                  </div>
                </div>
                <div className="product-sub-layout">
                  <div className="product-layout">
                    {/* <div className="signup-input-box">
                      <div className="form-input">
                        <input
                          id="detailImages"
                          type="file"
                          {...register('mainImages', {
                            required: '상품사진은 필수 입니다.',
                          })}
                        />
                      </div>
                      {errors.mainImages && <p className="err-text">{errors.mainImages.message}</p>}
                    </div> */}

                    <div className="signup-input-box">
                      <div className="form-input ">
                        <textarea
                          className="type-textarea"
                          placeholder="상품 설명을 입력해주세요."
                          id="content"
                          type="text"
                          {...register('content', {
                            required: '상품설명은 필수 입니다.',
                            minLength: {
                              value: 10,
                              message: '10자리 이상 입력하세요.',
                            },
                          })}
                        />
                      </div>
                      {errors.content && <p className="err-text">{errors.content.message}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>

            <button className="button button-large btn-Fill btn-layout" type="submit">
              등록하기
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SellerUploadProduct;
