import PropTypes from 'prop-types';

UserReviewItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function UserReviewItem({ item }) {
  console.log('item', item);

  return (
    <>
      <div className="l_wrapper">
        <div className="item-wrapper">
          <div className="main-content">
            <div className="review-list">
              <div className="review">
                <p>{item.brand}</p>
                <div className="review-contents">
                  <p className="review-content-desc">{item.contents}</p>
                  <p className="review-content-time">{item.createdAt}</p>
                </div>
              </div>
              <div className="review">
                <p>brand</p>
                <div className="review-contents">
                  <p className="review-content-desc">배송이 느려서 불편한거 빼고 괜찮아요~</p>
                  <p className="review-content-time">2024-02-20</p>
                </div>
              </div>
              <div className="review">
                <p>brand</p>
                <div className="review-contents">
                  <p className="review-content-desc">맛있어요!</p>
                  <p className="review-content-time">2024-02-20</p>
                </div>
              </div>
              <div className="review">
                <p>brand</p>
                <div className="review-contents">
                  <p className="review-content-desc">배송이 느려서 불편한거 빼고 괜찮아요~</p>
                  <p className="review-content-time">2024-02-20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserReviewItem;
