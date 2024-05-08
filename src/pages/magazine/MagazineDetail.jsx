import useCustomAxios from '@hooks/useCustomAxios.mjs';
import Loading from '@pages/Loading';
import Location from '@pages/magazine/Map';
import useUserStore from '@zustand/store';
import useModalStore from '@zustand/useModalStore.mjs';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function MagazineDetail() {
  const [data, setData] = useState();
  const axios = useCustomAxios();
  const { itemId } = useUserStore();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const openModal = useModalStore((state) => state.openModal);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios.get(`/posts/${itemId}`);
      setData(res.data.item);
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

  const today = new Date();
  const date = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const codes = data?.content;

  return (
    <>
      <section className="section type_magazine-desc">
        <div className="l_wrapper">
          <div className="magazine-desc-header">
            <h2 className="magazine-desc-header-title">{data && data.title}</h2>
            <p className="magazine-desc-header-date">{date}</p>
          </div>

          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className="magazine-desc-contents" dangerouslySetInnerHTML={{ __html: codes }}></div>
              <Location data={data} />
              <div className="map-text">
                <p className="map-name">{data?.extra?.name}</p>
                <p className="map-social">{data?.extra?.social}</p>
                <p className="map-title">{data?.extra?.address}</p>
              </div>
            </>
          )}

          <button className="button button-small type-magarzin-btn" onClick={() => navigate('/magazine')}>
            목록 보기
          </button>
        </div>
      </section>
    </>
  );
}

export default MagazineDetail;
