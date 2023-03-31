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
  const linkSectionStyle = filteredUrls.length ? {} : { display: "none" }

  const urlTable = {
    miscUrl: { text: 'Misc URL', link: student.miscUrl },
    trelloUrl: { text: 'Trello', link: student.trelloUrl },
    gitHubUrl: { text: 'GitHub', link: student.gitHubUrl },
    deploymentUrl: { text: 'Deployment', link: student.deploymentUrl },
    codeSandboxUrl: { text: 'Code Sandbox', link: student.codeSandboxUrl },
  }

  const handleCopy = (url, idx) => {
    navigator.clipboard.writeText(urlTable[url].link)
    setCopied((prev) => prev.map((u, i) => i === idx ? true : false))
    setTimeout(() => setCopied(initialState), 800)
  }

  return (
    <Popup key={student._id} isOpen={isOpen}>
      <div className="copyRow">
        <header>
          <h1>Student Links</h1>
          <p>
            {filteredUrls.length
              ? "Select the link you wish to copy below."
              : "Oopsie! No links available."
            }
          </p>
        </header>
        <section className="linkSection" style={linkSectionStyle}>
          {filteredUrls.map((url, idx) => (
            <div className="urlLink" key={idx}>
              <SubmittedLink
                key={idx}
                url={url}
                studentDeliverable={student}
                styleProp={{ fontSize: '16px', opacity: '1' }}
              />
              <button onClick={() => handleCopy(url, idx)} style={{ margin: "0" }}>
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