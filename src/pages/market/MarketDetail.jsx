import Wishlist_Dis from '@public/wishlist_dis.svg';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useUserStore from '@zustand/store';
import useModalStore from '@zustand/useModalStore.mjs';

function MarketDetail() {
  const axios = useCustomAxios();
  const { _id } = useParams();
  const { user } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [productQuantity, setProductQuantity] = useState(1);
  const openModal = useModalStore((state) => state.openModal);

  const { data } = useQuery({
    queryKey: ['products', _id],
    queryFn: () => axios.get(`/products/${_id}`),
    select: (response) => response.data,
    suspense: true,
  });

  const item = data?.item;

  const handleSubmitCart = async () => {
    let cart = { product_id: Number(_id), quantity: productQuantity };
    await axios.post('/carts', cart);
    openModal({
      content: '장바구니에 담겼습니다 :) <br />  장바구니로 이동하시겠습니까?',
      callbackButton: {
        확인: () => {
          navigate('/carts', { state: { from: '/carts' } });
        },
        취소: '',
      },
    });
  };

  const handleSubmitBuy = async () => {
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
          user: user,
        },
      };
      try {
        const gotoPaymentComplete = confirm(`${productQuantity}개의 ${item.name}제품을 구매하시겠습니까?`);
        if (gotoPaymentComplete) {
          const response = await axios.post('/orders', order);
          console.log(response);
          // 결제 완료 페이지로 response 전달
          navigate('/orders', { state: { from: location.pathname, orderResponse: response.data } });
        }
      } catch (err) {
        alert(err.response?.data.message);
      }
    } else {
      const gotoLogin = confirm('로그인 후 이용 가능합니다.\n로그인 페이지로 이동하시겠습니까?');
      gotoLogin && navigate('/users/login', { state: { from: location.pathname } });
    }
  };

  const handleReduceQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity((prev) => prev - 1);
    }
  };

  const handleCheckQuantity = () => {
    let realQuantity = item.quantity - item.buyQuantity;
    console.log('realQuantity', realQuantity);
    if (productQuantity >= realQuantity) {
      alert(`현재 구매 가능한 재고 수량은 ${realQuantity} 개 입니다.`);
      setProductQuantity(realQuantity);
      return;
    } else {
      setProductQuantity((prev) => prev + 1);
    }
  };

  return (
    <>
      <section className="section type_market-desc">
        <div className="l_wrapper">
          <div className="market-overview-top">
            <img className="card-cover" src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.mainImages[0]?.name}`} alt={`${item.name} 상품 사진`} />

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

              <div className="overview-contents">{item.content[0].d1}</div>

              <div className="overview-selling-count">
                <p className="overview-selling-title">수량</p>
                <div>
                  <div className="selling-row">
                    <div className="quantity-row">
                      <div className="quantity-button" onClick={handleReduceQuantity}>
                        -{/* <img className="selling-icon down" src={Minus} />  */}
                      </div>
                      <div>
                        <p className="selling-pick">{productQuantity}</p>
                      </div>
                      <div className="quantity-button" onClick={handleCheckQuantity}>
                        +{/* <img className="selling-icon up" src={Plus} /> */}
                      </div>
                    </div>
                    <p className="selling-price">{item.price * productQuantity.toLocaleString('ko-KR')}원</p>
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
            {/* <img className="card-cover" src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.detailImages[0]?.fileName}`} alt={`${item.name} 상품 상세페이지`} /> */}
            <div className="market-overview-bottom-cover">
              <img
                className="market-overview-bottom-src"
                src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.mainImages[0]?.name}`}
                alt={`${item.name} 상품 사진`}
              />
            </div>
            <div className="market-overview-bottom-desc">
              <p className="market-overview-bottom-text">
                “안 돼요, 슈피넬씨. 쓸데 없어요. 내가 훌륭한 것을 연주하기를 기대하고 계실는지 누가 알겠어요! 그런데 나는 배운 것을 모두 잊어버렸는걸요. 정말입니다. 악보를 보지 않고는 거의 아무것도 칠
                수 없어요.” “그러시면, 그 ‘거의 아무 것도 없는’ 바로 그것을 쳐 주십시오!” – 토마스 만, 『트리스탄』 중에서
              </p>
            </div>
            <div className="market-overview-bottom-cover">
              <img
                className="market-overview-bottom-src"
                src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.mainImages[0]?.name}`}
                alt={`${item.name} 상품 사진`}
              />
            </div>
            <div className="market-overview-bottom-desc">
              <p className="market-overview-bottom-text">
                음표는 악보에 표시되어 그 탄생을 알리고 움직이는 아름다움을 갖게 됩니다. 모든 악기에서 파생된 소리는 곧 하나의 연주를 위해 존재하게 됩니다. 토마스 만의 작품에 등장하는 곡들은 작품의
                전체적 흐름을 이끌어가는 역할을 합니다. 그의 문장들은 마치 하나의 곡의 형태를 만들며 작곡을 하듯 묘사하고 있습니다. 존재의 이유를 아는 소리는 자유롭고 악보 안에서 자신의 위치를 정확히
                잡아냅니다. 이 다양한 소리의 연주처럼 각기 다른 대륙이 조화를 갖도록 만들었습니다. 중남미의 균형감, 아시아의 묵직한 풍미, 아프리카의 다채로운 향미를 담아낸 버터 팻 트리오입니다. 버터
                팻 트리오는 커피가 가진 묵직한 질감과 진한 풍미를 만들기 위해, 중남미의 커피를 베이스로 사용하여 모든 산지의 커피를 최대한 활용했습니다. 견과류의 노트와 단맛이 지배적인 브라질 커피를
                베이스로 하며, 콜롬비아와 과테말라를 추가하여 복합성과 질감을 더했습니다. 에티오피아는 다크로스팅 단계에서도 그 본연의 과일 풍미를 놓치지 않도록 잡아주고, 인도네시아의 이국적 향신료와
                같이 그 쌉싸름한 풍미로 마무리합니다. 버터 팻 트리오는 균형감이 좋은 진한 커피를 지향합니다. 단단하면서도 힘 있는 풍미로 스파이시한 다크 초콜릿의 여운으로 완성됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MarketDetail;
