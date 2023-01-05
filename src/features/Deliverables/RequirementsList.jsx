const RequirementsList = ({ deliverable }) => {
  return (
    <div>
      <p>
        hasMiscUrl: {deliverable.hasMiscUrl}
      </p>
      <p>
        hasGitHubUrl:{deliverable.hasGitHubUrl}
      </p>
      <p>
        hasTrelloUrl: {deliverable.hasTrelloUrl}
      </p>
      <p>
        hasDeploymentUrl: {deliverable.hasDeploymentUrl}
      </p>
      <p>
        hasCodeSandboxUrl: {deliverable.hasCodeSandboxUrl}
      </p>
    </div>
  )
}

export default RequirementsList