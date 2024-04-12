import arrow from '@public/dropup_icon.svg';
import coffee_1 from '@public/coffee-1.jpg';

function UserOrderListItem() {
  return (
    <>
      <div className="l_wrapper">
        <div className="item-wrapper">
          <div className="main-content">
            <div className="order">
              <div className="order-list">
                <div className="order-item-container">
                  <div className="order-header">
                    <p className="order-number">주문번호</p>
                    <p>20240404123456</p>
                  </div>
                  <div className="order-header">
                    <p className="order-date">주문일자</p>
                    <p>2024-04-04</p>
                  </div>
                </div>
                <div className="order-main">
                  <div className="order-main-item-title">
                    <img src={coffee_1} alt="상품 사진" />
                  </div>
                  <div className="order-main-item-desc">
                    <div className="order-main-item">
                      <p>로스티드 허니 애플잼</p>
                      <p>14,000원 /1개</p>
                    </div>
                    <div className="order-main-item-price">3,000원</div>
                    <div className="order-main-item-status">주문완료</div>
                  </div>
                </div>
                {/* <!-- 아래부터 아코디언으로 오픈 예정 --> */}
                <div className="order-detail">
                  <div className="order-detail-title">구매자 정보</div>
                  <div className="order-detail-list">
                    <div className="order-detail-items">
                      <p className="order-detail-item">주문자</p>
                      <p>보람3조</p>
                    </div>
                    <div className="order-detail-items">
                      <p className="order-detail-item">연락처</p>
                      <p>010-1234-1234</p>
                    </div>
                    <div className="order-detail-items">
                      <p className="order-detail-item">이메일</p>
                      <p>u1@market@com</p>
                    </div>
                  </div>
                  <div className="order-detail-title">배송지 정보</div>
                  <div className="order-detail-list">
                    <div className="order-detail-items">
                      <p className="order-detail-item">수령인</p>
                      <p>보람3조</p>
                    </div>
                    <div className="order-detail-items">
                      <p className="order-detail-item">연락처</p>
                      <p>010-1234-1234</p>
                    </div>
                    <div className="order-detail-items">
                      <p className="order-detail-item">배송지</p>
                      <p>서울시 강남구 역삼동 12</p>
                    </div>
                  </div>
                </div>
                <div className="order-footer">
                  <div className="order-footer-title">주문 금액 상세</div>
                  <div className="order-detail-list">
                    <div className="order-footer-items">
                      <p className="order-footer-item">주문 금액</p>
                      <p className="order-footer-item type_big">17,000원</p>
                    </div>
                    <div className="order-footer-items">
                      <p className="order-detail-item type_gray">상품 금액</p>
                      <p>14,000원</p>
                    </div>
                    <div className="order-footer-items">
                      <p className="order-detail-item type_gray">배송비</p>
                      <p>3,000원</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-detail-close">
                <img src={arrow} alt="디테일 페이지 접기 화살표" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserOrderListItem;
