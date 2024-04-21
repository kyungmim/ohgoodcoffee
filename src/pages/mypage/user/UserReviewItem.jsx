import PropTypes from 'prop-types';

UserReviewItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function UserReviewItem({ item }) {
  return (
    <>
      <div className="review">
        <div className="review-contents">
          <p>{item.user.name}</p>
          <p className="review-content-time">{item.createdAt}</p>
        </div>
        <p className="review-content-desc">{item.content}</p>
      </div>
    </>
  );
}

export default UserReviewItem;
