import MagazineListItem from './MagazineListItem';
import { useEffect, useState } from 'react';
import useCustomAxios from '@hooks/useCustomAxios.mjs';

function MagazineList() {
  const [data, setData] = useState();
  const axios = useCustomAxios();

  const fetchData = async () => {
    try {
      const res = await axios.get('/posts?type=magazine');
      setData(res.data.item);
    } catch (err) {
      console.error(err);
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
            {/* <span className="section-count num">{magazineList.length}</span> */}
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
