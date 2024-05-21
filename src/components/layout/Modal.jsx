import useModalStore from '@zustand/useModalStore.mjs';
import styles from '@components/layout/Modal.module.css';

const Modal = () => {
  const { content, callbackButton } = useModalStore.getState();
  const isOpen = useModalStore((state) => state.isOpen);
  const closeModal = useModalStore((state) => state.closeModal);

  const buttons = Object.keys(callbackButton).map((buttonName, index) => (
    <button
      className="button button-small btn-Fill type-modal-btn"
      type="button"
      key={index}
      onClick={() => {
        closeModal();
        callbackButton[buttonName] && callbackButton[buttonName]();
      }}
    >
      {buttonName}
    </button>
  ));
  return (
    <>
      {isOpen && (
        <div className={styles.modalPopup}>
          <div className={styles.modal}>
            <div className={styles.modalContents}>
              <p className={styles.modalText} dangerouslySetInnerHTML={{ __html: content }} />
            </div>

            <div className={styles.buttonBox}>{buttons}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
