import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';

function MagazineDetail() {
  return (
    <>
      <Header />
      <section className="section type_magazine-desc">
        <div className="l_wrapper">
          <div className="magazine-desc-header">
            <h2 className="magazine-desc-header-title">[USEFUL] Achim 스폿 서른 네 번째 파트너, 시그너스 커피</h2>
            <p className="magazine-desc-header-date">2024-04-04 조회 72</p>
          </div>
          <div className="magazine-desc-contents">
            <img className="magazine-desc-img" src="/ohgoodcoffee/assets/cafe_coeo.jpeg" />
            <h3 className="magazine-desc-subheading">소제목입니당 소제목~</h3>
            <p className="magazine-desc-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Ut enim ad
              minim veniam, quis nostrud exercitation
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img className="magazine-desc-img" src="/ohgoodcoffee/assets/cafe_coeo.jpeg" />
            <p className="magazine-desc-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img className="magazine-desc-img" src="/ohgoodcoffee/assets/cafe_coeo.jpeg" />
            <p className="magazine-desc-paragraph third">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="comment-footer">
            <form>
              <div className="form-group">
                <textarea type="text" className="form-control" placeholder="댓글을 입력하세요" required></textarea>
              </div>
            </form>
            <div className="comment-btns">
              <button className="button button-small btn-null" type="button">
                목록
              </button>
              <button className="button button-small btn-null" type="submit">
                작성
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default MagazineDetail;
