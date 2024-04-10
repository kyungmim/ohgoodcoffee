import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import SellerMyPageHeader from '@pages/mypage/seller/SellerMyPageHeader';

function SellerUploadProduct() {
  return (
    <>
      <Header />
      <SellerMyPageHeader />
      <div className="container">
        <div className="l_wrapper">
          <div className="item-wrapper">
            <div className="main-content">
              <form className="signup_form">
                <fieldset className="signup-layout">
                  <label className="signup-sub-title" htmlFor="photo">
                    Photo<span className="signup-required-point">*</span>
                  </label>
                  <div className="form-input">
                    <input type="file" name="photo" id="photo" />
                  </div>
                </fieldset>

                <fieldset className="signup-layout">
                  <label className="signup-sub-title" htmlFor="name">
                    Product Name<span className="signup-required-point">*</span>
                  </label>
                  <div className="form-input">
                    <input name="name" id="name" placeholder="상품 이름을 입력해주세요." type="text" />
                  </div>
                </fieldset>

                <fieldset className="signup-layout">
                  <label className="signup-sub-title" htmlFor="price">
                    Price<span className="signup-required-point">*</span>
                  </label>
                  <div className="form-input">
                    <input id="price" placeholder="가격을 입력해주세요." type="number" />
                  </div>
                </fieldset>

                <fieldset className="signup-layout">
                  <label className="signup-sub-title" htmlFor="quantity">
                    Quantity <span className="signup-required-point">*</span>
                  </label>
                  <div className="form-input">
                    <input name="quantity" id="quantity" placeholder="수량을 입력해주세요." type="number" />
                  </div>
                </fieldset>

                <fieldset className="signup-layout">
                  <label className="signup-sub-title" htmlFor="type">
                    Category<span className="signup-required-point">*</span>
                  </label>

                  <div className="signup-type">
                    <div className="signup-type-item">
                      <div className="form-input-radio">
                        <input type="checkbox" name="type" id="type" />
                      </div>
                      <span className="radio-title">New</span>
                    </div>
                    <div className="signup-type-item">
                      <div className="form-input-radio">
                        <input type="checkbox" name="type" id="type" />
                      </div>
                      <span className="radio-title">Best</span>
                    </div>
                  </div>
                </fieldset>
              </form>
              <div className="button-area">
                <button className="button button-large btn-Fill btn-layout" type="submit">
                  등록하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SellerUploadProduct;
