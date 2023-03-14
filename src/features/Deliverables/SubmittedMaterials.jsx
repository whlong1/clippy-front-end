// Assets
import submittedIcon from '../../assets/icons/headers/submitted.svg'
import share from '../../assets/icons/share.svg'

// Components
import ExternalLink from '../../components/ExternalLink/ExternalLink'

const SubmittedMaterials = ({ deliverable }) => {
  // Reused in ExternalUrls, would be nice to make this a helper
  const urlTable = {
    miscUrl: { text: 'Misc URL', link: deliverable.miscUrl },
    trelloUrl: { text: 'Trello', link: deliverable.trelloUrl },
    gitHubUrl: { text: 'GitHub', link: deliverable.gitHubUrl },
    deploymentUrl: { text: 'Deployment', link: deliverable.deploymentUrl },
    codeSandboxUrl: { text: 'Code Sandbox', link: deliverable.codeSandboxUrl },
  }

  const filteredUrls = Object.keys(urlTable).filter((url) => deliverable.hasOwnProperty(url))

  const urlLinks = filteredUrls.map((url, idx) => (
    <ExternalLink key={idx} urlString={urlTable[url].link}>
      <p style={{ marginRight: '12px' }}>
        {urlTable[url].text}
        <img src={share} alt="share" />
      </p>
    </ExternalLink>
  ))

  return (
    <div className="subheader">
      <h3>
        <img src={submittedIcon} alt="submitted" />
        Submitted Materials
      </h3>
      <div style={{ flexDirection: 'row', width: '100%' }}>
        {filteredUrls.length ? urlLinks : <p style={{ marginTop: '2px' }}>No materials</p>}
      </div>
    </div>
  )
}

export default SubmittedMaterials