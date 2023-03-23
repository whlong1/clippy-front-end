// Components
import ExternalLink from "../../../../components/ExternalLink/ExternalLink"

// Helpers
import { isValidUrl } from "../../helpers/helpers"

// Assets
import share from '../../../../assets/icons/share.svg'
import broken from '../../../../assets/icons/broken.svg'

const SubmittedLink = ({ studentDeliverable, url, styleProp }) => {

  const urlTable = {
    miscUrl: { text: 'Misc URL', link: studentDeliverable.miscUrl },
    trelloUrl: { text: 'Trello', link: studentDeliverable.trelloUrl },
    gitHubUrl: { text: 'GitHub', link: studentDeliverable.gitHubUrl },
    deploymentUrl: { text: 'Deployment', link: studentDeliverable.deploymentUrl },
    codeSandboxUrl: { text: 'Code Sandbox', link: studentDeliverable.codeSandboxUrl },
  }

  return (
    <ExternalLink key={idx} urlString={urlTable[url].link}>
      <p style={styleProp}>
        {urlTable[url].text}
        <img src={isValidUrl(urlTable[url].link) ? share : broken} alt="share" />
      </p>
    </ExternalLink>
  )
}

export default SubmittedLink