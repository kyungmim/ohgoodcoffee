import PlusIcon from '@public/plus.svg';
import EqualIcon from '@public/equal_icon.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useUserStore from '@zustand/store';
import CartListItem from '@pages/CartListItem';
import { useQuery } from '@tanstack/react-query';
import useCustomAxios from '@hooks/useCustomAxios.mjs';

function CartList() {
  const axios = useCustomAxios();
  const { user } = useUserStore();
  const [fetch, setFetch] = useState(false);

  const { data } = useQuery({
    queryKey: ['carts'],
    queryFn: () => axios.get('/carts'),
    select: (response) => response.data.item,
    enabled: fetch,
  });

  useEffect(() => {
    if (user) {
      setFetch(true);
    }
  }, [user]);

  const itemList = data?.map((item) => <CartListItem key={item._id} item={item} />);

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

            {itemList}

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

export default CartList;