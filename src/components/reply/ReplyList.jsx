import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useQuery } from '@tanstack/react-query';
import useUserStore from '@zustand/store';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function ReplyList() {
  const navigate = useNavigate();
  const axios = useCustomAxios();
  const { user } = useUserStore();

  const { register, handleSubmit } = useForm();

  // const { data } = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: () => axios.get(`/posts/${user?._id}/replies`),
  //   select: (response) => response.data,
  //   suspense: true,
  // });

  const onSubmit = (formData) => {};

  return (
    <>
      <div className="comment">
        <div className="comment-item">
          <div className="comment-info">
            <p className="comment-user">멋쟁이사자</p>
            <p className="comment-time">2분전</p>
          </div>
          <p className="comment-detail">좋은 정보 감사해요!</p>
        </div>
        <div className="comment-item">
          <div className="comment-info">
            <p className="comment-user">멋쟁이호랑이</p>
            <p className="comment-time">방금전</p>
          </div>
          <p className="comment-detail">유익한 정보 좋아요!</p>
        </div>
      </div>
      <div className="comment-input">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-textarea">
            <textarea type="text" placeholder="댓글을 입력하세요"></textarea>
          </div>
          <div className="magarzin-btn-box">
            <button type="button" className="button button-small type-magarzin-btn" onClick={() => navigate('/magazine')}>
              목록 보기
            </button>
            <button type="submit" className="button button-small type-magarzin-btn">
              작성 하기
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ReplyList;
