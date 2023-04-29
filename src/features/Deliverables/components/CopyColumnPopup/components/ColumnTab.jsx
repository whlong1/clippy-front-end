import { useState } from 'react'
import { filterAndFormatColumns } from '../../../helpers/helpers'

const ColumnTab = ({ deliverable }) => {
  const filteredColumns = filterAndFormatColumns(deliverable)
  const initialCopiedState = filteredColumns.map((c) => false)

  const [copied, setCopied] = useState(initialCopiedState)

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
    setTimeout(() => setCopied(initialCopiedState), 800)
  }

  return (
    <section className="tabSection">
      {filteredColumns.map((col, idx) => (
        <div className="urlColumn" key={idx}>
          <p>{col.title} Column</p>
          <button onClick={() => handleCopy(col.key, idx)} style={{ margin: "0" }}>
            {copied[idx] ? "COPIED" : "COPY"}
          </button>
        </div>
      ))}
    </section>
  )
}

export default ColumnTab