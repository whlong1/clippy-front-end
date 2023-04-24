import './DeleteConfirmation.css'
import Popup from '../../layouts/Popup'

const CopyConfirmation = (props) => {
  const { id, title, isOpen, setIsOpen } = props

  return (
    <Popup key={id} isOpen={isOpen}>
      <div className="copyConfirmation">
        <header>
          <h1>{title}</h1>
        </header>
        <section>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            CLOSE
          </button>
        </section>
      </div>
    </Popup>
  )
}

export default CopyConfirmation