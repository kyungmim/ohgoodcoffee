import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useModalStore from '@zustand/useModalStore.mjs';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function SellerUploadProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axios = useCustomAxios();
  const openModal = useModalStore((state) => state.openModal);
  const navigate = useNavigate();

  const imgData = async (formData) => {
    const combinedArr = [...formData.i1, ...formData.i2, ...formData.i3];
    // console.log('formData ::: ', formData);
    // console.log('i1 ::: ', formData.i1);
    // console.log('i2 ::: ', formData.i2);
    // console.log('i3 ::: ', formData.i3);
    // console.log('combinedArr ::: ', combinedArr);
    let imageNamesArr = [];
    if (combinedArr.length > 0) {
      // 프로필 이미지를 추가한 경우
      const imageFormData = new FormData();
      for (let i = 0; i < combinedArr.length; i++) {
        imageFormData.append('attach', combinedArr[i]);
      }

      const fileRes = await axios('/files', {
        method: 'post',
        headers: {
          // 파일 업로드시 필요한 설정
          'Content-Type': 'multipart/form-data',
        },
        data: imageFormData,
      });
      // console.log(fileRes);
      // 서버로부터 응답받은 이미지 이름을  정보에 포함
      imageNamesArr = [...imageNamesArr, ...fileRes.data.item];
      // console.log(`imageNamesArr`, imageNamesArr);
    } else {
      // mainImages 속성을 제거
      delete formData.mainImages;
    }

    // console.log('imageNamesArr ::: ', imageNamesArr);
    return imageNamesArr;
  };

  const onSubmit = async (formData) => {
    try {
      const imageNamesArr = await imgData(formData);
      const { d1, d2, d3, ...rest } = formData;

      const reqBody = {
        mainImages: [
          {
            name: imageNamesArr[0].name,
            path: '',
            url: 'https://api.frontendschool.shop/api/files/' + imageNamesArr[0].name,
          },
        ],
        detailImages: [
          {
            name: imageNamesArr[1].name,
            path: '',
            url: 'https://api.frontendschool.shop/api/files/' + imageNamesArr[1].name,
          },
          {
            name: imageNamesArr[2].name,
            path: '',
            url: 'https://api.frontendschool.shop/api/files/' + imageNamesArr[2].name,
          },
        ],
        content: [`${d1}`, `${d2}`, `${d3}`],
        ...rest,
      };
      delete reqBody.i1;
      delete reqBody.i2;
      delete reqBody.i3;

      const res = await axios.post('seller/products', reqBody);
      openModal({
        content: `${res.data.item.name}상품이 등록되었습니다. <br /> 상품 목록을 확인하시겠습니까? :)`,
        callbackButton: {
          확인: () => {
            navigate('/seller/mypage', { state: { from: '/' } });
          },
          취소: '',
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
              </div>
              {errors.shippingFees && <p className="err-text">{errors.shippingFees.message}</p>}
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
                      id="mainImages"
                      type="file"
                      {...register('i1', {
                        required: '상품사진은 필수 입니다.',
                      })}
                    />
                  </div>
                  {errors.mainImages && <p className="err-text">{errors.i1.message}</p>}
                </div>

                <div className="signup-input-box">
                  <div className="form-input ">
                    <textarea
                      className="type-textarea"
                      placeholder="상품 설명을 입력해주세요."
                      id="content"
                      type="text"
                      {...register('d1', {
                        required: '상품설명은 필수 입니다.',
                        minLength: {
                          value: 10,
                          message: '10자리 이상 입력하세요.',
                        },
                      })}
                    />
                  </div>
                  {errors.content && <p className="err-text">{errors.d1.message}</p>}
                </div>

                <div className="product-sub-layout">
                  <div className="product-layout">
                    <p className="product-main-content-text">Sub Contents</p>

                    <div className="signup-input-box">
                      <div className="form-input">
                        <input
                          id="detailImages"
                          type="file"
                          {...register('i2', {
                            required: '상품사진은 필수 입니다.',
                          })}
                        />
                      </div>
                      {errors.mainImages && <p className="err-text">{errors.i2.message}</p>}
                    </div>

                    <div className="signup-input-box">
                      <div className="form-input ">
                        <textarea
                          className="type-textarea"
                          placeholder="상품 설명을 입력해주세요."
                          id="content"
                          type="text"
                          {...register('d2', {
                            required: '상품설명은 필수 입니다.',
                            minLength: {
                              value: 10,
                              message: '10자리 이상 입력하세요.',
                            },
                          })}
                        />
                      </div>
                      {errors.content && <p className="err-text">{errors.d2.message}</p>}
                    </div>
                  </div>
                </div>
                <div className="product-sub-layout">
                  <div className="product-layout">
                    <div className="signup-input-box">
                      <div className="form-input">
                        <input
                          id="detailImages"
                          type="file"
                          {...register('i3', {
                            required: '상품사진은 필수 입니다.',
                          })}
                        />
                      </div>
                      {errors.mainImages && <p className="err-text">{errors.i3.message}</p>}
                    </div>

                    <div className="signup-input-box">
                      <div className="form-input ">
                        <textarea
                          className="type-textarea"
                          placeholder="상품 설명을 입력해주세요."
                          id="content"
                          type="text"
                          {...register('d3', {
                            required: '상품설명은 필수 입니다.',
                            minLength: {
                              value: 10,
                              message: '10자리 이상 입력하세요.',
                            },
                          })}
                        />
                      </div>
                      {errors.content && <p className="err-text">{errors.d3.message}</p>}
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
