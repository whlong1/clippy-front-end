import { useState } from 'react'

// Style
import './CopyColumnPopup.css'

// Components
import Popup from '../../../../layouts/Popup'

// Helpers
import { filterAndFormatColumns } from '../../helpers/helpers'

const CopyColumnPopup = (props) => {
  const { id, isOpen, setIsOpen, deliverable } = props
  const filteredColumns = filterAndFormatColumns(deliverable)
  const initialState = filteredColumns.map((c) => false)
  const [copied, setCopied] = useState(initialState)

  const getRecord = (key) => {
    const statusTable = { missing: "Missing", complete: "Complete", incomplete: "Incomplete" }
    return deliverable.students.map((s) =>
      key === 'status'
        ? statusTable[s[key]] ? statusTable[s[key]] + "\n" : "\n"
        : s[key] ? s[key] + "\n" : "\n"
    )
  }

  const handleCopy = (key, idx) => {
    const deliverableRecord = getRecord(key)
    navigator.clipboard.writeText(deliverableRecord.join(""))
    setCopied((prev) => prev.map((u, i) => i === idx ? true : false))
    setTimeout(() => setCopied(initialState), 800)
  }

  console.log(deliverable)

  // copy blue squad deliverables
  const handleSquadDeliverables = (squad) => {
    return deliverable.students.reduce((obj, s) => {
      return obj
    }, {})
  }

  return (
    <Popup key={id} isOpen={isOpen}>
      <div className="copyColumn">
        <header>
          <h1>Copy Options</h1>
        </header>
        <section>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            CLOSE
          </button>
        </section>
      </div>
      <div className="copyColumn">
        <header>
          <h1>Copy Options</h1>
          <p>
            Select the deliverable column you wish to copy data from.
          </p>
        </header>
        <section className="linkSection">
          {filteredColumns.map((col, idx) => (
            <div className="urlColumn" key={idx}>
              <p>{col.title} Column</p>
              <button onClick={() => handleCopy(col.key, idx)} style={{ margin: "0" }}>
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

export default CopyColumnPopup