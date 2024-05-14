function ReplyList() {
  return (
    <>
      <div className="comment">
        <div className="comment-header">
          <p className="comment-user">멋쟁이사자</p>
          <p className="comment-time">2분전</p>
        </div>
        <p className="comment-detail">좋은 정보 감사해요!</p>
      </div>
      <div className="comment">
        <div className="comment-header">
          <p className="comment-name">멋쟁이호랑이</p>
          <p className="comment-time">방금전</p>
        </div>
        <p className="comment-detail">유익한 정보 좋아요!</p>
      </div>

      <div className="comment-footer">
        <form>
          <div className="form-group">
            <textarea type="text" className="form-control" placeholder="댓글을 입력하세요" required></textarea>
          </div>
        </form>
        <div className="comment-btns"></div>
      </div>
    </>
  );
}

export default ReplyList;
