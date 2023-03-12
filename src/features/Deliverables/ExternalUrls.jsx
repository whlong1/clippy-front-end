// Assets
import share from '../../assets/icons/share.svg'

// Components
import ExternalLink from '../../components/ExternalLink/ExternalLink'

const ExternalUrls = ({ student }) => {
    // Reused in SubmissionMaterials, would be nice to make this a helper
  const urlTable = {
    miscUrl: { text: 'Misc URL', link: student.miscUrl },
    trelloUrl: { text: 'Trello', link: student.trelloUrl },
    gitHubUrl: { text: 'GitHub', link: student.gitHubUrl },
    deploymentUrl: { text: 'Deployment', link: student.deploymentUrl },
    codeSandboxUrl: { text: 'Code Sandbox', link: student.codeSandboxUrl },
  }

  const filteredUrls = Object.keys(urlTable).filter((url) => student.hasOwnProperty(url))

  // Add visual indicator to link if URL is invalid?
  // const isValidUrl = (url) => {
  //   const regex = /^(http|https):\/\//
  //   return regex.test(url)
  // }

  const urlLinks = filteredUrls.map((url, idx) => (
    <ExternalLink key={idx} urlString={urlTable[url].link}>
      {urlTable[url].text} <img src={share} alt="share" />
    </ExternalLink>
  ))

  return (
    <div className="externalUrls">
      {urlLinks}
    </div>
  )
}

export default ExternalUrls