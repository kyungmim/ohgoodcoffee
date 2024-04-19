import { useLocation, useNavigate } from 'react-router-dom';

function PaymentComplete() {
  const location = useLocation();
  const navigate = useNavigate();
  const orderResponse = location.state?.orderResponse.item;
  console.log('orderResponse', orderResponse);

  const generateOrderNumber = (orderResponse) => {
    // 날짜에서 'YYYYMMDD' 형식 추출
    const datePart = orderResponse.createdAt.split(' ')[0].replace(/\./g, '');
    // ID 추출 및 포맷팅: _id가 100 이상일 때와 그렇지 않을 때를 구분
    let idPart = orderResponse._id.toString();
    if (orderResponse._id < 100) {
      idPart = '00' + idPart; // _id가 100 미만인 경우 앞에 '00'을 붙임
    } else if (orderResponse._id < 1000) {
      idPart = '0' + idPart; // _id가 100 이상 1000 미만인 경우 앞에 '0'을 붙임
    }
    // 1000 이상인 경우는 추가 문자 없이 _id만 사용 (이미 네 자리 이상일 가능성)

    // 최종 주문번호 조합
    const orderNumber = datePart + idPart;

    return orderNumber;
  };

  const orderNumber = generateOrderNumber(orderResponse);
  const orderdateParser = orderResponse.createdAt.split(' ')[0].replace(/\./g, '-');

  const formatPhoneNumber = (phoneNumber) => {
    const areaCode = phoneNumber.slice(0, 3);
    const middlePart = phoneNumber.slice(3, 7);
    const lastPart = phoneNumber.slice(7, 11);
    return `${areaCode}-${middlePart}-${lastPart}`;
  };

  return (
    <>
      <div className="container">
        <div className="l_wrapper">
          <div className="complete-container">
            <div className="complete-header">
              <h1 className="complete-title">주문완료</h1>
              <p className="complete-desc">주문해주셔서 감사합니다. :)</p>
            </div>
            <div className="complete-main">
              <div className="payment-form">
                <div className="payment-title">총 결제 금액</div>
                <div>
                  <p className="payment-form-inner with_paddingbottom">카드결제</p>
                  <p className="payment-form-inner type_gray with_paddingbottom">결제 일시 - {orderdateParser}</p>
                  <p className="payment-form-inner">{orderResponse.cost.total.toLocaleString('ko-KR')}원</p>
                </div>
              </div>
              <div className="payment-form">
                <p className="payment-title">주문번호</p>
                <p>{orderNumber}</p>
              </div>
              <div className="payment-form">
                <div className="payment-title">배송지</div>
                <div>
                  <p className="payment-form-inner with_paddingbottom">{orderResponse.address.user.name}</p>
                  <p className="payment-form-inner with_paddingbottom">{formatPhoneNumber(orderResponse.address.user.phone)}</p>
                  <p className="payment-form-inner with_paddingbottom">{orderResponse.address.user.address}</p>
                  <p className="payment-form-inner with_paddingbottom">조심히 배달해주세요!</p>
                </div>
              </div>
              <div className="payment-form">
                <p className="payment-title">배송 방법</p>
                <p>택배</p>
              </div>
            </div>
            <div className="">
              <button className="button button-large btn-Fill" type="submit" onClick={() => navigate('/mypage')}>
                주문 상세 보기
              </button>
              <button className="button button-large btn-null" type="button" onClick={() => navigate('/')}>
                홈페이지
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentComplete;
