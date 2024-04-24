import PropTypes from 'prop-types';
import arrow from '@assets/dropup_icon.svg'; // 이미지 경로 수정 필요
import useUserStore from '@zustand/store';
import { useState } from 'react';
import { formatPhoneNumber } from '@utils/date';

UserOrderProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  item: PropTypes.object,
};

function UserOrderProductItem({ product, item }) {
  const { user } = useUserStore();
  const [itemInfo, setItemInfo] = useState(false);

  const handleShowClick = () => {
    setItemInfo(!itemInfo);
  };
  const handleHideClick = () => {
    setItemInfo(!itemInfo);
  };

  function getImageSrc(product) {
    if (product.image && product.image.name) {
      return `${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${product.image.name}`;
    } else {
      return `${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${product.image}`;
    }
  }

  return (
    <>
      <button className="order-main" onClick={handleShowClick}>
        <div className="order-main-item-title">
          <img src={getImageSrc(product)} alt="상품 사진" />
        </div>
        <div className="order-main-item-desc">
          <div className="order-main-item">
            <p>{product.name}</p>
            <p>
              {product.price.toLocaleString('ko-KR')}원 /{product.quantity}개
            </p>
          </div>
          <div className="order-main-item-status">주문완료</div>
        </div>
      </button>
      {itemInfo && (
        <div className="accordion-contents">
          <div className="order-detail">
            <div className="order-detail-title">구매자 정보</div>
            <div className="order-detail-list">
              <div className="order-detail-items">
                <p className="order-detail-item">주문자</p>
                <p>{user.name}</p>
              </div>
              <div className="order-detail-items">
                <p className="order-detail-item">연락처</p>
                <p>{formatPhoneNumber(user.phone)}</p>
              </div>
              <div className="order-detail-items">
                <p className="order-detail-item">이메일</p>
                <p>{user.email}</p>
              </div>
            </div>
            <div className="order-detail-title">배송지 정보</div>
            <div className="order-detail-list">
              <div className="order-detail-items">
                <p className="order-detail-item">수령인</p>
                <p>{item.address.userName}</p>
              </div>
              <div className="order-detail-items">
                <p className="order-detail-item">연락처</p>
                <p>{formatPhoneNumber(user.phone)}</p>
              </div>
              <div className="order-detail-items">
                <p className="order-detail-item">배송지</p>
                <p>{item.address.address}</p>
              </div>
            </div>
          </div>
          <div className="order-footer">
            <div className="order-footer-title">주문 금액 상세</div>
            <div className="order-detail-list">
              <div className="order-footer-items">
                <p className="order-footer-item">주문 금액</p>
                <p className="order-footer-item type_big">{item.cost.total.toLocaleString('ko-KR')}원</p>
              </div>
              <div className="order-footer-items">
                <p className="order-detail-item type_gray">상품 금액</p>
                <p>{item.cost.products.toLocaleString('ko-KR')}원</p>
              </div>
              <div className="order-footer-items">
                <p className="order-detail-item type_gray">배송비</p>
                <p>{item.cost.shippingFees.toLocaleString('ko-KR')}원</p>
              </div>
            </div>
          </div>
          <button className="order-detail-close" onClick={handleHideClick}>
            <img src={arrow} alt="디테일 페이지 접기 화살표" />
          </button>
        </div>
      )}
    </>
  );
}

export default UserOrderProductItem;
