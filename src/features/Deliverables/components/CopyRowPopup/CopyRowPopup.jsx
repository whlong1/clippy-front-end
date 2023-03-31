import { useState } from "react"
import "./CopyRowPopup.css"

// Components
import Popup from "../../../../layouts/Popup"
import SubmittedLink from "../SubmittedLink/SubmittedLink"

// Helpers
import { filterDeliverableUrls } from "../../helpers/helpers"

const CopyRowPopup = ({ student, isOpen, setIsOpen }) => {
  const filteredUrls = filterDeliverableUrls(student)
  const initialState = filteredUrls.map((u) => false)
  const [copied, setCopied] = useState(initialState)

  const handleCopy = (idx) => {
    setCopied((prev) => prev.map((u, i) => i === idx ? true : false))
    setTimeout(() => setCopied(initialState), 800)
  }

  return (
    <Popup key={student._id} isOpen={isOpen}>
      <div className="copyRow">
        <header>
          <h1>Student Links</h1>
          <p>Select the link you wish to copy below.</p>
        </header>
        <section className="linkSection">
          {filteredUrls.map((url, idx) => (
            <div className="urlLink" key={idx}>
              <SubmittedLink
                key={idx}
                url={url}
                studentDeliverable={student}
                styleProp={{ fontSize: '16px', opacity: '1' }}
              />
              <button onClick={() => handleCopy(idx)} style={{ margin: "0" }}>
                {copied[idx] ? "COPIED" : "COPY"}
              </button>
            </div>
          ))}
        </section>
        <footer>
          <button onClick={() => setIsOpen(false)}>
            CLOSE
          </button>
        </footer>
      </div>
    </Popup>
  )
}

export default CopyRowPopup