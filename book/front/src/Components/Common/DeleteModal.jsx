import { useContext } from "react";
import { ModalContext } from "../../Contexts/Modals";

function DeleteModal() {
  const { deleteModal, setDeleteModal } = useContext(ModalContext);

  const submitDelete = () => {
    deleteModal.doDelete(deleteModal.data);
    setDeleteModal(null);
    deleteModal.hideData(deleteModal.data);
  };

  if (deleteModal === null) {
    return null;
  }

  return (
    <div className="delete-modal-container">
      <div className="modal">
        <button
          onClick={(_) => setDeleteModal(null)}
          type="button"
          className="simple"
          aria-label="Close"
        >
          <span className="icon solid fa-times"></span>
        </button>
        <div className="message-text">
          <p className="align-center">
            Ar tikrai norite ištrinti {deleteModal.data.name}?{" "}
          </p>
        </div>
        <ul className="actions special">
          <li>
            <input
              onClick={submitDelete}
              type="button"
              value="trinti"
              className="small"
            />
          </li>
          <li>
            <input
              onClick={(_) => setDeleteModal(null)}
              type="button"
              value="atšaukti"
              className="small"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DeleteModal;
