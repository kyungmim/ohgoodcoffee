import arrow from '@public/dropup_icon.svg';
import PropTypes from 'prop-types';
import useUserStore from '@zustand/store';
import UserOrderProductItem from '@pages/mypage/user/UserOrderProductItem';
import { useEffect, useState } from 'react';

UserOrderListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function UserOrderListItem({ item }) {
  const { user } = useUserStore();
  const [isActive, setIsActive] = useState(false);

  // useEffect를 사용하여 한 번만 실행되는 이벤트 리스너 추가
  useEffect(() => {
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach((item) => {
      const header = item.querySelector('.accordion-header');
      header.addEventListener('click', () => {
        setIsActive(!isActive);
      });
    });

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      accordionItems.forEach((item) => {
        const header = item.querySelector('.accordion-header');
        header.removeEventListener('click', () => {
          setIsActive(!isActive);
        });
      });
    };
  }, [isActive]); // 빈 배열을 전달하여 최초 렌더링시에만 실행되도록 함

  // 문제는 전체가 펼쳐짐....ㅜㅜ

  const productsList = item.products.map((product) => <UserOrderProductItem key={product._id} product={item.products[0]} />);

  return (
    <>
      <div className={`accordion-item ${isActive ? 'active' : ''}`}>
        <div className="accordion-header">
          <div className="order-item-container">
            <div className="order-header">
              <p>주문번호</p>
              <p className="order-number">20240404123456</p>
            </div>
            <div className="order-header">
              <p className="order-date">주문일자 2024-04-04</p>
            </div>
          </div>
          <div className="order-list">{productsList}</div>
          {/* <!-- 아래부터 아코디언으로 오픈 예정 --> */}
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
                  <p>{user.phone}</p>
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
                  <p>{item.address.name}</p>
                </div>
                <div className="order-detail-items">
                  <p className="order-detail-item">연락처</p>
                  <p>{item.address.phone}</p>
                </div>
                <div className="order-detail-items">
                  <p className="order-detail-item">배송지</p>
                  <p>{item.address.value}</p>
                </div>
              </div>
            </div>
            <div className="order-footer">
              <div className="order-footer-title">주문 금액 상세</div>
              <div className="order-detail-list">
                <div className="order-footer-items">
                  <p className="order-footer-item">주문 금액</p>
                  <p className="order-footer-item type_big">{item.cost.total}원</p>
                </div>
                <div className="order-footer-items">
                  <p className="order-detail-item type_gray">상품 금액</p>
                  <p>{item.cost.products}원</p>
                </div>
                <div className="order-footer-items">
                  <p className="order-detail-item type_gray">배송비</p>
                  <p>{item.cost.shippingFees}원</p>
                </div>
              </div>
            </div>
            <div className="order-detail-close">
              <img src={arrow} alt="디테일 페이지 접기 화살표" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserOrderListItem;
