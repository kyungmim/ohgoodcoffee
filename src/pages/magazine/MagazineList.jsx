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
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const items = [
  //   {
  //     _id: 5,
  //     title: '명소1',
  //     content: '아무거나1',
  //     type: 'magazine',
  //     extra: {
  //       articleType: 'FIENDLY',
  //       images: ['cafe_coeo.jpeg', 'coffee-1.jpg'],
  //     },
  //     views: 0,
  //     user: {
  //       _id: 2,
  //       name: '김고양이',
  //       profile: null,
  //     },
  //     createdAt: '2024.04.16 17:29:19',
  //     updatedAt: '2024.04.16 17:29:19',
  //     seller_id: null,
  //     repliesCount: 0,
  //     product: {
  //       image: null,
  //     },
  //   },
  //   {
  //     _id: 4,
  //     title: '명소2',
  //     content: '아무거나2',
  //     type: 'magazine',
  //     extra: {
  //       articleType: 'FIENDLY',
  //       images: ['cafe_coeo.jpeg', 'coffee-1.jpg'],
  //     },
  //     views: 0,
  //     user: {
  //       _id: 2,
  //       name: '김고양이',
  //       profile: null,
  //     },
  //     createdAt: '2024.04.16 17:29:07',
  //     updatedAt: '2024.04.16 17:29:07',
  //     seller_id: null,
  //     repliesCount: 0,
  //     product: {
  //       image: null,
  //     },
  //   },
  // ];

  const magazineList = data?.map((item) => <MagazineListItem key={item._id} item={item} />);

  console.log(magazineList);
  return (
    <>
      <section className="section type_magazine">
        <div className="l_wrapper">
          <div className="section-filter">
            <p className="section-count">POSTING</p>
            <span className="section-count num">8</span>
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
