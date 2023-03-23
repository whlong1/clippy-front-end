import './ExternalUrls.css'

// Components
import SubmittedLink from '../SubmittedLink/SubmittedLink'

const ExternalUrls = ({ student }) => {
  const urlTypes = ['miscUrl', 'trelloUrl', 'gitHubUrl', 'deploymentUrl', 'codeSandboxUrl']
  const filteredUrls = urlTypes.filter((url) => student.hasOwnProperty(url))

  const urlLinks = filteredUrls.map((url, idx) => (
    <SubmittedLink
      key={idx}
      url={url}
      studentDeliverable={student}
      styleProp={{ fontSize: '14px', opacity: '1', marginLeft: '12px' }}
    />
  ))

  return (
    <div className="externalUrlsContainer">
      {filteredUrls.length ? urlLinks : <p style={{ fontSize: '14px' }}>Not Available</p>}
    </div>
  )
}

export default ExternalUrls