import Lottie from 'lottie-react';
import LoadingIcon from '@assets/Loading.json';
import styles from '@components/Loading.module.css';

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
  };
  return (
    <div className={styles.loadingBox}>
      <div className={styles.loading}>
        <Lottie options={defaultOptions} animationData={LoadingIcon} height={100} width={100} />
      </div>
    </div>
  );
}

export default Loading;
