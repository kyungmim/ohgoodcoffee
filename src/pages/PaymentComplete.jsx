function PaymentComplete() {
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
                  <p className="payment-form-inner type_gray with_paddingbottom">결제 일시 - 2024-04-05</p>
                  <p className="payment-form-inner">136,000 원</p>
                </div>
              </div>
              <div className="payment-form">
                <p className="payment-title">주문번호</p>
                <p>20240405123456</p>
              </div>
              <div className="payment-form">
                <div className="payment-title">배송지</div>
                <div>
                  <p className="payment-form-inner with_paddingbottom">보람3조</p>
                  <p className="payment-form-inner with_paddingbottom">서울시 강남구 역삼동 123</p>
                  <p className="payment-form-inner with_paddingbottom">조심히 배달해주세요!</p>
                </div>
              </div>
              <div className="payment-form">
                <p className="payment-title">배송 방법</p>
                <p>택배</p>
              </div>
            </div>
            <div className="button-area no_margin">
              <button className="button button-large btn-Fill" type="submit">
                주문 상세 보기
              </button>
              <button className="button button-large btn-null" type="button">
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
