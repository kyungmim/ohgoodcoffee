import MagazineListItem from './MagazineListItem';
import { useEffect, useState } from 'react';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useModalStore from '@zustand/useModalStore.mjs';
import styles from '@pages/magazine/Magazine.module.css';

function MagazineList() {
  const [data, setData] = useState();
  const axios = useCustomAxios();
  const openModal = useModalStore((state) => state.openModal);

  const fetchData = async () => {
    try {
      const res = await axios.get('/posts?type=magazine');
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

  useEffect(() => {
    fetchData();
  }, []);

  const magazineList = data?.map((item) => <MagazineListItem key={item._id} item={item} />);

  return (
    <>
      <section className={`${styles.section} ${styles.typeMagazine}`}>
        <div className="l_wrapper">
          <div className={styles.sectionFilter}>
            <p className={styles.sectionCount}>POSTING</p>
            <span className={`${styles.sectionCount} ${styles.num}`}>{data?.length}</span>
          </div>

          <div className={styles.sectionGrid}>
            <ul className={styles.grid}>{magazineList}</ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default MagazineList;
