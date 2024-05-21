import coverImg_1 from '@assets/main-cover-img-1.jpg';
import coverImg_2 from '@assets/main-cover-img-2.jpg';
import coverImg_3 from '@assets/main-cover-img-3.jpg';
import coverImg_4 from '@assets/main-cover-img-4.jpg';
import MarketListItem from '@pages/market/MarketListItem';
import { useQuery } from '@tanstack/react-query';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; //basic
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useUserStore from '@zustand/store';
import styles from '@pages/Mainpage.module.css';

function Mainpage() {
  const axios = useCustomAxios();
  const [story, setStory] = useState();
  const navigation = useNavigate();
  const { setItemId } = useUserStore();
  const { pathname } = useLocation();

  const fetchData = async () => {
    const res = await axios.get('/posts?type=magazine');
    setStory(res.data.item);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contents = (index) => {
    const fullText = story && story[index]?.content;
    return fullText?.slice(430);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const onNav = (id) => {
    setItemId(id);
    navigation('/magazine/detail');
  };

  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: () => axios.get('/products'),
    select: (response) => response.data.item,
  });

  let itemList = [];
  if (data && data?.length > 0) {
    let newData = data.filter((item) => item.extra?.isNew).slice(0, 4);
    itemList = newData.map((item) => <MarketListItem key={item._id} item={item} />);
  }

  return (
    <>
      <main className={styles.main}>
        <div>
          <Swiper className={styles.mainHeader} modules={[Pagination, Autoplay]} spaceBetween={0} slidesPerView={1} autoplay={{ delay: 3000, disableOnInteraction: false }}>
            <SwiperSlide className={styles.mainCover}>
              <img className={styles.mainCoverSrc} src={coverImg_1} alt="커피 커버 이미지" />
            </SwiperSlide>
            <SwiperSlide className={styles.mainCover}>
              <img className={styles.mainCoverSrc} src={coverImg_2} alt="커피 커버 이미지" />
            </SwiperSlide>
            <SwiperSlide className={styles.mainCover}>
              <img className={styles.mainCoverSrc} src={coverImg_3} alt="커피 커버 이미지" />
            </SwiperSlide>
            <SwiperSlide className={styles.mainCover}>
              <img className={styles.mainCoverSrc} src={coverImg_4} alt="커피 커버 이미지" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.mainContents}>
          <div className={styles.projectInfo}>
            <p className={styles.projectInfoText}>
              " This site was created by combining 3 days in Sinchon, <br /> 10 days in Gwanghwamun,
              <br /> and 5 days in Wangsimni. Why does time pass so quickly..? <br />
              Our team members worked hard... <br />
              Thanks to you, I think I'm getting this result... As always, thank you...."
            </p>
          </div>
          <div className={styles.l_wrapper}>
            <div className={styles.contentsHeader}>
              <h2 className={styles.contentTitle}>COVER STORY</h2>
            </div>

            <div className={styles.mainCoverstory}>
              <section className={styles.coverstoryList}>
                <div className={styles.coverstoryListCover}>
                  <img
                    className={styles.coverstoryListCoverSrc}
                    src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${story && story[4].extra.mainImages.name}`}
                    alt="커피이미지"
                  />
                </div>

                <div className={styles.coverstoryListItem}>
                  <h2 className={styles.coverstoryListTitle}>#{story && story[4].title}</h2>
                  <pre className={styles.coverstorylistListDescription} dangerouslySetInnerHTML={{ __html: contents(4) }}></pre>

                  <button className={`${styles.button} ${styles.buttonSmall} ${styles.btnNull} ${styles.typeSmallBtn}`} type="button" onClick={() => onNav(story[4]._id)}>
                    MORE
                  </button>
                </div>
              </section>

              <section className={styles.coverstoryList}>
                <div className={styles.coverstoryListCover}>
                  <img
                    className={styles.coverstoryListCoverSrc}
                    src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${story && story[5].extra.mainImages.name}`}
                    alt="커피이미지"
                  />
                </div>

                <div className={styles.coverstoryListItem}>
                  <h2 className={styles.coverstoryListTitle}>#{story && story[5].title}</h2>
                  <pre className={styles.coverstorylistListDescription} dangerouslySetInnerHTML={{ __html: contents(5) }}></pre>

                  <button className={`${styles.button} ${styles.buttonSmall} ${styles.btnNull} ${styles.typeSmallBtn}`} type="button" onClick={() => onNav(story[5]._id)}>
                    MORE
                  </button>
                </div>
              </section>

              <section className={styles.coverstoryList}>
                <div className={styles.coverstoryListCover}>
                  <img
                    className={styles.coverstoryListCoverSrc}
                    src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${story && story[6].extra.mainImages.name}`}
                    alt="커피이미지"
                  />
                </div>

                <div className={styles.coverstoryListItem}>
                  <h2 className={styles.coverstoryListTitle}>#{story && story[6].title}</h2>
                  <pre className={styles.coverstorylistListDescription} dangerouslySetInnerHTML={{ __html: contents(6) }}></pre>

                  <button className={`${styles.button} ${styles.buttonSmall} ${styles.btnNull} ${styles.typeSmallBtn}`} type="button" onClick={() => onNav(story[6]._id)}>
                    MORE
                  </button>
                </div>
              </section>
            </div>

            <div className={styles.sectionGrid}>
              <div className={styles.contentsHeader}>
                <h2 className={styles.contentTitle}>NEW PRODUCT</h2>
              </div>
              <ul className={styles.grid}>{itemList}</ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Mainpage;
