function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="l_wrapper">
          <div className="footer-inner">
            <div class="footer-text">
              <p class="footer-text-company">주식회사 OGC</p>
              <p>
                <span class="footer-text-bold">대표자</span> : 김해리, 심호영 ,이경민 ,홍설아
              </p>
              <p>
                <span class="footer-text-bold">사업자등록번호</span> : 123-45-6789
              </p>
            </div>

            <div class="footer-copyright">
              <ul class="footer-social">
                <li>
                  <a href="#">
                    <img src="./assets/kakao_icon.svg" alt="카카오톡" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./assets/insta_icon.svg" alt="인스타" />
                  </a>
                </li>
              </ul>
              <p>&copy; 2024 Copyright All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
