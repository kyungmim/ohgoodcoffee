import MagazineListItem from './MagazineListItem';
import { useEffect, useState } from 'react';
import useCustomAxios from '@hooks/useCustomAxios.mjs';

function MagazineList() {
  // const [data, setData] = useState();
  // const axios = useCustomAxios();

  // const fetchData = async () => {
  //   try {
  //     const res = await axios.get('/products');
  //     setData(res.data.item);
  //     console.log(data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);


  const data = [{
    
  },{

  }];
  const nameList = data?.map((item) => (
    <p>
      <img className="card-cover" src="public/cafe_coeo.jpeg" alt="" />
      {item.name} {item.price}
    </p>
  ));

  console.log(nameList);
  return (
    <>
      <section className="section type_magazine">
        <div className="l_wrapper">
          <div className="section-filter">
            <p className="section-count">POSTING</p>
            <span className="section-count num">8</span>
          </div>

          <div className="section-grid">
            <ul className="grid">
              <MagazineListItem item={}/>
              {nameList}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default MagazineList;
