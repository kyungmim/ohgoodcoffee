import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import useUserStore from '@zustand/store';
import useModalStore from '@zustand/useModalStore.mjs';
import HeartIcon from '@pages/market/HeartIcon';

function MarketDetail() {
  const axios = useCustomAxios();
  const { _id } = useParams();
  const { user } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [productQuantity, setProductQuantity] = useState(1);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [bookmarkQuantity, setBookmarkQuantity] = useState(0);
  const openModal = useModalStore((state) => state.openModal);

  const { data } = useQuery({
    queryKey: ['products', _id],
    queryFn: () => axios.get(`/products/${_id}`),
    select: (response) => response.data,
    suspense: true,
  });

  const item = data?.item;

  console.log('Item', item);
  console.log('User', user);

  const postBookmark = async () => {
    try {
      await axios.post(`/bookmarks/product/${item._id}`);
      setBookmarkQuantity((prev) => prev + 1);
    } catch (error) {
      console.error('Failed to add bookmark:', error);
    }
  };

  const deleteBookmark = async () => {
    let bookmarkId = item.bookmarks.find((b) => b.user_id === user._id)?._id;
    try {
      await axios.delete(`/bookmarks/${bookmarkId}`);
      setBookmarkQuantity((prev) => (prev > 0 ? prev - 1 : 0));
    } catch (error) {
      console.error('Failed to delete bookmark:', error);
    }
  };

  useEffect(() => {

    let bookmarkUser = item.bookmarks.find((bookmark) => bookmark.user_id === user._id);
    setIsBookmarked(!!bookmarkUser);
    setBookmarkQuantity(item.bookmarks.length);

    if (bookmarkUser) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  }, [item.bookmarks, user]);

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

  const handleToggleBookmark = () => {
    if (!user) {
      const gotoLogin = confirm('로그인 후 이용 가능합니다.\n로그인 페이지로 이동하시겠습니까?');
      gotoLogin && navigate('/users/login', { state: { from: location.pathname } });
      return;
    }

    if (isBookmarked) {
      deleteBookmark();
      setIsBookmarked(false);
    } else {
      postBookmark();
      setIsBookmarked(true);
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
                  <p className="overview-price">{item.price.toLocaleString('ko-KR')}원</p>
                  <div className="overview-wishlist">
                    <div className="wishlist-box" onClick={handleToggleBookmark}>
                      <div className="wishlist-icon">
                        <HeartIcon fill={isBookmarked ? '#FF0000' : '#AAAAAA'} />
                      </div>
                      <p className="wishlist-count">{bookmarkQuantity}</p>
                    </div>
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
                    <p className="selling-price">{(item.price * productQuantity).toLocaleString('ko-KR')}원</p>
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
                src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.detailImages[0]?.name}`}
                alt={`${item.name} 상품 사진`}
              />
            </div>
            <div className="market-overview-bottom-desc">
              <p className="market-overview-bottom-text">{item.content[1].d2}</p>
            </div>
            <div className="market-overview-bottom-cover">
              <img
                className="market-overview-bottom-src"
                src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.detailImages[1]?.name}`}
                alt={`${item.name} 상품 사진`}
              />
            </div>
            <div className="market-overview-bottom-desc">
              <p className="market-overview-bottom-text">{item.content[2].d3}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MarketDetail;
