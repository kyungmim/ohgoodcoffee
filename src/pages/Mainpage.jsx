import coverImg_1 from '@assets/main-cover-img-1.png';
import coverImg_2 from '@assets/main-cover-img-2.png';
import coverImg_3 from '@assets/main-cover-img-3.png';
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
      <main className="main">
        <div>
          <Swiper className="main-header" modules={[Pagination, Autoplay]} spaceBetween={0} slidesPerView={1} autoplay={{ delay: 3000, disableOnInteraction: false }}>
            <SwiperSlide className="main-cover">
              <img className="main-cover-src" src={coverImg_1} alt="커피 커버 이미지" />
            </SwiperSlide>
            <SwiperSlide className="main-cover">
              <img className="main-cover-src" src={coverImg_2} alt="커피 커버 이미지" />
            </SwiperSlide>
            <SwiperSlide className="main-cover">
              <img className="main-cover-src" src={coverImg_3} alt="커피 커버 이미지" />
            </SwiperSlide>
            <SwiperSlide className="main-cover">
              <img className="main-cover-src" src={coverImg_4} alt="커피 커버 이미지" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="main-contents">
          <div className="project-info">
            <p className="project-info-text">
              " This site was created by combining 3 days in Sinchon, <br /> 10 days in Gwanghwamun,
              <br /> and 5 days in Wangsimni. Why does time pass so quickly..? <br />
              Our team members worked hard... <br />
              Thanks to you, I think I'm getting this result... As always, thank you...."
            </p>
          </div>
          <div className="l_wrapper">
            <div className="contents-header">
              <h2 className="content-title">COVER STORYE</h2>
            </div>

            <div className="main-coverstory">
              <section className="coverstory-list">
                <div className="coverstory-list-cover">
                  <img
                    className="coverstory-list-cover-src"
                    src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${story && story[2].extra.detailImages[0].name}`}
                    alt="커피이미지"
                  />
                </div>

                <div className="coverstory-list-item">
                  <h2 className="coverstory-list-title">#{story && story[2].title}</h2>
                  <pre className="coverstorylist-list-description">{story && story[2].content[0].d1}</pre>

                  <button className="button button-small btn-null type-small-btn" type="button" onClick={() => onNav(2)}>
                    MORE
                  </button>
                </div>
              </section>

              <section className="coverstory-list">
                <div className="coverstory-list-cover">
                  <img
                    className="coverstory-list-cover-src"
                    src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${story && story[3].extra.detailImages[0].name}`}
                    alt="커피이미지"
                  />
                </div>

                <div className="coverstory-list-item">
                  <h2 className="coverstory-list-title">#{story && story[3].title}</h2>
                  <pre className="coverstorylist-list-description">{story && story[3].content[0].d1}</pre>

                  <button className="button button-small btn-null type-small-btn" type="button" onClick={() => onNav(3)}>
                    MORE
                  </button>
                </div>
              </section>

              <section className="coverstory-list">
                <div className="coverstory-list-cover">
                  <img
                    className="coverstory-list-cover-src"
                    src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${story && story[6].extra.detailImages[0].name}`}
                    alt="커피이미지"
                  />
                </div>

                <div className="coverstory-list-item">
                  <h2 className="coverstory-list-title">#{story && story[6].title}</h2>
                  <pre className="coverstorylist-list-description">{story && story[6].content[0].d1}</pre>

                  <button className="button button-small btn-null type-small-btn" type="button" onClick={() => onNav(6)}>
                    MORE
                  </button>
                </div>
              </section>
            </div>

            <div className="section-grid">
              <div className="contents-header">
                <h2 className="content-title">NEW PRODUCT</h2>
              </div>
              <ul className="grid">{itemList}</ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Mainpage;
