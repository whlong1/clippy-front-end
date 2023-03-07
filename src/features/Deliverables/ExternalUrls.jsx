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

  if (!filteredUrls.length) return <p>N/A</p>

  return (
    filteredUrls.map((url, idx) => (
      <a key={idx} target="_blank" rel="noreferrer" href={urlTable[url].link}>
        {console.log(urlTable[url])}
        {urlTable[url].text}
      </a>
    ))
  )
}

export default ExternalUrls