import axios from "axios"

const SubmissionMaterials = ({ deliverable }) => {
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
    <a className="externalUrl" key={idx} target="_blank" rel="noreferrer" href={urlTable[url].link}>
      {urlTable[url].text}
    </a>
  ))

  console.log(filteredUrls)

  return (
    <section>
      <h2>Submission Materials</h2>
      {urlLinks}
    </section>
  )
}

export default SubmissionMaterials