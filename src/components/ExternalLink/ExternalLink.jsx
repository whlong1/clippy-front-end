const ExternalLink = ({ children, urlString, isTitle }) => {
  return (
    <a className={`${isTitle ? "externalLink deliverableTitle" : "externalLink"}`} target="_blank" rel="noreferrer" href={urlString}>
      {children}
    </a>
  )
}

export default ExternalLink