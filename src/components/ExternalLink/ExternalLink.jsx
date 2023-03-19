const ExternalLink = ({ children, urlString }) => {
  return (
    <a className="externalLink deliverableTitle" target="_blank" rel="noreferrer" href={urlString}>
      {children}
    </a>
  )
}

export default ExternalLink