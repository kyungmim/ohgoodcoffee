import PlusIcon from '@public/plus.svg';
import EqualIcon from '@public/equal_icon.svg';
import coffee_1 from '@public/coffee-1.jpg';
import coffee_2 from '@public/coffee-2.jpg';
import coffee_3 from '@public/coffee-3.jpg';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <>
      <div className="contents-cart">
        <div className="l_wrapper">
          <div className="cart">
            <div className="cart-title">
              <h3 className="cart-layout cart-procuct">상품 정보</h3>
              <h3 className="cart-layout cart-quantity">수량</h3>
              <h3 className="cart-layout cart-price">주문 금액</h3>
              <h3 className="cart-layout cart-delivery">배송비</h3>
              <div className="cart-layout cart-check">
                <div className="form-input-radio">
                  <input type="checkbox" name="type" id="type" checked />
                </div>
              </div>
            </div>
            {/* <!-- cart-title --> */}

            <div className="cart-item">
              <div className="cart-layout cart-procuct">
                <div className="cart-item-info">
                  <div className="cart-item-cover">
                    <img src={coffee_1} alt="커피이미지" />
                  </div>
                  <p className="cart-item-title">[프릳츠] Las Moritas Yellow Caturra Washed</p>
                </div>
                {/* <!-- cart-item-info --> */}
              </div>

              <p className="cart-layout cart-quantity">3</p>
              <p className="cart-layout cart-price">25,000</p>
              <p className="cart-layout cart-delivery">3000</p>
              <div className="cart-layout cart-check">
                <div className="form-input-radio">
                  <input type="checkbox" name="type" id="type" checked />
                </div>
              </div>
            </div>
            {/* <!-- cart-item 1 --> */}

            <div className="cart-item">
              <div className="cart-layout cart-procuct">
                <div className="cart-item-info">
                  <div className="cart-item-cover">
                    <img src={coffee_2} alt="커피이미지" />
                  </div>
                  <p className="cart-item-title">(4월의 커피) 온두라스 벤자민 파즈 워시드 200g</p>
                </div>
                {/* <!-- cart-item-info --> */}
              </div>

              <p className="cart-layout cart-quantity">10</p>
              <p className="cart-layout cart-price">35,000</p>
              <p className="cart-layout cart-delivery">3000</p>
              <div className="cart-layout cart-check">
                <div className="form-input-radio">
                  <input type="checkbox" name="type" id="type" checked />
                </div>
              </div>
            </div>
            {/* <!-- cart-item 2 --> */}

            <div className="cart-item">
              <div className="cart-layout cart-procuct">
                <div className="cart-item-info">
                  <div className="cart-item-cover">
                    <img src={coffee_3} alt="커피이미지" />
                  </div>
                  <p className="cart-item-title">[프릳츠] Las Moritas Yellow Caturra Washed</p>
                </div>
                {/* <!-- cart-item-info --> */}
              </div>

              <p className="cart-layout cart-quantity">7</p>
              <p className="cart-layout cart-price">70,000</p>
              <p className="cart-layout cart-delivery">0</p>
              <div className="cart-layout cart-check">
                <div className="form-input-radio">
                  <input type="checkbox" name="type" id="type" checked />
                </div>
              </div>
            </div>
            {/* <!-- cart-item 3 --> */}

            <div className="cart-total">
              <p className="cart-total-title">
                총 주문 상태 <span className="cart-total-point">3</span> 개
              </p>

              <div className="cart-total-list">
                <div className="cart-tota-item">
                  <p className="cart-total-num">130,000 원</p>
                  <p className="cart-total-txt">상품 금액</p>
                </div>

                <div className="cart-total-plus">
                  <img src={PlusIcon} alt="더하기" />
                </div>

                <div className="cart-tota-item">
                  <p className="cart-total-num">6,000 원</p>
                  <p className="cart-total-txt">배송비</p>
                </div>

                <div className="cart-total-equal">
                  <img src={EqualIcon} alt="합계" />
                </div>

                <div className="cart-tota-item">
                  <p className="cart-total-num">130,000 원</p>
                  <p className="cart-total-txt">총 주문 금액</p>
                </div>
              </div>
              {/* <!-- total --> */}
            </div>

            <button className="button button-large btn-null btn-layout">주문하기</button>

            <Link to="/mainpage" className="cart-more">
              계속 쇼핑하기
            </Link>
          </div>
        </div>
        {/* <!-- l_wrapper --> */}
      </div>
    </>
  );
}

export default Cart;
