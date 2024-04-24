import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useUserStore from '@zustand/store';
import useModalStore from '@zustand/useModalStore.mjs';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function SellerSalesListEdit() {
  const axios = useCustomAxios();
  const openModal = useModalStore((state) => state.openModal);
  const navigate = useNavigate();
  const { itemId, product, setProduct } = useUserStore();

  const productData = async () => {
    const res = await axios.get(`/seller/products/${itemId}`);
    setProduct(res.data.item);
  };

  useEffect(() => {
    productData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      price: product?.price,
      quantity: product?.quantity,
      name: product?.name,
      i1: product?.mainImages[0],
      i2: product?.detailImages[0],
      i3: product?.detailImages[1],
      d1: product?.content[0],
      d2: product?.content[1],
      d3: product?.content[2],
      shippingFees: product?.shippingFees,
      type: product?.type,
    },
  });

  const handleDeletClick = async () => {
    try {
      openModal({
        content: `${product?.name}  <br />상품을 삭제하시겠습니까?. :)`,
        callbackButton: {
          확인: async () => {
            await axios.delete(`/seller/products/${itemId}`);
            navigate(window.location.reload(), { state: { from: '/' } });
          },
          취소: () => window.location.reload(),
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

  const onSubmit = async (formData) => {
    // console.log('formData 최종', formData);
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

      const res = await axios.patch(`/seller/products/${itemId}`, formData);
      openModal({
        content: `${res.data.item.name}상품이 수정되었습니다.  :)`,
        callbackButton: {
          확인: '', //() => {
          //   navigate(window.location.reload(), { state: { from: window.location.reload() } });
          // },
        },
      });
    } catch (err) {
      // console.log(err);
      openModal({
        content: `${err.response?.data.message}`,
        callbackButton: {
          확인: () => {
            navigate('/', { state: { from: '/' } });
          },
        },
      });
    }
  };

  return (
    <>
      <div className="item-wrapper">
        <div className="main-title">
          <p className="main-contents-title">상품 수정</p>
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
                      id="mainImages"
                      type="file"
                      {...register('mainImages', {
                        minLength: {
                          value: `${product?.mainImages[0].name}`,
                          message: '상품사진을 넣어주세요.',
                        },
                      })}
                    />
                  </div>
                  {errors.i1 && <p className="err-text">{errors.i1.message}</p>}
                </div>

                <div className="signup-input-box">
                  <div className="form-input ">
                    <textarea
                      className="type-textarea"
                      placeholder="상품 설명을 입력해주세요."
                      id="content"
                      type="text"
                      {...register('d1', {
                        minLength: {
                          value: 10,
                          message: '10자리 이상 입력하세요.',
                        },
                      })}
                    />
                  </div>
                  {errors.d1 && <p className="err-text">{errors.d1.message}</p>}
                </div>

                <div className="product-sub-layout">
                  <div className="signup-input-box">
                    <div className="form-input ">
                      <textarea
                        className="type-textarea"
                        placeholder="상품 설명을 입력해주세요."
                        id="content"
                        type="text"
                        {...register('d2', {
                          minLength: {
                            value: 10,
                            message: '10자리 이상 입력하세요.',
                          },
                        })}
                      />
                    </div>
                    {errors.d2 && <p className="err-text">{errors.d2.message}</p>}
                  </div>
                </div>
              </div>
              <div className="product-sub-layout">
                <div className="product-layout">
                  <div className="signup-input-box">
                    <div className="form-input ">
                      <textarea
                        className="type-textarea"
                        placeholder="상품 설명을 입력해주세요."
                        id="content"
                        type="text"
                        {...register('d3', {
                          minLength: {
                            value: 10,
                            message: '10자리 이상 입력하세요.',
                          },
                        })}
                      />
                    </div>
                    {errors.d3 && <p className="err-text">{errors.d3.message}</p>}
                  </div>
                </div>
              </div>
            </fieldset>

            <div className="button-box type-btn-gap">
              <button className="button button-small btn-Fill btn-layout type-sales-btn" type="submit">
                수정하기
              </button>
              <button className="button button-small btn-null btn-layout type-sales-btn" onClick={handleDeletClick}>
                삭제하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SellerSalesListEdit;
