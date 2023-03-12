// Assets
import tag from '../../assets/icons/headers/tag.svg'

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
    <div className="subheader">
      <h3>
        <img src={tag} alt="requirements tag" />
        Requirements
      </h3>
      {requirementTags.map((r) => (
        <div key={r.text} className="tag" style={{ background: r.color }}>
          <p>{r.text}</p>
        </div>
      ))}
    </div>
  )
}

export default RequirementsList