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

  useEffect(() => {
    setBookmarkQuantity(item.bookmarks);

    // 사용가의 해당상품 북마크 여부 확인
    if (item.myBookmarkId) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  }, [item]);

  const postBookmark = async () => {
    try {
      await axios.post(`/bookmarks/product/${item._id}`);
      setBookmarkQuantity((prev) => prev + 1);
      openModal({
        content: `${item.name}을 위시리스트에 추가했습니다 :) \n 위시리스트로 이동하시겠습니까?`,
        callbackButton: {
          확인: () => {
            navigate('/mypage/wishlist');
          },
          취소: '',
        },
      });
    } catch (err) {
      if (err.response?.data.message) {
        openModal({
          content: err.response?.data.message,
          callbackButton: {
            확인: '',
          },
        });
      }
    }
  };

  const deleteBookmark = () => {
    try {
      openModal({
        content: `${item.name}을 위시리스트에서 삭제하시겠습니까?`,
        callbackButton: {
          확인: async () => {
            await axios.delete(`/bookmarks/${item.myBookmarkId}`);
            setBookmarkQuantity((prev) => (prev > 0 ? prev - 1 : 0));
          },
          취소: '',
        },
      });
    } catch (err) {
      // console.error('Failed to delete bookmark:', error);
      if (err.response?.data.message) {
        openModal({
          content: err.response?.data.message,
          callbackButton: {
            확인: '',
          },
        });
      }
    }
  };

  const handleToggleBookmark = () => {
    if (!user) {
      openModal({
        content: '로그인 후 이용 가능합니다.<br/>로그인 페이지로 이동하시겠습니까?',
        callbackButton: {
          확인: () => {
            navigate('/users/login', { state: { from: '/' } });
          },
          취소: '',
        },
      });
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

  const handleSubmitCart = async () => {
    let cart = { product_id: Number(_id), quantity: productQuantity };
    if (user) {
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
    } else {
      openModal({
        content: '로그인 후 이용 가능합니다.<br/>로그인 페이지로 이동하시겠습니까?',
        callbackButton: {
          확인: () => {
            navigate('/users/login', { state: { from: '/' } });
          },
          취소: '',
        },
      });
      return;
    }
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
          userName: user.name,
          phone: user.phone,
          address: user.address,
        },
      };
      try {
        openModal({
          content: `${productQuantity}개의 ${item.name}제품을 구매하시겠습니까?`,
          callbackButton: {
            확인: async () => {
              const response = await axios.post('/orders', order);
              navigate('/orders', { state: { from: location.pathname, orderResponse: response.data } });
            },
            취소: '',
          },
        });
      } catch (err) {
        if (err.response?.data.message) {
          openModal({
            content: err.response?.data.message,
            callbackButton: {
              확인: '',
            },
          });
        }
      }
    } else {
      openModal({
        content: '로그인 후 이용 가능합니다.<br/>로그인 페이지로 이동하시겠습니까?',
        callbackButton: {
          확인: () => {
            navigate('/users/login', { state: { from: '/' } });
          },
          취소: '',
        },
      });
      return;
    }
  };

  const handleReduceQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity((prev) => prev - 1);
    }
  };

  const handleCheckQuantity = () => {
    let realQuantity = item.quantity - item.buyQuantity;
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
            <div className="card-cover type-card-detail">
              <img className="card-cover-src" src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.mainImages[0]?.name}`} alt={`${item.name} 상품 사진`} />
            </div>

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

              <pre className="overview-contents">{item.content[0]}</pre>

              <div className="overview-selling-count">
                <p className="overview-selling-title">수량</p>
                <div>
                  <div className="selling-row">
                    <div className="quantity-row">
                      <div className="quantity-button" onClick={handleReduceQuantity}>
                        -
                      </div>
                      <div>
                        <p className="selling-pick">{productQuantity}</p>
                      </div>
                      <div className="quantity-button" onClick={handleCheckQuantity}>
                        +
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
            <div className="market-overview-bottom-cover">
              {<img
                className="market-overview-bottom-src"
                src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.mainImages[1]?.name}`}
                alt={`${item.name} 상품 사진`}
              /> ? (
                <img
                  className="market-overview-bottom-src"
                  src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.mainImages[1]?.name}`}
                  alt={`${item.name} 상품 사진`}
                />
              ) : (
                ''
              )}
            </div>
            <div className="market-overview-bottom-desc">
              <pre className="market-overview-bottom-text">{item.content[1] ? item.content[1] : ''}</pre>
            </div>
            <div className="market-overview-bottom-cover">
              {<img
                className="market-overview-bottom-src"
                src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.mainImages[2]?.name}`}
                alt={`${item.name} 상품 사진`}
              /> ? (
                <img
                  className="market-overview-bottom-src"
                  src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.mainImages[2]?.name}`}
                  alt={`${item.name} 상품 사진`}
                />
              ) : (
                ''
              )}
            </div>
            <div className="market-overview-bottom-desc">
              <pre className="market-overview-bottom-text">{item.content[2] ? item.content[2] : ''}</pre>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MarketDetail;
