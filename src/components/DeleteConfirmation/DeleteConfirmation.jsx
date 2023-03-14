import './DeleteConfirmation.css'

const DeleteConfirmation = ({ title, setIsOpen, handleDelete }) => {

  return (
    <div className="confirmation">
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
  )
}

export default DeleteConfirmation