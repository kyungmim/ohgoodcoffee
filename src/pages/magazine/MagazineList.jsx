import MagazineListItem from './MagazineListItem';
import { useEffect, useState } from 'react';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useModalStore from '@zustand/useModalStore.mjs';

function MagazineList() {
  const [data, setData] = useState();
  const axios = useCustomAxios();
  const openModal = useModalStore((state) => state.openModal);

  const fetchData = async () => {
    try {
      const res = await axios.get('/posts?type=magazine');
      setData(res.data.item);
    } catch (err) {
      // console.error(err);
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
      <section className="section type_magazine">
        <div className="l_wrapper">
          <div className="section-filter">
            <p className="section-count">POSTING</p>
            <span className="section-count num">{data?.length}</span>
          </div>

          <div className="section-grid">
            <ul className="grid">{magazineList}</ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default MagazineList;
