import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useModalStore from '@zustand/useModalStore.mjs';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from '@pages/mypage/seller/SellerMypage.module.css';

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
      <div className={styles.itemWrapper}>
        <div className={styles.mainTitle}>
          <p className={styles.mainContentsTitle}>상품 등록</p>
        </div>
        <div className={styles.mainContent}>
          <form className={styles.signupForm} onSubmit={handleSubmit(onSubmit)}>
            <fieldset className={styles.signupLayout}>
              <label className={styles.signupSubTitle} htmlFor="name">
                Product Name<span className={styles.signupRequiredPoint}>*</span>
              </label>
              <div className={styles.signupInputBox}>
                <div className={styles.formInput}>
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
                {errors.name && <p className={styles.errText}>{errors.name.message}</p>}
              </div>
            </fieldset>

            <fieldset className={styles.signupLayout}>
              <label className={styles.signupSubTitle} htmlFor="price">
                Price<span className={styles.signupRequiredPoint}>*</span>
              </label>
              <div className={styles.signupInputBox}>
                <div className={styles.formInput}>
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
                {errors.price && <p className={styles.errText}>{errors.price.message}</p>}
              </div>
            </fieldset>

            <fieldset className={styles.signupLayout}>
              <label className={styles.signupSubTitle} htmlFor="quantity">
                Quantity <span className={styles.signupRequiredPoint}>*</span>
              </label>
              <div className={styles.signupInputBox}>
                <div className={styles.formInput}>
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
                {errors.quantity && <p className={styles.errText}>{errors.quantity.message}</p>}
              </div>
            </fieldset>

            <fieldset className={styles.signupLayout}>
              <label className={styles.signupSubTitle} htmlFor="shippingFees">
                ShippingFees <span className={styles.signupRequiredPoint}>*</span>
              </label>
              <div className={styles.signupInputBox}>
                <div className={styles.formInput}>
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
                {errors.shippingFees && <p className={styles.errText}>{errors.shippingFees.message}</p>}
              </div>
            </fieldset>

            <fieldset className={styles.signupLayout}>
              <label className={styles.signupSubTitle} htmlFor="type">
                Category
              </label>

              <div className={styles.signupSelectBox}>
                <div className={styles.signupSelectBoxItem}>
                  <select className={styles.select} id="type" {...register('type')}>
                    <option value="new">New</option>
                    <option value="best">Best</option>
                  </select>
                </div>
              </div>
            </fieldset>

            <fieldset className={styles.signupLayout}>
              <label className={styles.signupSubTitle} htmlFor="content">
                Product Content<span className={styles.signupRequiredPoint}>*</span>
              </label>
              <div className={styles.productLayout}>
                <p className={styles.productMainContentText}>Main Contents</p>

                <div className={styles.signupInputBox}>
                  <div className={styles.formInput}>
                    <input
                      multiple
                      id="mainImages"
                      type="file"
                      {...register('mainImages', {
                        required: '상품사진은 필수 입니다.',
                      })}
                    />
                  </div>
                  {errors.mainImages && <p className={styles.errText}>{errors.mainImages.message}</p>}
                </div>

                <div className={styles.signupInputBox}>
                  <div className={styles.formInput}>
                    <textarea
                      className={styles.typeTextarea}
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
                  {errors.content && <p className={styles.errText}>{errors.content.message}</p>}
                </div>

                <div className={styles.productSubLayout}>
                  <div className={styles.productLayout}>
                    <p className={styles.productMainContentText}>Sub Contents</p>

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

                    <div className={styles.signupInputBox}>
                      <div className={styles.formInput}>
                        <textarea
                          className={styles.typeTextarea}
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
                      {errors.content && <p className={styles.errText}>{errors.content.message}</p>}
                    </div>
                  </div>
                </div>
                <div className={styles.productSubLayout}>
                  <div className={styles.productLayout}>
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

                    <div className={styles.signupInputBox}>
                      <div className={styles.formInput}>
                        <textarea
                          className={styles.typeTextarea}
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
                      {errors.content && <p className={styles.errText}>{errors.content.message}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>

            <button className={`${styles.button} ${styles.buttonLarge} ${styles.btnFill} ${styles.btnLayout}`} type="submit">
              등록하기
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SellerUploadProduct;
