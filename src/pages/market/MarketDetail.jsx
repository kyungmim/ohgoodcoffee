import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import useUserStore from '@zustand/store';
import useModalStore from '@zustand/useModalStore.mjs';
import HeartIcon from '@pages/market/HeartIcon';
import styles from '@pages/market/Market.module.css';

function MarketDetail() {
  const axios = useCustomAxios();
  const { _id } = useParams();
  const { user, setCartCount } = useUserStore();
  const navigate = useNavigate();
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
      const response = await axios.get('/carts');
      const totalQuantity = response.data.item.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(totalQuantity);
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

  const handleNavigate = () => {
    navigate('/orders/confirm', { state: { from: 'marketdetail', _id, productQuantity, item } });
  };

  return (
    <>
      <section className={`${styles.section} ${styles.typeMarketDesc}`}>
        <div className={styles.l_wrapper}>
          <div className={styles.marketOverviewTop}>
            <div className={`${styles.cardCover} ${styles.typeCardDetail}`}>
              <img className={styles.cardCoverSrc} src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.mainImages[0]?.name}`} alt={`${item.name} 상품 사진`} />
            </div>

            <div className={styles.marketOverviewDesc}>
              <div className={styles.overviewHeader}>
                <p className={styles.overviewTitle}>{item.name}</p>
                <div className={styles.overviewRow}>
                  <p className={styles.overviewPrice}>{item.price.toLocaleString('ko-KR')}원</p>
                  <div className={styles.overviewWishlist}>
                    <div className={styles.wishlistBox} onClick={handleToggleBookmark}>
                      <div className={styles.wishlistIcon}>
                        <HeartIcon fill={isBookmarked ? '#FF0000' : '#AAAAAA'} />
                      </div>
                      <p className={styles.wishlistCount}>{bookmarkQuantity}</p>
                    </div>
                  </div>
                </div>
              </div>

              <pre className={styles.overviewContents}>{item.content[0]}</pre>

              <div className={styles.overviewSellingCount}>
                <p className={styles.overviewSellingTitle}>수량</p>
                <div>
                  <div className={styles.sellingRow}>
                    <div className={styles.quantityRow}>
                      <div className={styles.quantityButton} onClick={handleReduceQuantity}>
                        -
                      </div>
                      <div>
                        <p className={styles.sellingPick}>{productQuantity}</p>
                      </div>
                      <div className={styles.quantityButton} onClick={handleCheckQuantity}>
                        +
                      </div>
                    </div>
                    <p className={styles.sellingPrice}>{(item.price * productQuantity).toLocaleString('ko-KR')}원</p>
                  </div>
                </div>
              </div>
              <div className={styles.sellingBtns}>
                <button className={`${styles.button} ${styles.buttonLarge} ${styles.btnFill} `} type="submit" onClick={handleNavigate}>
                  Buying
                </button>
                <button className={`${styles.button} ${styles.buttonLarge} ${styles.btnNull} `} type="submit" onClick={handleSubmitCart}>
                  Cart
                </button>
              </div>
            </div>
          </div>
          <div className={styles.marketOverviewBottom}>
            <div className={styles.marketOverviewBottomCover}>
              {<img
                className={styles.marketOverviewBottomSrc}
                src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.mainImages[1]?.name}`}
                alt={`${item.name} 상품 사진`}
              /> ? (
                <img
                  className={styles.marketOverviewBottomSrc}
                  src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.mainImages[1]?.name}`}
                  alt={`${item.name} 상품 사진`}
                />
              ) : (
                ''
              )}
            </div>
            <div className={styles.marketOverviewBottomDesc}>
              <pre className={styles.marketOverviewBottomText}>{item.content[1] ? item.content[1] : ''}</pre>
            </div>
            <div className={styles.marketOverviewBottomCover}>
              {<img
                className={styles.marketOverviewBottomSrc}
                src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.mainImages[2]?.name}`}
                alt={`${item.name} 상품 사진`}
              /> ? (
                <img
                  className={styles.marketOverviewBottomSrc}
                  src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.mainImages[2]?.name}`}
                  alt={`${item.name} 상품 사진`}
                />
              ) : (
                ''
              )}
            </div>
            <div className={styles.marketOverviewBottomDesc}>
              <pre className={styles.marketOverviewBottomText}>{item.content[2] ? item.content[2] : ''}</pre>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MarketDetail;
