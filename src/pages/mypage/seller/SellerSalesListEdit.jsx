import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useUserStore from '@zustand/store';
import useModalStore from '@zustand/useModalStore.mjs';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from '@pages/mypage/seller/SellerMypage.module.css';

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
    try {
      const res = await axios.patch(`/seller/products/${itemId}`, formData);
      openModal({
        content: `${res.data.updated.name}상품이 수정되었습니다.  :)`,
        callbackButton: {
          확인: () => {
            navigate(window.location.replace('/seller/mypage'), { state: { from: window.location.replace('/seller/mypage') } });
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
      <div className={styles.itemWrapper}>
        <div className={styles.mainTitle}>
          <p className={styles.mainContentsTitle}>상품 수정</p>
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
                    <textarea
                      className={styles.typeTextarea}
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
                  {errors.d1 && <p className={styles.errText}>{errors.d1.message}</p>}
                </div>

                <p className={styles.productMainContentText}>Sub Contents</p>
                <div className={styles.productSubLayout}>
                  <div className={styles.signupInputBox}>
                    <div className={styles.formInput}>
                      <textarea
                        className={styles.typeTextarea}
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
                    {errors.d2 && <p className={styles.errText}>{errors.d2.message}</p>}
                  </div>
                </div>
                <div className={styles.signupInputBox}>
                  <div className={styles.formInput}>
                    <textarea
                      className={styles.typeTextarea}
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
                  {errors.d3 && <p className={styles.errText}>{errors.d3.message}</p>}
                </div>
              </div>
            </fieldset>

            <div className={`${styles.buttonBox} ${styles.typeBtnGap}`}>
              <button className={`${styles.button} ${styles.buttonSmall} ${styles.btnFill} ${styles.btnLayout}  ${styles.typeSalesBtn}`} type="submit">
                수정하기
              </button>
              <button className={`${styles.button} ${styles.buttonSmall} ${styles.btnNull} ${styles.btnLayout}  ${styles.typeSalesBtn}`} onClick={handleDeletClick}>
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
