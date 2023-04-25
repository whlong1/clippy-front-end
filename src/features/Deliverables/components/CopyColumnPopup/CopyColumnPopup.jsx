import './CopyColumnPopup.css'
import { useState, useEffect } from 'react'
import Popup from '../../../../layouts/Popup'

const CopyColumnPopup = (props) => {
  const { id, isOpen, setIsOpen, deliverable } = props

  const [copied, setCopied] = useState(false)

  const statusTable = {
    missing: "Missing",
    complete: "Complete",
    incomplete: "Incomplete",
  }

  useEffect(() => {
    const resetCopy = () => {
      setTimeout(() => setCopied(false), 2000)
    }
    if (copied) resetCopy()
  }, [copied])


  const handleCopy = (col) => {
    console.log('col', col)

    const deliverableRecord = deliverable.students.map((s) => {
      // return s[col] ? s[col] + "\n" : "\n"
      if (col === 'status') {
        return statusTable[s[col]] ? statusTable[s[col]] + "\n" : "\n"
      } else {
        return s[col] ? s[col] + "\n" : "\n"
      }
    }
    )
    console.log('record',deliverableRecord)
    navigator.clipboard.writeText(deliverableRecord.join(""))
    setCopied(true)
  }

  const requirementTypes = [
    'hasMiscUrl',
    'hasTrelloUrl',
    'hasGitHubUrl',
    'hasDeploymentUrl',
    'hasCodeSandboxUrl',
  ]

  const filteredColumns = () => {
    return ['status', ...requirementTypes.filter((url) => deliverable[url])]
  }

  console.log(filteredColumns())

  const typeLookup = {
    status: { title: 'Status', field: 'status' },
    hasMiscUrl: { title: 'Misc URL', field: 'miscUrl' },
    hasTrelloUrl: { title: 'Trello URL', field: 'trelloUrl' },
    hasGitHubUrl: { title: 'GitHub URL', field: 'gitHubUrl' },
    hasDeploymentUrl: { title: 'Deployment URL', field: 'deploymentUrl' },
    hasCodeSandboxUrl: { title: 'CodeSandbox URL', field: 'codeSandboxUrl' },
  }

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
          {filteredColumns().map((col, idx) => (
            <div className="urlColumn" key={idx}>
              <p>{typeLookup[col].title} Column</p>
              <button
                onClick={() => handleCopy(typeLookup[col].field)}
                style={{ margin: "0" }}>
                {/* {copied[idx] ? "COPIED" : "COPY"} */} COPY
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