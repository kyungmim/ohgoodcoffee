import useUserStore from '@zustand/store';
import { useState } from 'react';
import UserInfoEdit from './UserInfoEdit';
import styles from '@pages/mypage/user/UserMypage.module.css';

function SellerInfo() {
  const { user } = useUserStore();
  const [info, setInfo] = useState(true);

  const onClick = () => {
    setInfo(!info);
  };

  return (
    <>
      <div className={styles.itemWrapper}>
        <div className={styles.mainTitle}>
          <p className={styles.mainContentsTitle}>회원정보</p>
        </div>
        {info ? (
          <>
            <div className={styles.mainContent}>
              <div className={styles.profileSettings}>
                <div className={styles.profileSetting}>
                  <div className={styles.profileItem}>
                    <h1 className={styles.profileItemTitle}>Type</h1>
                    <p>{user.type}</p>
                  </div>
                  <div className={styles.profileItem}>
                    <h1 className={styles.profileItemTitle}>Name</h1>
                    <p>{user.name}</p>
                  </div>
                  <div className={styles.profileItem}>
                    <h1 className={styles.profileItemTitle}>Email</h1>
                    <p>{user.email}</p>
                  </div>
                  <div className={styles.profileItem}>
                    <h1 className={styles.profileItemTitle}>Phone Number</h1>
                    <p>{user.phone}</p>
                  </div>
                  <div className={styles.profileItem}>
                    <h1 className={styles.profileItemTitle}>Address</h1>
                    <p>{user.address}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonInfoBox}>
              <button onClick={onClick} className={`${styles.button} ${styles.buttonLarge} ${styles.btnFill} ${styles.btnLayout}`} type="button">
                수정하기
              </button>
            </div>
          </>
        ) : (
          <UserInfoEdit />
        )}
      </div>
    </>
  );
}

export default SellerInfo;
