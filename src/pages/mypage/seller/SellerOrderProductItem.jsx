import PropTypes from 'prop-types';
import arrow from '@assets/dropup_icon.svg';
import { useState } from 'react';

SellerOrderProductItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function SellerOrderProductItem({ item }) {
  const [itemInfo, setItemInfo] = useState(false);
  const products = item?.products[0];
  const cost = item?.cost;
  const info = item?.address;

  const handleClick = () => {
    setItemInfo(!itemInfo);
  };

  return (
    <>
      <button className="order-main" onClick={handleClick}>
        <div className="order-main-item-title">
          <img src={`${import.meta.env.VITE_API_SERVER}${products.image.path}`} alt={item.products.name} />
        </div>
        <div className="order-main-item-desc">
          <div className="order-main-item">
            <p>{item.products[0].name}</p>
            <p>
              {products.price.toLocaleString('ko-KR')}원 / {products.quantity}개
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
                <p>{info.userName}</p>
              </div>
              <div className="order-detail-items">
                <p className="order-detail-item">연락처</p>
                <p>{info.phone}</p>
              </div>
            </div>
            <div className="order-detail-title">배송지 정보</div>
            <div className="order-detail-list">
              <div className="order-detail-items">
                <p className="order-detail-item">수령인</p>
                <p>{info.userName}</p>
              </div>
              <div className="order-detail-items">
                <p className="order-detail-item">연락처</p>
                <p>{info.phone}</p>
              </div>
              <div className="order-detail-items">
                <p className="order-detail-item">배송지</p>
                <p>
                  {info.value} / {info.address}
                </p>
              </div>
            </div>
          </div>
          <div className="order-footer">
            <div className="order-footer-title">주문 금액 상세</div>
            <div className="order-detail-list">
              <div className="order-footer-items">
                <p className="order-footer-item">주문 금액</p>
                <p className="order-footer-item type_big">{cost.total.toLocaleString('ko-KR')}원</p>
              </div>
              <div className="order-footer-items">
                <p className="order-detail-item type_gray">상품 금액</p>
                <p>{cost.products.toLocaleString('ko-KR')}원</p>
              </div>
              <div className="order-footer-items">
                <p className="order-detail-item type_gray">배송비</p>
                <p>{cost.shippingFees.toLocaleString('ko-KR')}원</p>
              </div>
            </div>
          </div>
          <button className="order-detail-close" onClick={handleClick}>
            <img src={arrow} alt="디테일 페이지 접기 화살표" />
          </button>
        </div>
      )}
    </>
  );
}

export default SellerOrderProductItem;
