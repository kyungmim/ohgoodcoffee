import Wishlist_Dis from '@public/wishlist_dis.svg';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useUserStore from '@zustand/store';

function MarketDetail() {
  const axios = useCustomAxios();
  const { _id } = useParams();
  const { user } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [productQuantity, setProductQuantity] = useState(1);

  const { data } = useQuery({
    queryKey: ['products', _id],
    queryFn: () => axios.get(`/products/${_id}`),
    select: (response) => response.data,
    suspense: true,
  });

  const item = data?.item;

  console.log(item);

  async function handleSubmitCart() {
    let cart = { product_id: Number(_id), quantity: productQuantity };
    await axios.post('/carts', cart);
    alert('해당 상품이 장바구니에 추가되었습니다.');
  }

  async function handleSubmitBuy() {
    let userData = user;
    if (userData) {
      let order = {
        products: [
          {
            _id: Number(_id),
            quantity: productQuantity,
          },
        ],
        address: {
          value: userData.address,
        },
      };
      try {
        const response = await axios.post('/orders', order);
        console.log(response);
        const gotoPaymentComplete = confirm(`${productQuantity}개의 ${item.name}제품을 구매하시겠습니까?`);
        gotoPaymentComplete && navigate('/orders', { state: { from: location.pathname } });
      } catch (err) {
        alert(err.response?.data.message);
      }
    } else {
      const gotoLogin = confirm('로그인 후 이용 가능합니다.\n로그인 페이지로 이동하시겠습니까?');
      gotoLogin && navigate('/users/login', { state: { from: location.pathname } });
    }
  }

  return (
    <>
      <section className="section type_market-desc">
        <div className="l_wrapper">
          <div className="market-overview-top">
            <img className="card-cover" src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.mainImages[0]?.fileName}`} alt={`${item.name} 상품 사진`} />
            <div className="market-overview-desc">
              <div className="overview-header">
                <p className="overview-title">{item.name}</p>
                <div className="overview-row">
                  <p className="overview-price">{item.price}원</p>
                  <div className="overview-wishlist">
                    <img className="wishlist-icon" src={Wishlist_Dis} />
                    <p className="wishlist-count">0</p>
                  </div>
                </div>
              </div>

              <div className="overview-contents">{item.content}</div>

              <div className="overview-selling-count">
                <p className="overview-selling-title">수량</p>
                <div>
                  <div className="selling-row">
                    <div className="quantity-row">
                      <div className="quantity-button" onClick={() => setProductQuantity((prev) => prev - 1)}>
                        -{/* <img className="selling-icon down" src={Minus} />  */}
                      </div>
                      <div>
                        <p className="selling-pick">{productQuantity}</p>
                      </div>
                      <div className="quantity-button" onClick={() => setProductQuantity((prev) => prev + 1)}>
                        +{/* <img className="selling-icon up" src={Plus} /> */}
                      </div>
                    </div>
                    <p className="selling-price">{item.price * productQuantity}원</p>
                  </div>
                </div>
              </div>
              <div className="selling-btns">
                <button className="button button-large btn-Fill" type="submit" onClick={handleSubmitBuy}>
                  Buying
                </button>
                <button className="button button-large btn-null" type="submit" onClick={handleSubmitCart}>
                  Cart
                </button>
              </div>
            </div>
          </div>
          <div className="market-overview-bottom">
            <img className="card-cover" src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.detailImages[0]?.fileName}`} alt={`${item.name} 상품 상세페이지`} />
          </div>
        </div>
      </section>
    </>
  );
}

export default MarketDetail;
