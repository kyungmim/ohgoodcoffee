import styles from '@pages/ErrorPage.module.css';

function ErrorPage() {
  return (
    <div>
      <div className={styles.errorText}>
        <h1 className={styles.errorCode}>404</h1>
        <p className={styles.errorTextItem}>Error Server</p>
        <p className={`${styles.errorTextItem} ${styles.typeErrorSmall}`}> "Sorry. Please try again."</p>
      </div>
      <img src="/src/assets/error-img.png" alt="에러 이미지" />
    </div>
  );
}

export default ErrorPage;
