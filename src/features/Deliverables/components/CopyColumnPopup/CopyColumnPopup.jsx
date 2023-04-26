import './CopyColumnPopup.css'
import { useState, useEffect } from 'react'
import Popup from '../../../../layouts/Popup'

import { filterAndFormatColumns } from '../../helpers/helpers'

const CopyColumnPopup = (props) => {
  const { id, isOpen, setIsOpen, deliverable } = props
  const filteredColumns = filterAndFormatColumns(deliverable)
  const [copied, setCopied] = useState(filteredColumns.map((c) => false))

  const statusTable = {
    missing: "Missing", complete: "Complete", incomplete: "Incomplete"
  }

  useEffect(() => {
    const resetCopy = () => { setTimeout(() => setCopied(false), 2000) }
    if (copied) resetCopy()
  }, [copied])

  const handleCopy = (col) => {
    const deliverableRecord = deliverable.students.map((s) =>
      col === 'status'
        ? statusTable[s[col]] ? statusTable[s[col]] + "\n" : "\n"
        : s[col] ? s[col] + "\n" : "\n"
    )
    navigator.clipboard.writeText(deliverableRecord.join(""))
    setCopied(true)
  }

  console.log('filter', filterAndFormatColumns(deliverable))
  console.log('del', deliverable.students)

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
            Lorem
          </p>
        </header>
        <section className="linkSection">
          {filteredColumns.map((col, idx) => (
            <div className="urlColumn" key={idx}>
              <p>{col.title} Column</p>
              <button
                onClick={() => handleCopy(col.field)}
                style={{ margin: "0" }}>
                {copied[idx] ? "COPIED" : "COPY"}
                {/* COPY */}
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