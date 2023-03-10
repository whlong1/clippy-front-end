const ExternalUrls = ({ student }) => {
  // Might be worth handling bad links in here
  const urlTable = {
    miscUrl: { text: 'Misc URL', link: student.miscUrl },
    trelloUrl: { text: 'Trello', link: student.trelloUrl },
    gitHubUrl: { text: 'GitHub', link: student.gitHubUrl },
    deploymentUrl: { text: 'Deployment', link: student.deploymentUrl },
    codeSandboxUrl: { text: 'Code Sandbox', link: student.codeSandboxUrl },
  }

  const filteredUrls = Object.keys(urlTable).filter((url) => student.hasOwnProperty(url))

  // Add visual indicator to link if URL is invalid
  const isValidUrl = (url) => {
    const regex = /^(http|https):\/\//
    return regex.test(url)
  }

  const urlLinks = filteredUrls.map((url, idx) => (
    <a className="externalUrl" key={idx} target="_blank" rel="noreferrer" href={urlTable[url].link}>
      {!isValidUrl(urlTable[url].link) ? 'X' : ''}
      {urlTable[url].text}
    </a>
  ))

  return (
    <div className="externalUrls">
      {!filteredUrls.length ? <p>N/A</p> : { urlLinks }}
    </div>
  )
}

export default ExternalUrls