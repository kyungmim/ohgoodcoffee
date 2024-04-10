import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';

function MagazineList() {
  return (
    <>
      <Header />

      <section className="section type_magazine">
        <div className="l_wrapper">
          <div className="section-filter">
            <p className="section-count">POSTING</p>
            <span className="section-count num">8</span>
          </div>

          <div className="section-grid">
            <ul className="grid">
              <li className="card">
                <img className="card-cover" src="src/assets/cafe_coeo.jpeg" alt="" />
                <div className="card-contents">
                  <span className="card-type yellow">USEFUL</span>
                  <h4 className="card-title mini">Achim 스폿 서른 네 번째 파트너, 코에오 커피</h4>
                </div>
                <p className="card-footer">1일전 조회 72</p>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/cafe_coeo.jpeg" alt="" />
                <div className="card-contents">
                  <span className="card-type green">FRIENDLY</span>
                  <h4 className="card-title mini">Achim 스폿 서른 네 번째 파트너, 코에오 커피</h4>
                </div>
                <p className="card-footer">1일전 조회 72</p>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/cafe_coeo.jpeg" alt="" />
                <div className="card-contents">
                  <span className="card-type">USEFUL</span>
                  <h4 className="card-title mini">Achim 스폿 서른 네 번째 파트너, 코에오 커피</h4>
                </div>
                <p className="card-footer">1일전 조회 72</p>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/cafe_coeo.jpeg" alt="" />
                <div className="card-contents">
                  <span className="card-type green">FRIENDLY</span>
                  <h4 className="card-title mini">Achim 스폿 서른 네 번째 파트너, 코에오 커피</h4>
                </div>
                <p className="card-footer">1일전 조회 72</p>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/cafe_coeo.jpeg" alt="" />
                <div className="card-contents">
                  <span className="card-type green">FRIENDLY</span>
                  <h4 className="card-title mini">Achim 스폿 서른 네 번째 파트너, 코에오 커피</h4>
                </div>
                <p className="card-footer">1일전 조회 72</p>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/cafe_coeo.jpeg" alt="" />
                <div className="card-contents">
                  <span className="card-type">USEFUL</span>
                  <h4 className="card-title mini">Achim 스폿 서른 네 번째 파트너, 코에오 커피</h4>
                </div>
                <p className="card-footer">1일전 조회 72</p>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/cafe_coeo.jpeg" alt="" />
                <div className="card-contents">
                  <span className="card-type">USEFUL</span>
                  <h4 className="card-title mini">Achim 스폿 서른 네 번째 파트너, 코에오 커피</h4>
                </div>
                <p className="card-footer">1일전 조회 72</p>
              </li>

              <li className="card">
                <img className="card-cover" src="src/assets/cafe_coeo.jpeg" alt="" />
                <div className="card-contents">
                  <span className="card-type">USEFUL</span>
                  <h4 className="card-title mini">Achim 스폿 서른 네 번째 파트너, 코에오 커피</h4>
                </div>
                <p className="card-footer">1일전 조회 72</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default MagazineList;
