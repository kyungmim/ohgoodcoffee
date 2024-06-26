import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useUserStore from '@zustand/store';
import useModalStore from '@zustand/useModalStore.mjs';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from '@components/reply/Reply.module.css';

function ReplyNew() {
  const openModal = useModalStore((state) => state.openModal);
  const navigate = useNavigate();
  const axios = useCustomAxios();
  const { itemId } = useUserStore();

  const { register, handleSubmit, reset } = useForm();

  const queryClient = useQueryClient();
  const addReply = useMutation({
    mutationFn: (formData) => axios.post(`/posts/${itemId}/replies`, formData),
    onSuccess() {
      queryClient.invalidateQueries(['posts', itemId, 'replies']);
      reset();
    },
  });

  const onSubmit = (formData) => {
    try {
      addReply.mutate(formData);
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
      <div className={styles.commentInput}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formTextarea}>
            <textarea id="content" type="text" placeholder="댓글을 입력하세요" {...register('content')}></textarea>
          </div>
          <div className={styles.magarzinBtnBox}>
            <button type="button" className={`${styles.button} ${styles.buttonSmall} ${styles.typeMagarzinBtn}`} onClick={() => navigate('/magazine')}>
              목록 보기
            </button>
            <button type="submit" className={`${styles.button} ${styles.buttonSmall} ${styles.typeMagarzinBtn}`}>
              작성 하기
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ReplyNew;
