import useModalStore from '@zustand/useModalStore.mjs';

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
        <div className="modal-popup">
          <div className="modal">
            <div className="modal-contents">
              <p className="modal-text" dangerouslySetInnerHTML={{ __html: content }} />
            </div>

            <div className="button-box">{buttons}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
