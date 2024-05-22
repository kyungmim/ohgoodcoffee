import kakaoIcon from '@assets/kakao_icon.svg';
import instaIcon from '@assets/insta_icon.svg';
import styles from '@components/layout/Footer.module.css';

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className="l_wrapper">
          <div className={styles.footerInner}>
            <div className={styles.footerText}>
              <p className={styles.footerTextCompany}>주식회사 OGC</p>
              <p>
                <span className={styles.footerTextBold}>대표자</span> : 김해리, 심호영 ,이경민 ,홍설아
              </p>
              <p>
                <span className={styles.footerTextBold}>사업자등록번호</span> : 123-45-6789
              </p>
            </div>

            <div className={styles.footerCopyright}>
              <ul className={styles.footerSocial}>
                <li>
                  <a href="#">
                    <img src={kakaoIcon} alt="카카오톡" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={instaIcon} alt="인스타" />
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
