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

  const handleCopy = () => {
    const deliverableRecord = deliverable.students.map((s) =>
      statusTable[s.status] ? statusTable[s.status] + "\n" : "\n"
    )
    navigator.clipboard.writeText(deliverableRecord.join(""))
    setCopied(true)
  }

  const requirementTypes = [
    'hasQuiz',
    'hasMiscUrl',
    'hasTrelloUrl',
    'hasGitHubUrl',
    'hasDeploymentUrl',
    'hasCodeSandboxUrl',
  ]

  const filterRequirements = () => {
    return requirementTypes.filter((url) => deliverable[url])
  }

  const urlTypeLookup = {
    hasQuiz: 'quiz',
    hasMiscUrl: 'miscUrl',
    hasTrelloUrl: 'trelloUrl',
    hasGitHubUrl: 'gitHubUrl',
    hasDeploymentUrl: 'deploymentUrl',
    hasCodeSandboxUrl: 'codeSandboxUrl',
  }

  console.log('del', deliverable)
  console.log('requirements', filterRequirements())

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
          {filterRequirements().map((url, idx) => (
            <div className="urlColumn" key={idx}>
              <p>{url}</p>
              {/* <SubmittedLink
                key={idx}
                url={url}
                studentDeliverable={student}
                styleProp={{ fontSize: '16px', opacity: '1' }}
              /> */}
              <button onClick={() => handleCopy(url, idx)} style={{ margin: "0" }}>
                {/* {copied[idx] ? "COPIED" : "COPY"} */}
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