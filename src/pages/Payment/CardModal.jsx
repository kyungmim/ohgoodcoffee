import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import styles from './CardModal.module.css'; 

const CardModal = ({ isOpen, onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const cardNumberPart1 = watch('cardNumberPart1', '');
  const cardNumberPart2 = watch('cardNumberPart2', '');
  const cardNumberPart3 = watch('cardNumberPart3', '');
  const cardNumberPart4 = watch('cardNumberPart4', '');

  if (!isOpen) return null;

  const onSubmitForm = (data) => {
    const cardNumber = `${data.cardNumberPart1}${data.cardNumberPart2}${data.cardNumberPart3}${data.cardNumberPart4}`;
    onSubmit({ ...data, cardNumber });
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.modalClose} onClick={onClose}>
          X
        </button>
        <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>
          <h2>새로운 카드 추가</h2>
          <div className={styles.formDiv}>
            <label className={styles.formLabel}>카드 번호</label>
            <div className={styles.cardNumberContainer}>
              <input
                type="text"
                maxLength="4"
                className={styles.formInput}
                {...register('cardNumberPart1', {
                  required: '카드 번호는 필수 항목입니다.',
                  pattern: {
                    value: /^[0-9]{4}$/,
                    message: '4자리 숫자를 입력하세요.',
                  },
                })}
              />
              <input
                type="text"
                maxLength="4"
                className={styles.formInput}
                {...register('cardNumberPart2', {
                  required: '카드 번호는 필수 항목입니다.',
                  pattern: {
                    value: /^[0-9]{4}$/,
                    message: '4자리 숫자를 입력하세요.',
                  },
                })}
              />
              <input
                type="text"
                maxLength="4"
                className={styles.formInput}
                {...register('cardNumberPart3', {
                  required: '카드 번호는 필수 항목입니다.',
                  pattern: {
                    value: /^[0-9]{4}$/,
                    message: '4자리 숫자를 입력하세요.',
                  },
                })}
              />
              <input
                type="text"
                maxLength="4"
                className={styles.formInput}
                {...register('cardNumberPart4', {
                  required: '카드 번호는 필수 항목입니다.',
                  pattern: {
                    value: /^[0-9]{4}$/,
                    message: '4자리 숫자를 입력하세요.',
                  },
                })}
              />
            </div>
            {(errors.cardNumberPart1 || errors.cardNumberPart2 || errors.cardNumberPart3 || errors.cardNumberPart4) && <span className={styles.error}>유효한 카드 번호를 입력하세요.</span>}
          </div>
          <div className={styles.formDiv}>
            <label className={styles.formLabel}>카드 소지자 이름</label>
            <input type="text" className={styles.formInput} {...register('cardHolderName', { required: '카드 소지자 이름은 필수 항목입니다.' })} />
            {errors.cardHolderName && <span className={styles.error}>{errors.cardHolderName.message}</span>}
          </div>
          <div className={styles.formDiv}>
            <label className={styles.formLabel}>만료 월</label>
            <input type="text" className={styles.formInput} {...register('expiryMonth', { required: '만료 월은 필수 항목입니다.' })} />
            {errors.expiryMonth && <span className={styles.error}>{errors.expiryMonth.message}</span>}
          </div>
          <div className={styles.formDiv}>
            <label className={styles.formLabel}>만료 연도</label>
            <input type="text" className={styles.formInput} {...register('expiryYear', { required: '만료 연도는 필수 항목입니다.' })} />
            {errors.expiryYear && <span className={styles.error}>{errors.expiryYear.message}</span>}
          </div>
          <div className={styles.formDiv}>
            <label className={styles.formLabel}>CVV</label>
            <input type="text" className={styles.formInput} {...register('cvv', { required: 'CVV는 필수 항목입니다.' })} />
            {errors.cvv && <span className={styles.error}>{errors.cvv.message}</span>}
          </div>
          <button type="submit" className="button button-large btn-Fill btn-layout">
            저장 & 확인
          </button>
        </form>
      </div>
    </div>
  );
};

CardModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CardModal;
