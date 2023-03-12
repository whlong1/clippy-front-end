const ExternalLink = ({ children, urlString }) => {
  return (
    <a className="externalUrl" target="_blank" rel="noreferrer" href={urlString}>
      {children}
    </a>
  )
}

export default ExternalLink