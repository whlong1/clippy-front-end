import { useState } from "react"
import "./CopyRowPopup.css"

// Components
import Popup from "../../../../layouts/Popup"
import SubmittedLink from "../SubmittedLink/SubmittedLink"

// Helpers
import { filterDeliverableUrls } from "../../helpers/helpers"

const CopyRowPopup = ({ student, isOpen, setIsOpen }) => {
  const {
    miscUrls,
    gitHubUrl,
    trelloUrl,
    deploymentUrl,
    preferredName,
    codeSandboxUrl,
  } = student

  const [copied, setCopied] = useState(false)

  console.log(miscUrls, gitHubUrl, trelloUrl, deploymentUrl, preferredName, codeSandboxUrl)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => { setCopied(false); setIsOpen(false) }, 800)
  }

  // copy url
  const style = {
    width: "100%",
    border: "1px solid red",
  }

  const style2 = {
    display: 'flex',
  
  }

  const filteredUrls = filterDeliverableUrls(student)
  const urlLinks = filteredUrls.map((url, idx) => (
    <div style={style2}>
      <SubmittedLink
        key={idx}
        url={url}
        studentDeliverable={student}
        styleProp={{ fontSize: '14px', opacity: '1', marginLeft: '12px', border: '1px solid green' }}
      />
      <button onClick={handleCopy} style={{margin: "0"}}>
        {copied ? "COPIED" : "COPY"}
      </button>
    </div>
  ))

  return (
    <Popup key={student._id} isOpen={isOpen}>
      <div className="copyRow">
        <header>
          <h1>Copy Options</h1>
          <p>Lorem ipsum dolore ipsum dolore lorem.</p>
        </header>
        <section style={style}>
          {urlLinks}
        </section>
        <section>
          <button onClick={() => setIsOpen(false)}>
            CLOSE
          </button>
        </section>
      </div>
    </Popup>
  )
}

export default CopyRowPopup