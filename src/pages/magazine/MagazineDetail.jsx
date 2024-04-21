import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useUserStore from '@zustand/store';
import { useEffect, useState } from 'react';

function MagazineDetail() {
  const [data, setData] = useState();
  const axios = useCustomAxios();
  const { itemId } = useUserStore();

  const fetchData = async () => {
    try {
      const res = await axios.get(`/posts/${itemId}`);
      setData(res.data.item);
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
            <h2 className="magazine-desc-header-title">{data && data.title}</h2>
            <p className="magazine-desc-header-date">2024-04-01 조회 70</p>
          </div>
          <div className="magazine-desc-contents">
            <div className="magazin-cover">
              <img className="magazine-desc-img" src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${data && data.extra.detailImages[0].name}`} alt="카페 상세 사진" />
            </div>
            <p className="magazine-desc-paragraph">{data && data.content[0].d1}</p>

            <div className="magazin-cover">
              <img className="magazine-desc-img" src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${data && data.extra.detailImages[1].name}`} alt="카페 상세 사진" />
            </div>
            <p className="magazine-desc-paragraph">{data && data.content[1].d2}</p>

            <div className="magazin-cover">
              <img className="magazine-desc-img" src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${data && data.extra.detailImages[2].name}`} alt="카페 상세 사진" />
            </div>
            <p className="magazine-desc-paragraph">{data && data.content[2].d3}</p>

            <div className="magazin-cover">
              <img className="magazine-desc-img" src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${data && data.extra.detailImages[3].name}`} alt="카페 상세 사진" />
            </div>
            <p className="magazine-desc-paragraph">{data && data.content[3].d4}</p>

            <div className="magazin-cover">
              <img className="magazine-desc-img" src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${data && data.extra.detailImages[4].name}`} alt="카페 상세 사진" />
            </div>
            <p className="magazine-desc-paragraph">{data && data.content[4].d5}</p>

            <div className="magazin-cover">
              <img className="magazine-desc-img" src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${data && data.extra.detailImages[5].name}`} alt="카페 상세 사진" />
            </div>
            <p className="magazine-desc-paragraph">{data && data.content[5].d6}</p>

            <div className="magazin-cover">
              <img className="magazine-desc-img" src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${data && data.extra.detailImages[6].name}`} alt="카페 상세 사진" />
            </div>
            <p className="magazine-desc-paragraph">{data && data.content[6].d7}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MagazineDetail;
