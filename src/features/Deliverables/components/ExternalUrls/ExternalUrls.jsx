import './ExternalUrls.css'

// Assets
import share from '../../../../assets/icons/share.svg'
import broken from '../../../../assets/icons/broken.svg'

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

  // Add visual indicator to link if URL is invalid?
  const isValidUrl = (url) => {
    const regex = /^(http|https):\/\//
    if (!url) return false
    if (url.includes('localhost:300')) return false
    if (url.includes('127.0.0.1:5501')) return false
    return regex.test(url)
  }

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