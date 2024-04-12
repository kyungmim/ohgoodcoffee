function SellerInfo() {
  return (
    <>
      <div className="l_wrapper">
        <div className="item-wrapper">
          <div className="main-content">
            <div className="profile-settings">
              <div className="profile-setting">
                <div className="profile-item">
                  <h1 className="profile-item-title">Type</h1>
                  <p>Seller</p>
                </div>
                <div className="profile-item">
                  <h1 className="profile-item-title">Name</h1>
                  <p>보람3조</p>
                </div>
                <div className="profile-item">
                  <h1 className="profile-item-title">Email</h1>
                  <p>s1@market.com</p>
                </div>
                <div className="profile-item">
                  <h1 className="profile-item-title">Phone Number</h1>
                  <p>010-1234-5678</p>
                </div>
                <div className="profile-item">
                  <h1 className="profile-item-title">Address</h1>
                  <p>서울시 강남구 역삼동 123</p>
                </div>
              </div>
            </div>
          </div>
          <div className="button-area">
            <button className="button button-large btn-Fill btn-layout" type="submit">
              수정하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerInfo;
