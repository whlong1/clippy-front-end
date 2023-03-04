const RequirementsList = ({ deliverable }) => {
  const requirements = {
    hasQuiz: { color: 'red', text: 'Quiz' },
    hasMiscUrl: { color: 'blue', text: 'Misc' },
    hasGitHubUrl: { color: 'green', text: 'Github' },
    hasTrelloUrl: { color: 'purple', text: 'Trello' },
    hasDeploymentUrl: { color: 'orange', text: 'Deployment' },
    hasCodeSandboxUrl: { color: 'yellow', text: 'Code Sandbox' },
  }

  const activeReqs = Object.entries(requirements).filter((obj) => deliverable[obj[0]])
  const requirementTags = activeReqs.map((r) => requirements[r[0]])

  return (
    <div>
      <h4>Tags / Requirements</h4>
      {requirementTags.map((r) => (
        <p style={{ background: r.color }}>
          {r.text}
        </p>
      ))}
    </div>
  )
}

export default RequirementsList