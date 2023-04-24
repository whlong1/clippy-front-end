import './DeleteConfirmation.css'
import Popup from '../../layouts/Popup'

const DeleteConfirmation = ({ title, isOpen, setIsOpen, handleDelete }) => {
  return (
    <Popup isOpen={isOpen}>
      <div className="deleteConfirmation">
        <header>
          <h1>{title}</h1>
          <p>
            Are you sure?
            This action cannot be undone.
          </p>
        </header>
        <section>
          <button onClick={handleDelete}>
            DELETE
          </button>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            CANCEL
          </button>
        </section>
      </div>
    </Popup>
  )
}

export default DeleteConfirmation