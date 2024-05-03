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
              <h2 className="content-title">COVER STORY</h2>
            </div>

            <div className="main-coverstory">
              <section className="coverstory-list">
                <div className="coverstory-list-cover">
                  <img
                    className="coverstory-list-cover-src"
                    src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${story && story[2].extra.mainImages.name}`}
                    alt="커피이미지"
                  />
                </div>

                <div className="coverstory-list-item">
                  <h2 className="coverstory-list-title">#{story && story[2].title}</h2>
                  <pre className="coverstorylist-list-description">
                    이국적인 공간에서 마주하는 이국의 커피 <br />
                    좋은 기억을 위한 공간, 키헤이커피 <br />
                    <br />
                    에디터/포토 지우탁
                    <br />
                    키헤이는 하와이 마우이 남서부에 위치한 지역명이다. 하와이의 찬란한 날씨 아래 약 10km에 달하는 해변이 펼쳐진 지역은 아름다운 자연부터 백사장, 파란 바다에 붉게 물드는 석양까지 그
                    특유의 매력으로 하와이를 방문한 이들이라면 꼭 한번 방문해야 하는 곳으로 꼽히는 여행지다.그런 지역의 이름을 고스란히 사용한 키헤이커피 또한 커피인들 사이에서는 꼭 한 번은 가볼 만한
                    카페로 언급되곤 하는 곳이다. 외관에서부터 느낄 수 있는 해변과 석양, 온화한 기후의 이미지는 내부로 들어서면 더욱 선명하게 경험할 수 있다. 여기에 은은하게 퍼지는 커피향이 더해지면서
                    이국적인 개성이 완성된다.
                  </pre>

                  <button className="button button-small btn-null type-small-btn" type="button" onClick={() => onNav(5)}>
                    MORE
                  </button>
                </div>
              </section>

              <section className="coverstory-list">
                <div className="coverstory-list-cover">
                  <img
                    className="coverstory-list-cover-src"
                    src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${story && story[3].extra.mainImages.name}`}
                    alt="커피이미지"
                  />
                </div>

                <div className="coverstory-list-item">
                  <h2 className="coverstory-list-title">#{story && story[3].title}</h2>
                  <pre className="coverstorylist-list-description">
                    커피와 나를 이어주기 위해 탄생한 공간
                    <br />
                    사람과 커피, 산업과 소비자를 잇는 중개자, 폰트(PONT) <br />
                    <br />
                    에디터/포토 지우탁
                    <br />
                    인터뷰에 앞서 폰트에 대해 알아보면서 가장 먼저 그리고 많이 받은 인상은 마치 활발하게 활동을 이어가고 있는 신생 기업, 브랜드를 보는 것 같다는 것이었다. 커피에 대한 전문성은 물론,
                    독특하지만 친숙하고 포근한 컨셉의 매장에서는 커피를 좀 더 많은 이들에게 친숙하게 소개하기 위한 다양한 이벤트들이 진행되기도 했다. 처음부터 로스팅 오피스를 마련할 정도로 다양한
                    라인업에 커피들이 폰트의 이름으로 소개 및 판매되고 있었고, 직접 방문한 산지를 비롯한 커피 업계 자체에 대한 정보들도 꾸준히 전해오고 있었다. 대개 이런 인상을 받게 되는 브랜드,
                    기업들은 분명한 목표와 방향성을 설정하고 움직이기 마련이고, 세심하게 준비한 브랜딩은 다른 누구도 아닌 소비자들의 반응을 가장 먼저 이끌어낸다. 실제로 폰트를 방문한 이들은 커피를
                    비롯한 메뉴들의 퀄리티와 구성은 물론, 공간에 대한 이야기와 구성원들의 친절한 서비스에 대해서도 호평만 가득했다. 탄탄한 기본기에 세세한 부분들까지 깔끔하게 잘 다듬어진 브랜드는 어떤
                    손길을 거쳐 탄생하게 됐을까?
                  </pre>

                  <button className="button button-small btn-null type-small-btn" type="button" onClick={() => onNav(6)}>
                    MORE
                  </button>
                </div>
              </section>

              <section className="coverstory-list">
                <div className="coverstory-list-cover">
                  <img
                    className="coverstory-list-cover-src"
                    src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${story && story[6].extra.mainImages.name}`}
                    alt="커피이미지"
                  />
                </div>

                <div className="coverstory-list-item">
                  <h2 className="coverstory-list-title">#{story && story[6].title}</h2>
                  <pre className="coverstorylist-list-description">
                    입체적인 콘텐츠 공간에서 쌓아가는 인연
                    <br />
                    <br />
                    함께 채워가는 공간, 연필(緣苾)
                    <br />
                    에디터/포토 지우탁
                    <br />
                    군자역 인근의 번화가를 지나 점차 주변의 풍경이 차분한 동네가 펼쳐지기 시작한 곳에 어색하지는 않지만 눈에 띄는 세련된 공간이 있다. 지난 2022년 8월에 이곳에 자리를 잡은 연필(緣苾).
                    밖에서 어렴풋이 보이는 매력적인 공간은 문을 열고 들어서면 마치 고급스러운 바에 들어선 것 같은 느낌을 받을 수 있는 풍경으로 변한다. 오픈 이전부터 눈을 사로잡는 외관과 분위기로
                    기대를 모았고, 오픈 후에는 기대보다도 더 깊이 있고 다채로운 콘텐츠들로 관심을 받고 있는 곳이다. 방문하여 기록을 남길 수 있는 메모부터 고심한 듯한 선곡을 들으며 커피와 디저트의
                    페어링을 즐길 수도 있다. 필터 커피를 주문하면 직접 선택한 빈티지 잔에 제공해 주고, 바 너머의 창 밖에는 고양이 손님이 기웃거리는 모습이 보이기도 한다. 어쩌면 복잡하고 어지러워 보일
                    수 있는 것들이 하나의 브랜드로 묶여서 자연스럽게 표현될 수 있었던 배경은 무엇일까? 겨울과 봄의 경계인 2월의 어 하루 연필을 직접 다녀왔다.
                    <br />
                    성수동에서도 조금 한적한 거리에는 그런 장면들 중에서도 눈에 띌 COEO(코에오)가 자리하고 있다. 얼핏 보면 공방 같기도 한 외관에 비해 따뜻한 톤의 내부의 반전을 발견할 수 있고, 밖에
                    세워둔 다양한 '탈것'들에서 공간에 대해 다양한 상상을 하게 만드는 곳이다. 또 코에오를 찾은 날은 겨울과 봄의 경계였던 탓에 아직 쌀쌀했으나 유난히도 볕이 잘 들었다. 하루의, 누군가의
                    기승전결 중에서 하나의 장면으로 넣기에 이보다 적절할 수 있을까라는 생각이 절로 들었다.
                  </pre>

                  <button className="button button-small btn-null type-small-btn" type="button" onClick={() => onNav(2)}>
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
