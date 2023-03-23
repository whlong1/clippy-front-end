import './ExternalUrls.css'

// Assets
import share from '../../../../assets/icons/share.svg'
import broken from '../../../../assets/icons/broken.svg'

// Helpers
import { isValidUrl } from '../../helpers/helpers'

// Components
import ExternalLink from '../../../../components/ExternalLink/ExternalLink'

const ExternalUrls = ({ student }) => {
  const urlTable = {
    miscUrl: { text: 'Misc URL', link: student.miscUrl },
    trelloUrl: { text: 'Trello', link: student.trelloUrl },
    gitHubUrl: { text: 'GitHub', link: student.gitHubUrl },
    deploymentUrl: { text: 'Deployment', link: student.deploymentUrl },
    codeSandboxUrl: { text: 'Code Sandbox', link: student.codeSandboxUrl },
  }

  const filteredUrls = Object.keys(urlTable).filter((url) => student.hasOwnProperty(url))

  const urlLinks = filteredUrls.map((url, idx) => (
    <ExternalLink key={idx} urlString={urlTable[url].link}>
      {isValidUrl(urlTable[url].link)
        ? <>{urlTable[url].text} <img src={share} alt="share" /></>
        : <>{urlTable[url].text} <img src={broken} alt="share" /></>
      }
    </ExternalLink>
  ))

  return (
    <div className="externalUrlsContainer">
      {filteredUrls.length ? urlLinks : <p style={{ fontSize: '14px' }}>Not Available</p>}
    </div>
  )
}

export default ExternalUrls