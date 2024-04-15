import Plus from '@public/plus.svg';
import Minus from '@public/dash_icon.svg';
import Wishlist_Dis from '@public/wishlist_dis.svg';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

function MarketDetail() {
  const axios = useCustomAxios();
  const { _id } = useParams();
  const [productQuantity, setProductQuantity] = useState(1);

  const { data } = useQuery({
    queryKey: ['products', _id],
    queryFn: () => axios.get(`/products/${_id}`),
    select: (response) => response.data,
    suspense: true,
  });

  const item = data?.item;

  const handelSubmitCart = async () => {
    let cart = { product_id: Number(_id), quantity: productQuantity };
    await axios.post('/carts', cart);
    alert('해당 상품이 장바구니에 추가되었습니다.');
  };

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
                <button className="button button-large btn-Fill" type="submit">
                  Buying
                </button>
                <button className="button button-large btn-null" type="submit" onClick={handelSubmitCart}>
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
