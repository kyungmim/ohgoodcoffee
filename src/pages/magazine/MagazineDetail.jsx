import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useEffect, useState } from 'react';

function MagazineDetail() {
  const [data, setData] = useState();
  const axios = useCustomAxios();

  const fetchData = async () => {
    try {
      const res = await axios.get('/posts?type=magazine');
      setData(res.data.item);
      // console.log(data?.content);
      // console.log(data && data[0].content[6].d7); // 논리곱 : 첫번재 falsy한 값 : UNDEFINED
      // console.log(data && data[0].extra.detailImages[2].name); // 논리곱 : 첫번재 falsy한 값 : UNDEFINED
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="section type_magazine-desc">
        <div className="l_wrapper">
          <div className="magazine-desc-header">
            <h2 className="magazine-desc-header-title">{data && data[0].title}</h2>
            <p className="magazine-desc-header-date">2024-04-01 조회 70</p>
          </div>
          <div className="magazine-desc-contents">
            <div className="magazin-cover">
              <img
                className="magazine-desc-img"
                src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${data && data[0].extra.detailImages[0].name}`}
                alt="카페 상세 사진"
              />
            </div>
            <p className="magazine-desc-paragraph">{data && data[0].content[0].d1}</p>

            <div className="magazin-cover">
              <img
                className="magazine-desc-img"
                src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${data && data[0].extra.detailImages[1].name}`}
                alt="카페 상세 사진"
              />
            </div>
            <p className="magazine-desc-paragraph">{data && data[0].content[1].d2}</p>

            <div className="magazin-cover">
              <img
                className="magazine-desc-img"
                src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${data && data[0].extra.detailImages[2].name}`}
                alt="카페 상세 사진"
              />
            </div>
            <p className="magazine-desc-paragraph">{data && data[0].content[2].d3}</p>

            <div className="magazin-cover">
              <img
                className="magazine-desc-img"
                src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${data && data[0].extra.detailImages[3].name}`}
                alt="카페 상세 사진"
              />
            </div>
            <p className="magazine-desc-paragraph">{data && data[0].content[3].d4}</p>

            <div className="magazin-cover">
              <img
                className="magazine-desc-img"
                src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${data && data[0].extra.detailImages[4].name}`}
                alt="카페 상세 사진"
              />
            </div>
            <p className="magazine-desc-paragraph">{data && data[0].content[4].d5}</p>

            <div className="magazin-cover">
              <img
                className="magazine-desc-img"
                src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${data && data[0].extra.detailImages[5].name}`}
                alt="카페 상세 사진"
              />
            </div>
            <p className="magazine-desc-paragraph">{data && data[0].content[5].d6}</p>

            <div className="magazin-cover">
              <img
                className="magazine-desc-img"
                src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${data && data[0].extra.detailImages[6].name}`}
                alt="카페 상세 사진"
              />
            </div>
            <p className="magazine-desc-paragraph">{data && data[0].content[6].d7}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MagazineDetail;
