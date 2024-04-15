import PropTypes from 'prop-types';

UserReviewItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function UserReviewItem({ item }) {
  // console.log('item', item);

  return (
    <>
      <div className="review">
        <p>{item.user.name}</p>
        <div className="review-contents">
          <p className="review-content-desc">{item.content}</p>
          <p className="review-content-time">{item.createdAt}</p>
        </div>
      </div>
    </>
  );
}

export default UserReviewItem;
