import Location from '@components/Map';
import ReplyList from '@components/reply/ReplyList';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useUserStore from '@zustand/store';
import useModalStore from '@zustand/useModalStore.mjs';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '@pages/magazine/Magazine.module.css';

function MagazineDetail() {
  const [data, setData] = useState();
  const axios = useCustomAxios();
  const { itemId } = useUserStore();
  const openModal = useModalStore((state) => state.openModal);
  const { user } = useUserStore();
  const { pathname } = useLocation();

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
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const codes = data?.content;

  return (
    <>
      <section className={`${styles.section} ${styles.typeMagazineDesc}`}>
        <div className="l_wrapper">
          <div className={styles.magazineDescHeader}>
            <h2 className={styles.magazineDescHeaderTitle}>{data && data.title}</h2>
            <p className={styles.magazineDescHeaderDate}>{date}</p>
          </div>
          <div className={styles.magazineDescContents} dangerouslySetInnerHTML={{ __html: codes }}></div>
          <Location data={data} />
          <div className={styles.mapText}>
            <p className={styles.mapName}>{data?.extra?.name}</p>
            <p className={styles.mapSocial}>{data?.extra?.social}</p>
            <p className={styles.mapTitle}>{data?.extra?.address}</p>
          </div>
          {user && <ReplyList />}
        </div>
      </section>
    </>
  );
}

export default MagazineDetail;
